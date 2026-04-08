const STORAGE_KEY = "JMYTRA_LEARNING_PROGRESS";
const defaultTopic = "General";

const languageLabels = {
  java: "Java",
  spring: "Spring",
  react: "React",
  db: "Database",
};

const tutorialRoutes = {
  java: "/JavaTutorial",
  spring: "/SpringTutorial",
  react: "/ReactTutorial",
  db: "/DbTutorial",
};

const loadProgress = () => {
  if (typeof window === "undefined") return { topics: {} };

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : { topics: {} };
  } catch (error) {
    console.error("Unable to read learning progress", error);
    return { topics: {} };
  }
};

const saveProgress = (progress) => {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Unable to save learning progress", error);
  }
};

const normalizeLanguage = (language) => {
  if (!language) return "general";
  return String(language).toLowerCase();
};

const saveQuizResult = ({ language = "general", topic = defaultTopic, correct = false }) => {
  const normalizedLanguage = normalizeLanguage(language);
  const normalizedTopic = topic || defaultTopic;
  const progress = loadProgress();

  progress.topics[normalizedLanguage] = progress.topics[normalizedLanguage] || {};
  progress.topics[normalizedLanguage][normalizedTopic] = progress.topics[normalizedLanguage][normalizedTopic] || {
    attempts: 0,
    correct: 0,
    lastAttempt: null,
  };

  const record = progress.topics[normalizedLanguage][normalizedTopic];
  record.attempts += 1;
  if (correct) record.correct += 1;
  record.lastAttempt = new Date().toISOString();

  progress.updatedAt = record.lastAttempt;
  saveProgress(progress);
  return progress;
};

const getLearningProgress = () => loadProgress();

const summarizeProgress = (progress) => {
  const languages = Object.keys(tutorialRoutes);
  return languages.map((language) => {
    const topicsData = progress.topics?.[language] || {};
    const topics = Object.entries(topicsData).map(([topic, record]) => ({
      topic,
      attempts: record.attempts,
      correct: record.correct,
      accuracy: record.attempts ? record.correct / record.attempts : 0,
      lastAttempt: record.lastAttempt,
    }));

    const attempts = topics.reduce((sum, item) => sum + item.attempts, 0);
    const correct = topics.reduce((sum, item) => sum + item.correct, 0);
    const accuracy = attempts ? correct / attempts : 0;
    const weakestTopic = topics.length
      ? [...topics].sort((a, b) => a.accuracy - b.accuracy || b.attempts - a.attempts)[0]
      : null;

    return {
      language,
      label: languageLabels[language] || language,
      attempts,
      correct,
      accuracy,
      topics,
      weakestTopic,
      route: tutorialRoutes[language],
    };
  });
};

const getLearningRecommendation = () => {
  const progress = loadProgress();
  const summary = summarizeProgress(progress);
  const started = summary.filter((item) => item.attempts > 0);

  if (started.length === 0) {
    return {
      title: "Start your learning journey with Java",
      description: "Try a Java quiz to build your first progress score and receive personalized recommendations.",
      path: tutorialRoutes.java,
    };
  }

  const practiceAreas = started.filter((item) => item.accuracy < 0.7);
  if (practiceAreas.length > 0) {
    const weakest = [...practiceAreas].sort((a, b) => a.accuracy - b.accuracy || a.attempts - b.attempts)[0];
    return {
      title: `Practice ${weakest.label} ${weakest.weakestTopic?.topic || "topics"}`,
      description: weakest.weakestTopic
        ? `Your ${weakest.weakestTopic.topic} accuracy is ${Math.round(weakest.weakestTopic.accuracy * 100)}%. Continue with ${weakest.label} questions to improve confidence.`
        : `Continue practicing ${weakest.label} to improve your learning path.`,
      path: weakest.route,
    };
  }

  const notStarted = summary.filter((item) => item.attempts === 0);
  if (notStarted.length > 0) {
    const next = notStarted[0];
    return {
      title: `Explore ${next.label} next`,
      description: `You already have strong progress in another area. Try ${next.label} next to broaden your skills.`,
      path: next.route,
    };
  }

  const best = [...started].sort((a, b) => a.accuracy - b.accuracy)[0];
  return {
    title: `Keep growing in ${best.label}`,
    description: `Your progress is solid. Continue practicing ${best.label} or switch to another topic for balanced learning.`,
    path: best.route,
  };
};

export { saveQuizResult, getLearningProgress, getLearningRecommendation, summarizeProgress };
