import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <BottomNavigation
      sx={{
        backgroundColor: "#222",
        height: "55px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <BottomNavigationAction
        icon={<FacebookIcon />}
        component="a"
        href="https://www.facebook.com/alokkrsharma11" // 🔗 replace with your actual profile link
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
          href="https://www.linkedin.com/in/alokkrsharma11/" // 🔗 replace with your actual profile link
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
        href="https://x.com//alokkrsharma11/" // 🔗 replace with your actual profile link
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
        href="https://www.instagram.com/alokkrsharma.in/" // 🔗 replace with your actual profile link
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
        icon={<GitHubIcon />}
        component="a"
        href="https://github.com/alokkrsharma11"  // 🔗 replace with your GitHub profile
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
    </BottomNavigation>
  );
};

export default Footer;