import React, {useEffect, useState} from 'react'
import PageLayout from './PageLayout'
import './../App.css'
import './styles.css'
import bgimg from './../images/java_img.png';


const Home = () => {
  //const slogans = ["Jmytra4u – Your Friendly Guide 📚", "Build skills to crack certifications 🛠️", "Learn • Build • Innovate 🚀", "Learn Java, with a mitra by your side 🌱"];
  const slogans = [
    "Empowering developers with step-by-step tutorials, practical examples, and real-world projects.", 
    "Learn modern web development, cloud technologies, and best practices — from basics to advanced.",
		"Your one-stop destination for Java, Spring Boot, React, AWS, and AI tutorials.",
		"Code smarter, build faster, and stay ahead with expert-curated learning resources.",
		"Transforming beginners into professionals through clear, structured, and hands-on learning."
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [slogans.length]);

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

      <div  className='container'>
      <PageLayout title='Welcome to Jmytra4u !' data={val} bgimg={bgimg} w='35px' h='18px'/>
      
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

export default Home