// About.jsx
import React from "react";
import './../App.css';
import img from './../images/pic.png';

const About = () => {
  return (
    <section className="container bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8 mt-5">
          Welcome to <span className="font-semibold text-indigo-600" style={{marginLeft:0}}>Jmytra4u</span> —
          your go-to platform for mastering Java, Spring Boot, Databases, and
          the latest web technologies. Our mission is to simplify complex
          concepts with step-by-step tutorials, quizzes, and real-world
          examples.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Whether you are a student, a beginner, or an experienced professional,
          our content is designed to help you sharpen your skills and keep up
          with industry trends. We believe learning should be practical,
          engaging, and accessible to everyone.
        </p>
    
      </div>
        <br/><br/>
      <div className="row align-items-center">
          {/* Author Image */}
          <div className="col-md-2 text-center mb-4 mb-md-0">
            <img
              src={img} height="2rem"
              alt="Author"
              className="rounded-circle shadow-lg img-fluid"
            />
          </div>

          {/* Author Details */}
          <div className="col-md-10">
            <h2 className="mb-3"><u>About the Author</u></h2>
            <p>
              Hi 👋 I’m <strong>Alok Sharma</strong>, a passionate Software Engineer
              with <strong>14+ years of experience</strong> in IT consultancy services.
              My expertise lies in <em>Java, Spring Boot, REST APIs, React.js</em> and
              modern cloud platforms like <em>AWS & Azure</em>.
            </p>
            <p>
              Over the years, I’ve worked on diverse projects, including full-stack
              applications, enterprise solutions, and cloud-native systems. I enjoy
              designing scalable architectures, optimizing performance, and mentoring
              teams to deliver high-quality software. 🚀
            </p>
            <p>
              I created this tutorial website to share knowledge, simplify complex
              concepts, and help learners and professionals grow in their careers.
              Here, you’ll find tutorials, quizzes, and practical examples on topics
              like <strong>Java, Databases, Spring, React, and AI</strong>.
            </p>
            <p className="text-muted fst-italic">
              “Knowledge grows when shared. Let’s learn, build, and innovate together!”
            </p>

            {/* Quick Contact */}
            <div className="mt-16">
              <a
                href="mailto:alok@example.com"
                className="btn btn-outline-primary me-3"
              >
                📧 Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/alok-sharma"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary me-3"
              >
                🔗 Connect on LinkedIn
              </a>
              <a
                href="/tutorials"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary me-3"
              >
                Explore Tutorials
              </a>
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary me-3"
                >
                Contact Us
              </a>
            </div>
            
        
          </div>
        </div>

            <br/><br/><br/><br/><br/>
            
    </section>
  );
};

export default About;