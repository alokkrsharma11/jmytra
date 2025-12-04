// src/pages/LearnPage.jsx
import React, { useState, useEffect } from "react";
import PageLayout from "./PageLayout";
import { Tabs, Tab, Box, IconButton } from "@mui/material";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import "./../App.css";
import QuizContent from "./QuizContent";
import CodeBlock from "./CodeBlock";
import loadAllQuizzes from "../utils/quizLoader";

const ReactTutorial = ({ language = "react" }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false); // control sidebar

  // Load quizzes
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
  const activeType = types.length ? types[tabIndex] : null;
  const topics = activeType ? grouped[activeType] : [];

  const handleChange = (_, newValue) => {
    setTabIndex(newValue);
    // keep sidebar behavior separate; don't toggle sidebar on tab change
    setSidebarOpen(!sidebarOpen); // optional: open sidebar when tab changes
  };

  if (loading) return <div className="p-6 text-white">Loading questions...</div>;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "grey.900", color: "white" }}>
      {/* Toggle Button (use fixed so it won't move with container) */}
      <IconButton
        onClick={() => setSidebarOpen(!sidebarOpen)}
        sx={{
          position: "fixed",
          top: "14rem",
          left: sidebarOpen ? 220 : 0,
          zIndex: 1300,
          bgcolor: "#bbab97ff",
          color: "black",
          "&:hover": { bgcolor: "#d2b48c" },
          transition: "left 0.3s ease",
        }}
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
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
          aria-label="React Tutorial Tabs"
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
              bgcolor: "#d2b48c",
            },
          }}
        >
          {types.map((type, idx) => (
            <Tab key={type + idx} label={type} />
          ))}
        </Tabs>
      </Box>

      {/* Main content */}
      <Box
        sx={{
          flex: 1,
          p: 4,
          overflowY: "auto",
          transition: "margin-left 0.3s ease",
          marginLeft: sidebarOpen ? "0px" : "-220px",
        }}
      >
        <PageLayout title={`📘 ReactJS: ${activeType || "Topics" } Questions`} sidebarOpen={sidebarOpen} />
        <div className="container">
          <Box sx={{ mb: 4 }}>
            {topics.map((topic, i) => {
              const topicKey = topic.id ?? `${activeType}-${i}`;
              return (
                <React.Fragment key={topicKey}>
                  {topic.askedBy ? (
                    // QuizContent expects a single topic; use a stable key
                    <QuizContent key={topicKey} question={topic} />
                  ) : (
                    <div className="mb-6 p-4 border rounded-lg shadow-sm bg-white text-black">
                      <h2 className="text-2xl font-semibold mb-3">
                        {topic.question || topic.title}
                      </h2>

                      {/* Items */
                      //console.log(topic.title)
                      console.log(topic.item)
                      }
                      {Array.isArray(topic.item) && topic.item.length > 0 && (
                        <ul className="list-disc ml-6">
                          {topic.item.map((item, j) => {
                            const subs = item.subitems || item.subItems || [];

                            return (
                              <li key={item.name ?? j} className="mb-4">
                                <strong>{item.name}</strong>

                                {/* Item description */}
                                {item.description && (
                                  <p className="mt-1">{item.description}</p>
                                )}

                                {/* Item example */}
                                {item.example && (
                                  <pre className="bg-gray-100 p-2 rounded mt-2">{item.example}</pre>
                                )}

                                {/* Subitems (Gradient Backgrounds, etc.) */}
                                {Array.isArray(subs) && subs.length > 0 && (
                                  <ul className="list-disc ml-6 mt-3">
                                    {subs.map((si, sidx) => (
                                      <li key={si.type ?? sidx} className="mb-2">
                                        <strong>{si.type}:</strong> {si.description}
                                        {si.example && (
                                          <pre className="bg-gray-100 p-2 rounded mt-1">{si.example}</pre>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}

                      {/* Features */}
                      {Array.isArray(topic.features) && (
                        <ul className="list-disc ml-6">
                          {topic.features.map((f, j) => (
                            <li key={f ?? j}>{f}</li>
                          ))}
                        </ul>
                      )}

                      {/* Lifecycle phases (phases may be object or structured as in your tutorial file) */}
                      {topic.phases && typeof topic.phases === "object" && (
                        <div>
                          {Object.entries(topic.phases).map(([phase, methods]) => {
                            // methods might be an array or a single string; normalize
                            const methodList = Array.isArray(methods) ? methods : [methods];
                            return (
                              <div key={phase}>
                                <h3 className="text-xl mt-3">{phase}</h3>
                                <ul className="list-disc ml-6">
                                  {methodList.map((m, j) => (
                                    <li key={m ?? j}>{m}</li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Differences (array of diff objects) */}
                      {Array.isArray(topic.differences) && topic.differences.length > 0 && (
                        <table className="table-auto border mt-3">
                          <thead>
                            <tr>
                              <th className="border px-4 py-2">Keyword</th>
                              <th className="border px-4 py-2">Scope</th>
                              <th className="border px-4 py-2">Hoisting</th>
                              <th className="border px-4 py-2">Reassignment</th>
                            </tr>
                          </thead>
                          <tbody>
                            {topic.differences.map((d, j) => (
                              <tr key={d.keyword ?? j}>
                                <td className="border px-4 py-2">{d.keyword}</td>
                                <td className="border px-4 py-2">{d.scope}</td>
                                <td className="border px-4 py-2">{d.hoisting}</td>
                                <td className="border px-4 py-2">{d.reassignment}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}

                      {/* Loops */}
                      {Array.isArray(topic.loops) && (
                        <div>
                          <h3 className="text-xl mt-2">Loops</h3>
                          <ul className="list-disc ml-6">
                            {topic.loops.map((l, j) => (
                              <li key={l ?? j}>{l}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Array Methods */}
                      {Array.isArray(topic.arrayMethods) && (
                        <div>
                          <h3 className="text-xl mt-2">Array Methods</h3>
                          <ul className="list-disc ml-6">
                            {topic.arrayMethods.map((m, j) => (
                              <li key={m ?? j}>{m}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Code Block */}
                      {topic.code && (
                        <CodeBlock language={topic.language || "javascript"} code={topic.code} />
                      )}

                      {/* Concepts */}
                      {Array.isArray(topic.concepts) && (
                        <div>
                          <h3 className="text-xl mt-2">Concepts</h3>
                          <ul className="list-disc ml-6">
                            {topic.concepts.map((c, j) => (
                              <li key={c ?? j}>{c}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Example Class */}
                      {topic.exampleClass && (
                        <div>
                          <h3 className="text-xl mt-2">Example Class</h3>
                          <pre className="bg-gray-100 p-2 rounded mt-1 text-black">{topic.exampleClass}</pre>
                        </div>
                      )}

                      {/* Definition */}
                      {topic.definition && (
                        <div>
                          <h3 className="text-xl mt-2">Definition</h3>
                          <p className="bg-gray-100 p-2 rounded mt-1 text-black">{topic.definition}</p>
                        </div>
                      )}

                      {/* Use Cases */}
                      {Array.isArray(topic.useCases) && (
                        <div>
                          <h3 className="text-xl mt-2">Use Cases</h3>
                          <ul className="list-disc ml-6">
                            {topic.useCases.map((use, j) => (
                              <li key={use ?? j} className="bg-gray-100 p-2 rounded mt-1 text-black">✅ {use}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Key Points */}
                      {Array.isArray(topic.keyPoints) && (
                        <div>
                          <h3 className="text-xl mt-2">Key Points</h3>
                          <ul className="list-disc ml-6">
                            {topic.keyPoints.map((point, j) => (
                              <li key={point ?? j} className="bg-gray-100 p-2 rounded mt-1 text-black">✅ {point}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default ReactTutorial;