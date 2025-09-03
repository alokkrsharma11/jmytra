import React, { useState } from 'react'
import { data } from '../menu-data'
import PageLayout from './PageLayout'
import './../App.css'
import image from './../images/java_img.png';


const Home = () => {
  const [menuData] = useState(data)

  const val =  <div>
                <h1>Jmytra4u – Your Friendly Guide to Java and other related skills</h1>
               <div><p>Learning Java doesn’t have to be hard.
                   At Jmytra4u, we believe in being your mitra (friend) on the journey to mastering Java programming.
                   Whether you’re a beginner or looking to sharpen your skills, you’ll find clear explanations,
                   practical examples, and supportive guidance here.</p></div>
                   <br/>

                   <ul>
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

      <div style={{paddingLeft:'10rem', paddingRight: '10rem'}}>
      <PageLayout title='Welcome to Jmytra4u !' data={val} image={image}/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Home