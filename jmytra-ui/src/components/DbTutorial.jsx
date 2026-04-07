import { useEffect, useState } from "react";
import { Tabs, Tab, Box, IconButton } from "@mui/material";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import { FaJava, FaReact } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';
import { GrDatabase } from 'react-icons/gr';
import QuizContent from "./QuizContent";
import PageLayout from "./PageLayout";
import './../App.css'
import loadAllQuizzes from "../utils/quizLoader";
import { updatePageSEO, pageSEOData } from "../utils/seoHelper";
import { getLearningProgress, summarizeProgress } from "../utils/learningPath";

const DbTutorial = ({language='db'}) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false); // control sidebar
  const [searchTerm, setSearchTerm] = useState("");
  const [learningSummary, setLearningSummary] = useState([]);
  
  const languageIcons = {
      java: <FaJava size={28} color="#007396" />,
      spring: <SiSpring size={28} color="#6DB33F" />,
      react: <FaReact size={28} color="#61DAFB" />,
      db: <GrDatabase size={28} color="#336791" />,
  };

  // Load quizs
  useEffect(() => {
    loadAllQuizzes(language, setLoading, setQuestions);
    // Update page SEO on mount
    updatePageSEO(pageSEOData.database);
    // Load learning progress
    const progress = getLearningProgress();
    setLearningSummary(summarizeProgress(progress));
  }, [language]);

  // Listen to global search dispatched from topbar
  useEffect(() => {
    const handler = (e) => {
      setSearchTerm(e?.detail?.value || "");
    };
    window.addEventListener("global-search", handler);
    return () => window.removeEventListener("global-search", handler);
  }, []);

  // Group questions by type
  const grouped = questions.reduce((acc, q) => {
    const type = q.type || "Advance Concepts";
    (acc[type] ||= []).push(q);
    return acc;
  }, {});

  const types = Object.keys(grouped);

  const handleChange = (_, newValue) => {
    setTabIndex(newValue);
    setSidebarOpen(!sidebarOpen);
  };

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "grey.900", color: "white" }}>
      {/* Toggle Button */}
      <IconButton
        onClick={() => setSidebarOpen(!sidebarOpen)}
        sx={{
          position: "absolute",
          top: "6rem",
          left: sidebarOpen ? 220 : 0,
          zIndex: 1200,
          bgcolor: "#bbab97ff",
          color: "black",
          "&:hover": { bgcolor: "#d2b48c" },
          transition: "left 0.3s ease",
        }}
      >
        {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>

      {/* Sidebar Tabs */}
      <Box
        sx={{
          borderRight: 1,
          borderColor: "divider",
          bgcolor: "#201f1fff",
          width: 220,
          transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          position: "relative",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tabIndex}
          onChange={handleChange}
          aria-label="Database Tabs"
          sx={{
            "& .MuiTab-root": {
              alignItems: "flex-start",
              color: "#d2b48c",
              textTransform: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
            },
            "& .Mui-selected": {
              color: "#d2b48c !important",
              bgcolor: "#665656 !important",
              fontWeight: 700,
              borderRadius: "8px",
            },
            "& .MuiTabs-indicator": {
              bgcolor: "#d2b48c"
            }
          }}
        >
          {types.map((type, index) => (
            <Tab key={type} label={type} />
          ))}
        </Tabs>
      </Box>

      {/* Main content */}
      <Box sx={{
            flex: 1,
            p: 4,
            overflowY: "auto",
            transition: "margin-left 0.3s ease",   // smooth shifting
            marginLeft: sidebarOpen ? "0px" : "-220px", // shift by sidebar width
          }}>
        {types.map(
          (type, index) =>
            tabIndex === index && (
              <div>
                {/* Title and Progress Summary Side-by-Side */}
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  {/* Title on left */}
                  <div style={{ flex: '0 0 60%', width: '60%', paddingLeft: '3%' }}>
                    <PageLayout key={index} title={` Databases (Sql & NoSql): ${type} Questions`} sidebarOpen={{sidebarOpen}} icon={languageIcons['db']}/>
                  </div>
                  
                  {/* Progress Summary on right */}
                  <div style={{ flex: '0 0 30%', width: '30%' }}>
                  
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1rem' }}>
                      {learningSummary.filter(item => item.language === language).map((item) => {
                        const accuracyPercent = item.attempts > 0 ? Math.round(item.accuracy * 100) : 0;
                        const barColor = accuracyPercent >= 80 ? '#10b981' : accuracyPercent >= 60 ? '#f59e0b' : accuracyPercent >= 40 ? '#f97316' : '#ef4444';
                        return (
                          <div key={item.language} style={{ backgroundColor: '#1a1a1a', padding: '0.75rem', borderRadius: '6px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ddd' }}>
                              <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>Progress:</span>
                            
                            
                            {item.attempts > 0 ? (
                              <>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#999' }}>
                                  <span>{accuracyPercent}%</span>
                                  <span>{item.correct}/{item.attempts}</span>
                                </div>
                                <div style={{ width: '100%', height: '16px', backgroundColor: '#0a0a0a', borderRadius: '4px', overflow: 'hidden' }}>
                                  <div style={{ width: `${accuracyPercent}%`, height: '100%', backgroundColor: barColor, transition: 'width 0.3s ease' }} />
                                </div>
                              </>
                            ) : (
                              <span style={{ fontSize: '1rem', color: '#888' }}>Not started</span>
                            )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                  </div>
                </div>
                
                <div className="container">
                  <Box key={type} sx={{ mb: 4 }}>
                    {(() => {
                      const items = grouped[type] || [];
                      const q = searchTerm.trim().toLowerCase();
                      const filtered = q ? items.filter(it => JSON.stringify(it).toLowerCase().includes(q)) : items;
                      return filtered.length > 0 ? (
                        filtered.map((question, i) => (
                          <QuizContent key={i} question={question} language={language} />
                        ))
                      ) : (
                        <div style={{ padding: 12, color: '#666' }}>No results found for "{searchTerm}"</div>
                      );
                    })()}
                  </Box>
                </div>
              </div>
            )
        )}
      </Box>
    </Box>
  );
};

export default DbTutorial;