import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

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
    </BottomNavigation>
  );
};

export default Footer;