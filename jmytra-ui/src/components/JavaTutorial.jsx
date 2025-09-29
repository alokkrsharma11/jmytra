import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box, IconButton } from "@mui/material";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import QuizContent from "./QuizContent";
import PageLayout from "./PageLayout";
import "./../App.css";

const JavaTutorial = ({ language = "java" }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false); // control sidebar

  // Load quizs
  useEffect(() => {
    const loadAllQuizzes = async () => {
      try {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const CONTEXT_PATH = process.env.REACT_APP_API_CONTEXT_PATH;
        const apiUrl = `${API_BASE_URL}${CONTEXT_PATH}/quizzes/${language}`;
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
                const mdRes = await fetch(`${API_BASE_URL}${CONTEXT_PATH}${q.explanation.diagram}`); // your DiagramController
    
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

    loadAllQuizzes();
  }, [language]);

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
  
  if (loading) return <p className="container">Loading...</p>;
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "grey.900", color: "white" }}>
      {/* Toggle Button */}
      <IconButton
        onClick={() => setSidebarOpen(!sidebarOpen)}
        sx={{
          position: "absolute",
          top: "14rem",
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
          width: 250,
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
          aria-label="Java Tutorial Tabs"
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
      <Box  sx={{
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
              <PageLayout key={index} title={`📘 Java Programming Language: ${type} Questions`} sidebarOpen={{sidebarOpen}}/>
              <div className="container">
              <Box key={type} sx={{ mb: 4 }}>
                
                {grouped[type].map((question, i) => (
                  <QuizContent key={i} question={question} />
                ))}
              </Box>
              </div>
              </div>
            )
        )}
      </Box>
    </Box>
  );
};

export default JavaTutorial;