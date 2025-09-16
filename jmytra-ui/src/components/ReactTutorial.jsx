// src/pages/LearnPage.jsx
import React, { useState, useEffect } from "react";
import PageLayout from "./PageLayout";
import { Box, Tabs, Tab } from "@mui/material";
import './../App.css'
import QuizContent from "./QuizContent";

const ReactTutorial = () => {
  const [topics, setTopics] = useState([]);
  const [quizA, setQuizA] = useState([]);
  const [quizB, setQuizB] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  // Load first quiz
  useEffect(() => {
    fetch("./data/react_realistic_100.json")
      .then((res) => res.json())
      .then((val) => setQuizA(val))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  // Load second quiz
  useEffect(() => {
    fetch("/reactjs_tutorial.json")
      .then((res) => res.json())
      .then((val) => setQuizB(val))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  // Merge both when either changes
  useEffect(() => {
    if (quizA.length > 0 || quizB.length > 0) {
      setTopics([...quizA, ...quizB]);
    }
  }, [quizA, quizB]);


  // Group questions by type
  const grouped = topics.reduce((acc, q) => {
    const type = q.type || "General";
    (acc[type] ||= []).push(q);
    return acc;
  }, {});

  const types = Object.keys(grouped);

  const handleChange = (_, newValue) => {
    setTabIndex(newValue);
  };

  if (topics.length === 0) {
    return <div className="p-6 text-white">Loading questions...</div>;
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "grey.900", color: "white" }}>
      {/* Sidebar Tabs */}
      <Box sx={{ borderRight: 1, borderColor: "divider", bgcolor: "grey.800", width: 220 }}>
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
          {types.map((type) => (
            <Tab key={type} label={type} />
          ))}
        </Tabs>
      </Box>

      {/* Main content */}
      <Box sx={{ flex: 1, p: 4, overflowY: "auto" }}>
        {types.map((type, index) =>
          tabIndex === index && (
            <Box key={type} sx={{ mb: 4 }}>
              
                <PageLayout title={`📘 ${type} Questions`} />
              
              

              {grouped[type].map((topic, i) => (
                <>
                {topic.askedBy ? (
                  <QuizContent  key={type} question={topic}/>
                ):(
                <div key={i} className="mb-6 p-4 border rounded-lg shadow-sm bg-white text-black">
                  
                  <h2 className="text-2xl font-semibold mb-3">
                    {topic.question || topic.title}
                  </h2>
                  

                  {/* Render items if they exist */}
                  {topic.items && (
                    <ul className="list-disc ml-6">
                      {topic.items.map((item, j) => (
                        <li key={j} className="mb-2">
                          <strong>{item.name}:</strong> {item.description}
                          {item.example && (
                            <pre className="bg-gray-100 p-2 rounded mt-1">{item.example}</pre>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Render React features list */}
                  {topic.features && (
                    <ul className="list-disc ml-6">
                      {topic.features.map((f, j) => (
                        <li key={j}>{f}</li>
                      ))}
                    </ul>
                  )}

                  {/* Render lifecycle methods */}
                  {topic.phases && (
                    <div>
                      {Object.entries(topic.phases).map(([phase, methods]) => (
                        <div key={phase}>
                          <h3 className="text-xl mt-3">{phase}</h3>
                          <ul className="list-disc ml-6">
                            {methods.map((m, j) => (
                              <li key={j}>{m}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Render differences */}
                  {topic.differences && (
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
                          <tr key={j}>
                            <td className="border px-4 py-2">{d.keyword}</td>
                            <td className="border px-4 py-2">{d.scope}</td>
                            <td className="border px-4 py-2">{d.hoisting}</td>
                            <td className="border px-4 py-2">{d.reassignment}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  {/* Render loops */}
                {topic.loops && (
                <div>
                    <h3 className="text-xl mt-2">Loops</h3>
                    <ul className="list-disc ml-6">
                    {topic.loops.map((l, i) => (
                        <li key={i}>{l}</li>
                    ))}
                    </ul>
                </div>
                )}

                {/* Render array methods */}
                {topic.arrayMethods && (
                <div>
                    <h3 className="text-xl mt-2">Array Methods</h3>
                    <ul className="list-disc ml-6">
                    {topic.arrayMethods.map((m, i) => (
                        <li key={i}>{m}</li>
                    ))}
                    </ul>
                </div>
                )}

                {/* Render OOP concepts */}
                {topic.concepts && (
                <div>
                    <h3 className="text-xl mt-2">Concepts</h3>
                    <ul className="list-disc ml-6">
                    {topic.concepts.map((c, i) => (
                        <li key={i}>{c}</li>
                    ))}
                    </ul>
                </div>
                )}

                {/* Render example class */}
                {topic.exampleClass && (
                <div>
                    <h3 className="text-xl mt-2">Example Class</h3>
                    <pre className="bg-gray-100 p-2 rounded mt-1 text-black">
                    {topic.exampleClass}
                    </pre>
                </div>
                )}

                {/* Closure */}
                  {/* Render example class */}
                {topic.definition && (
                <div>
                    <h3 className="text-xl mt-2">Definition:</h3>
                    <p className="bg-gray-100 p-2 rounded mt-1 text-black">
                    {topic.definition}
                    </p>
                </div>
                )}
                
                {topic.useCases && (
                  <div>
                    <h3 className="text-xl mt-2">Use Cases:</h3>
                    <ul className="list-disc ml-6"></ul>
                {topic.useCases.map((use, idx) => (
                  
                  <ul className="list-disc ml-6">
                    
                  <li className="bg-gray-100 p-2 rounded mt-1 text-black" key={idx}>✅ {use}</li>
                  </ul>
                ))}
                </div>
              )}

              {topic.keyPoints && (
                  <div>
                    <h3 className="text-xl mt-2">Key Points</h3>
                    <ul className="list-disc ml-6"></ul>
                {topic.keyPoints.map((point, idx) => (
                  
                  <ul className="list-disc ml-6">
                    
                  <li className="bg-gray-100 p-2 rounded mt-1 text-black" key={idx}>✅ {point}</li>
                  </ul>
                ))}
                </div>
              )}
                </div>
                )}
                </>  
              ))}
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default ReactTutorial;