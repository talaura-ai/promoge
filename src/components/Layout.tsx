import React from "react";
import { Box } from "@mui/material";
import SideMenu from "./Sidemenu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ width: "18%", bgcolor: "black", color: "white" }}>
        <SideMenu />
      </Box>
      <Box sx={{ flexGrow: 1, bgcolor: "#fff", padding: 2 }}>{children}</Box>
    </Box>
  );
};

export default Layout;
