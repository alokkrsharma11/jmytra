import { useEffect, useState } from "react";
import { Tabs, Tab, Box, IconButton } from "@mui/material";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import QuizContent from "./QuizContent";
import PageLayout from "./PageLayout";
import "./../App.css";

const JavaTutorial = () => {
  const [quizA, setQuizA] = useState([]);
  const [quizB, setQuizB] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false); // control sidebar

  // Load first quiz
  useEffect(() => {
    fetch("./data/java_quizs_realistic.json")
      .then((res) => res.json())
      .then((val) => setQuizA(val))
      .catch((err) => console.error("Error loading JSON:", err));
      
  }, []);

  // Load second quiz
  useEffect(() => {
    fetch("/java_quizs.json")
      .then((res) => res.json())
      .then((val) => setQuizB(val))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  // Merge both when either changes
  /*useEffect(() => {
    if (quizA.length > 0 || quizB.length > 0) {
      setQuestions([...quizA, ...quizB]);
    }
  }, [quizA, quizB]);*/
  useEffect(() => {
    const loadMarkdownForQuestions = async (qs) => {
      return Promise.all(
        qs.map(async (q) => {
          if (q.explanation?.diagram) {
            try {
              const res = await fetch(q.explanation.diagram);
              const md = await res.text();
              return { 
                ...q, 
                explanation: { 
                  ...q.explanation, 
                  diagramMarkdown: md   // store it alongside the diagram
                } 
              };
            } catch (err) {
              console.error("Error loading markdown:", err);
            }
          }
          return q;
        })
      );
    };

    const mergeAndLoad = async () => {
      const merged = [...quizA, ...quizB];
      const withMarkdown = await loadMarkdownForQuestions(merged);
      setQuestions(withMarkdown);
    };

    if (quizA.length > 0 || quizB.length > 0) {
      mergeAndLoad();
    }
  }, [quizA, quizB]);

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