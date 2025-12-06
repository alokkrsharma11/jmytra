const loadAllQuizzes = async (language, setLoading, setQuestions) => {
      try {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        //const CONTEXT_PATH = process.env.REACT_APP_API_CONTEXT_PATH;
        //const apiUrl = `${API_BASE_URL}${CONTEXT_PATH}/quizzes/${language}`;
        const apiUrl = `${API_BASE_URL}/quizzes/${language}`;
        const res = await fetch(apiUrl);

        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();

        // Fetch diagram markdowns if present
        const questionsWithDiagrams = await Promise.all(
          data.map(async (q) => {
            if (q.explanation?.diagram) {
              try {
                console.log(q.explanation.diagram);
                //const mdRes = await fetch(q.explanation.diagram);
                //const mdRes = await fetch(`${API_BASE_URL}${CONTEXT_PATH}${q.explanation.diagram}`); // your DiagramController
                const mdRes = await fetch(`${API_BASE_URL}${q.explanation.diagram}`); // your DiagramController
    
                if (!mdRes.ok) throw new Error("Failed to fetch diagram");

                //const contentType = mdRes.headers.get("content-type");

                // if (!contentType?.includes("text/markdown")) {
                //   console.warn(
                //     `Skipping diagram fetch for "${q.question}": content type ${contentType}`
                //   );
                //   return q;
                // }

                const diagramMarkdown = await mdRes.text();
                return {
                  ...q,
                  explanation: {
                    ...q.explanation,
                    diagramMarkdown,
                  },
                };
              } catch (err) {
                console.error(
                  `Error loading markdown for question "${q.question}":`,
                  err
                );
                return q;
              }
            }
            return q;
          })
        );

        setQuestions(questionsWithDiagrams);
      } catch (err) {
        console.error("Error loading quizzes:", err);
      } finally {
        setLoading(false);
      }
    };

export default loadAllQuizzes;