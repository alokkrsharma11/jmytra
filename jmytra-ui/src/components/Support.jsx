// Support.jsx
import React from "react";
import { FaEnvelope, FaDiscord, FaHeart } from "react-icons/fa";

const Support = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16 px-6 md:px-20 text-white">
      <div className="container max-w-5xl mx-auto text-center mb-6 p-4 border rounded-lg shadow-sm bg-white text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Need Help? We’re Here for You
        </h2>
        <p className="text-lg opacity-90 mb-12">
          Our community and support team are always ready to guide you.  
          Whether you’re stuck on a problem, need resources, or want to give back,
          we’ve got you covered.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Email Support */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 py-4 shadow-lg hover:scale-105 transition">
            
            <h3 className="text-xl font-semibold mb-2"> 
                <FaEnvelope className="text-4xl mx-auto mb-4 text-yellow-300" />&nbsp;
                Email Support
            </h3>
            <p className="opacity-80 mb-4">
              Reach out to us directly for personalized help and guidance.
            </p>
            <a
              href="mailto:jmytra4u@gmail.com"
              className="inline-block bg-yellow-400 text-indigo-900 font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-300 transition"
            >
              Contact Us
            </a>
          </div>

          {/* Community Support */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 py-4 shadow-lg hover:scale-105 transition">
            
            <h3 className="text-xl font-semibold mb-2">
                <FaDiscord className="text-4xl mx-auto mb-4 text-green-300" />&nbsp;Join Community
            </h3>
            <p className="opacity-80 mb-4">
              Connect with fellow learners on our Discord and grow together.
            </p>
            <a
              href="https://github.com/alokkrsharma11/jmytra/wiki"
              className="inline-block bg-green-400 text-indigo-900 font-semibold px-4 py-2 rounded-lg shadow hover:bg-green-300 transition"
            >
              Join Now
            </a>
          </div>

          {/* Contribute */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 py-4 shadow-lg hover:scale-105 transition">
            
            <h3 className="text-xl font-semibold mb-2">
                <FaHeart className="text-4xl mx-auto mb-4 text-pink-300" />&nbsp;Contribute
            </h3>
            <p className="opacity-80 mb-4">
              Help us improve by contributing tutorials, fixes, or feedback.
            </p>
            <a
              href="https://github.com/alokkrsharma11/jmytra"
              className="inline-block bg-pink-400 text-indigo-900 font-semibold px-4 py-2 rounded-lg shadow hover:bg-pink-300 transition"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
      <br/>
    </section>
  );
};

export default Support;