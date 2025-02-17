import React from "react";
import {
  AppBar,
  Typography,
  InputBase,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  ArrowDropDown,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { colors } from "../assets/contants/colors";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        paddingX: 3,
        paddingY: 1,
        bgcolor: "transparent",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="h4" fontWeight={"bold"} color={colors.black}>
          Dashboard
        </Typography>
        <Box
          sx={{
            display: "flex",
            "@media (max-width: 700px)": {
              display: "none",
            },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: colors.white,
              paddingX: 2,
              paddingY: 1,
              borderRadius: "40px",
              width: { xs: "200px", lg: "300px" },
              boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <SearchIcon sx={{ color: "gray", marginRight: 1 }} />
            <InputBase placeholder="Search for anything..." fullWidth />
          </Box>
          <IconButton sx={{ background: "#fff", padding: 1.4 }}>
            <NotificationsIcon sx={{ color: "black" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              background: colors.white,
              borderRadius: "50px",
              padding: "4px 10px",
              boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Avatar src="/path-to-image.jpg" sx={{ width: 30, height: 30 }} />

            <Box
              sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}
            >
              <Typography
                fontWeight="bold"
                color={colors.black}
                sx={{ fontSize: 14 }}
              >
                Alex Meian
              </Typography>
              <Typography
                variant="caption"
                color={colors.black}
                sx={{ fontSize: 10 }}
              >
                Product Manager
              </Typography>
            </Box>

            <ArrowDropDown sx={{ fontSize: 24, color: colors.black }} />
          </Box>
        </Box>

        <MenuIcon
          sx={{
            color: colors.black,
            display: "none",
            "@media (max-width: 700px)": {
              display: "block",
            },
          }}
        />
      </Box>
    </AppBar>
  );
};

export default Navbar;
