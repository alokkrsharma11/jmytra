import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { FaJava, FaReact, FaRocket, FaGraduationCap, FaStar } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';
import { GrDatabase } from 'react-icons/gr';
import { MdShowChart } from 'react-icons/md';
import PageLayout from './PageLayout'
import './../App.css'
import './styles.css'
import bgimg from './../images/java_img.png';
import { updatePageSEO, pageSEOData } from '../utils/seoHelper';
import { getLearningProgress, getLearningRecommendation, summarizeProgress } from '../utils/learningPath';


const Home = () => {
  //const slogans = ["Jmytra4u – Your Friendly Guide 📚", "Build skills to crack certifications 🛠️", "Learn • Build • Innovate 🚀", "Learn Java, with a mitra by your side 🌱"];
  const slogans = [
    "Empowering developers with step-by-step tutorials, practical examples, and real-world projects.", 
    "Learn modern web development, cloud technologies, and best practices — from basics to advanced.",
		"Your one-stop destination for Java, Spring Boot, React, AWS, and AI tutorials.",
		"Code smarter, build faster, and stay ahead with expert-curated learning resources.",
		"Transforming beginners into professionals through clear, structured, and hands-on learning."
  ];
  
  const languageIcons = {
    java: <FaJava size={20} color="#007396" />,
    spring: <SiSpring size={20} color="#6DB33F" />,
    react: <FaReact size={20} color="#61DAFB" />,
    db: <GrDatabase size={20} color="#336791" />,
    logo: <FaGraduationCap size={32} color='#1c1783' /> 
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [learningSummary, setLearningSummary] = useState([]);
  const [recommendation, setRecommendation] = useState(null);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 3000); // change every 3 seconds
    // Update page SEO on mount
    updatePageSEO(pageSEOData.home);
    return () => clearInterval(interval);
  }, [slogans.length]);

  useEffect(() => {
    const progress = getLearningProgress();
    setLearningSummary(summarizeProgress(progress));
    setRecommendation(getLearningRecommendation());
  }, []);

  const val =  <div>
                <span className="font-semibold text-indigo-600" style={{marginLeft:0}}>Jmytra4u – Your Friendly Guide to Java and other related skills</span>
               <div><p className="text-lg text-gray-600 leading-relaxed mb-8 mt-5">Learning Java doesn’t have to be hard.
                   At Jmytra4u, we believe in being your mitra (friend) on the journey to mastering Java programming.
                   Whether you’re a beginner or looking to sharpen your skills, you’ll find clear explanations,
                   practical examples, and supportive guidance here.</p></div>
                   <br/>

                   <ul className='text-lg text-gray-600 leading-relaxed mb-8'>
                   <div style={{padding: '1rem', marginLeft: '-2rem'}}>🔹 What You’ll Find Here</div>
                    <li style={{padding: '1rem'}}>	📘 Step-by-Step Tutorials – Learn Java from the basics to advanced concepts. </li>
                    <li style={{padding: '1rem'}}>	💻 Practical Code Examples – Understand by doing, not just reading. </li>
                    <li style={{padding: '1rem'}}>	🧩 Interview Prep – Sharpen your Java knowledge for job opportunities. </li>
                    <li style={{padding: '1rem'}}>	🚀 Projects & Use Cases – Build real-world applications with Java. </li>
                    <li style={{padding: '1rem'}}>	🤝 Community Support – Learn together, grow together. </li>
                   </ul>
               </div>
  return (
    <div>
      {/* Fancy Logo Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        padding: '2rem 1rem',
        backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        marginBottom: '2rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        animation: 'fadeIn 0.6s ease-in'
      }}>
        {/* Left Stars */}
        <FaStar size={24} color="#FFD700" style={{ animation: 'bounce 1s infinite alternate' }} />
        
        {/* Main Logo Icon */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          border: '3px solid #FFD700',
          backdropFilter: 'blur(10px)',
          transition: 'transform 0.3s ease'
        }}>
          <FaRocket size={40} color="#FFD700" style={{ animation: 'pulse 2s infinite' }} />
        </div>
        
        {/* Logo Text */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#fff',
            margin: '0',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            <FaGraduationCap size={32} style={{ display: 'inline', marginRight: '0.5rem', color: '#FFD700' }} />
            Jmytra4u
          </h1>
          <p style={{
            fontSize: '0.95rem',
            color: '#f0f0f0',
            margin: '0.5rem 0 0 0',
            fontStyle: 'italic'
          }}>
            Master Java, Spring, React & More
          </p>
        </div>
        
        {/* Right Stars */}
        <FaStar size={24} color="#FFD700" style={{ animation: 'bounce 1s infinite alternate 0.2s' }} />
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>

      <div className='container'>
        <div style={{ display: 'flex', gap: '.5rem', alignItems: 'flex-start' }}>
          {/* Main PageLayout Content - Left Side */}
          <div style={{ flex: '0 0 60%', width: '60%' }}>
            <PageLayout title='Welcome to Jmytra4u !' data={val} bgimg={bgimg} icon={languageIcons['logo']}/>
          </div>

          {/* Recommendation Card - Right Side */}
          {recommendation && (
            <div style={{ flex: '0 0 38%', width: '38%', position: 'sticky', top: '8rem' }}>
              <div className="p-6 rounded-xl shadow-lg bg-white text-black h-full" style={{ padding: '1rem' }}>
                <h2 className="text-2xl font-bold mb-3">Your Personalized Learning Path</h2>
                <p className="mb-3 text-gray-700">{recommendation.description}</p>
                <Link to={recommendation.path} className="btn btn-primary">
                  {recommendation.title}
                </Link>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 mt-4" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MdShowChart size={24} color="#3b82f6" />
                    Progress summary
                  </h3>
                  {learningSummary.map((item) => {
                    const accuracyPercent = item.attempts > 0 ? Math.round(item.accuracy * 100) : 0;
                    const barColor = 
                      accuracyPercent >= 80 ? '#10b981' : 
                      accuracyPercent >= 60 ? '#f59e0b' : 
                      accuracyPercent >= 40 ? '#f97316' : 
                      '#ef4444';
                    
                    return (
                      <div key={item.language} className="mb-4">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {languageIcons[item.language]}
                            <strong style={{ fontSize: '0.95rem' }}>{item.label}</strong>
                          </div>
                          <span style={{ fontSize: '0.9rem', color: '#666' }}>
                            {item.attempts > 0 
                              ? `${accuracyPercent}% (${item.correct}/${item.attempts})` 
                              : 'Not started'}
                          </span>
                        </div>
                        {item.attempts > 0 && (
                          <div style={{
                            width: '100%',
                            height: '24px',
                            backgroundColor: '#e5e7eb',
                            borderRadius: '6px',
                            overflow: 'hidden',
                            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                          }}>
                            <div
                              style={{
                                width: `${accuracyPercent}%`,
                                height: '100%',
                                backgroundColor: barColor,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                transition: 'width 0.3s ease',
                              }}
                            >
                              {accuracyPercent > 10 && `${accuracyPercent}%`}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
        <br/>
        {/* Slogan at the bottom */}
        <div className="slogan-container text-right">
          <p key={currentIndex} className="slogan">
            {slogans[currentIndex]}
          </p>
        </div>
      </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Home;