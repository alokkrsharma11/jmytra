// SidebarData.js
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { FaReact, FaDatabase, FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";

export const SidebarData = [
  { title: "Home", path: "/", icon: <AiIcons.AiFillHome />, cName: "nav-text" },
  { title: "Java", path: "/JavaTutorial", icon: <FaJava />, cName: "nav-text" },
  { title: "Spring Framework", path: "/SpringTutorial", icon: <SiSpring />, cName: "nav-text" },
  { title: "ReactJS", path: "/ReactTutorial", icon: <FaReact />, cName: "nav-text" },
  { title: "Databases", path: "/DatabaseTutorial", icon: <FaDatabase />, cName: "nav-text" },
  { title: "Support", path: "/Support", icon: <IoIcons.IoMdHelpCircle />, cName: "nav-text" },
  { title: "About", path: "/About", icon: <AiIcons.AiOutlineInfoCircle />, cName: "nav-text" },
];