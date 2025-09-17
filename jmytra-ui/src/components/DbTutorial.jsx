import { useEffect, useState } from "react";
import { Tabs, Tab, Box, IconButton } from "@mui/material";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import QuizContent from "./QuizContent";
import PageLayout from "./PageLayout";
import './../App.css'

const DbTutorial = () => {
  const [quizA, setQuizA] = useState([]);
  const [quizB, setQuizB] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false); // control sidebar

  // Load first quiz
  useEffect(() => {
    fetch("./data/databases_realistic_100.json")
      .then((res) => res.json())
      .then((val) => setQuizA(val))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  // Load second quiz
  useEffect(() => {
    fetch("/db_quizs.json")
      .then((res) => res.json())
      .then((val) => setQuizB(val))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  // Merge both when either changes
  useEffect(() => {
    if (quizA.length > 0 || quizB.length > 0) {
      setQuestions([...quizA, ...quizB]);
    }
  }, [quizA, quizB]);

  // Group questions by type
  const grouped = questions.reduce((acc, q) => {
    const type = q.type || "General";
    (acc[type] ||= []).push(q);
    return acc;
  }, {});

  const types = Object.keys(grouped);

  const handleChange = (_, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "grey.900", color: "white" }}>
      {/* Toggle Button */}
      <IconButton
        onClick={() => setSidebarOpen(!sidebarOpen)}
        sx={{
          position: "absolute",
          top: "1rem",
          left: sidebarOpen ? 220 : 0,
          zIndex: 1200,
          bgcolor: "grey.700",
          color: "white",
          "&:hover": { bgcolor: "grey.600" },
          transition: "left 0.3s ease",
        }}
      >
        {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>

      {/* Sidebar Tabs */}
      <Box sx={{
          borderRight: 1,
          borderColor: "divider",
          bgcolor: "grey.800",
          width: 220,
          transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          position: "relative",
          zIndex: 1100,
        }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tabIndex}
          onChange={handleChange}
          aria-label="Java Tutorial Tabs"
          sx={{
            "& .MuiTab-root": {
              alignItems: "flex-start",
              color: "grey.400",
              textTransform: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
            },
            "& .Mui-selected": {
              color: "white",
              bgcolor: "grey.700",
              borderRadius: "8px",
            },
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
        {types.map((type, index) => (
          tabIndex === index && (
            <div className="container">
            <Box key={type} sx={{ mb: 4 }}>
              <PageLayout title={`📘 Databases (Sql & NoSql): ${type} Questions`} />
              {grouped[type].map((question) => (
                <QuizContent
                  question={question}
                />
              ))}
            </Box>
            </div>
          )
        ))}
      </Box>
    </Box>
  );
};

export default DbTutorial;