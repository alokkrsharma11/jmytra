import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Home", "Profile", "Settings"];

  return (
    <div className="flex space-x-4 border-b pb-2">
      {tabs.map((tab, i) => (
        <motion.button
          key={tab}
          onClick={() => setActiveTab(i)}
          className={`px-4 py-2 text-lg font-medium ${
            activeTab === i ? "text-blue-600" : "text-gray-500"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            borderBottom: activeTab === i ? "3px solid #2563eb" : "3px solid transparent",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {tab}
        </motion.button>
      ))}
    </div>
  );
};

export default AnimatedTabs;