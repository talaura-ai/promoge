import React, { useState } from "react";
import { Box } from "@mui/material";
import SideMenu from "../components/Sidemenu";
import { colors } from "../assets/contants/colors";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          width: isCollapsed ? "5%" : "250px",
          bgcolor: colors.black,
          color: "white",
          display: { xs: "none", sm: "none", lg: "block" },
        }}
      >
        <SideMenu isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "#fff",
          width: isCollapsed ? "95%" : "82%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
