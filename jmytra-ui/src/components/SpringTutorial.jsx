import { useEffect, useState } from "react";
import { Tabs, Tab, Box, IconButton } from "@mui/material";
import QuizContent from "./QuizContent";
import PageLayout from "./PageLayout";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import './../App.css'
import loadAllQuizzes from "../utils/quizLoader";

const SpringTutorial = ({ language = "spring" }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false); // control sidebar

  // Load quizs
  useEffect(() => {
    loadAllQuizzes(language, setLoading, setQuestions);
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

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "grey.900", color: "white" }}>
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
              <PageLayout key={index} title={`📘 Spring Framework: ${type} Questions`}  sidebarOpen={{sidebarOpen}}/>
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

export default SpringTutorial;