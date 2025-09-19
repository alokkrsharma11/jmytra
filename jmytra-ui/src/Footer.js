import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <BottomNavigationAction
        icon={<FacebookIcon />}
        component="a"
        href="https://www.facebook.com/jmytra4u" // 🔗 replace with your actual profile link
        target="_blank" // open in new tab
        rel="noopener noreferrer" // security best practice
        sx={{
          "& .MuiSvgIcon-root": {
            fill: "tan",
            transition: "all 0.3s ease",
            "&:hover": {
              fill: "tomato",
              fontSize: "1.8rem",
            },
          },
        }}
      />
      <BottomNavigationAction
          icon={<LinkedInIcon />}
          component="a"
          href="https://www.linkedin.com/groups/14957071/" // 🔗 replace with your actual profile link
          target="_blank" // open in new tab
          rel="noopener noreferrer" // security best practice
          sx={{
            "& .MuiSvgIcon-root": {
              fill: "tan",
              transition: "all 0.3s ease",
              "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem",
              },
            },
          }}
        />
      <BottomNavigationAction
        icon={<TwitterIcon />}
        component="a"
        href="https://x.com/jmytra4u/" // 🔗 replace with your actual profile link
        target="_blank" // open in new tab
        rel="noopener noreferrer" // security best practice
        sx={{
          "& .MuiSvgIcon-root": {
            fill: "tan",
            transition: "all 0.3s ease",
            "&:hover": {
              fill: "tomato",
              fontSize: "1.8rem",
            },
          },
        }}
      />
      <BottomNavigationAction
        icon={<InstagramIcon />}
        component="a"
        href="https://www.instagram.com/jmytra4u/" // 🔗 replace with your actual profile link
        target="_blank" // open in new tab
        rel="noopener noreferrer" // security best practice
        sx={{
          "& .MuiSvgIcon-root": {
            fill: "tan",
            transition: "all 0.3s ease",
            "&:hover": {
              fill: "tomato",
              fontSize: "1.8rem",
            },
          },
        }}
      />
      
      <BottomNavigationAction
        icon={<YouTubeIcon />}
        component="a"
        href="https://www.youtube.com/@jmytra" // 🔗 replace with your YouTube channel link
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
              fill: "tomato",
              fontSize: "1.8rem",
            },
          },
        }}
      />
      © {new Date().getFullYear()} Jmytra. All rights reserved.
    </BottomNavigation>
  );
};

export default Footer;