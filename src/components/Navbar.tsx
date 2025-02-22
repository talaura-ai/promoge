import React, { useState } from "react";
import {
  AppBar,
  Typography,
  InputBase,
  IconButton,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  ArrowDropDown,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { colors } from "../assets/contants/colors";
import Dropdown from "./ui/Dropdown";
import UserProfile from "./ui/UserProfile";
import { userProfile } from "../assets/contants/data";
import { userProfileProps } from "../types/types";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [profile, setProfile] = useState({
    userName: "Alex Meian",
    designation: "Product Manager",
  });
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl((prev: HTMLElement | null) =>
      prev === null ? event.currentTarget : null
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeProfile = (newUserName: string, newDesignation: string) => {
    setProfile({ userName: newUserName, designation: newDesignation });
    handleClose();
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        paddingX: { xs: 1, sm: 3 },
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
          Promage
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
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              background: colors.white,
              borderRadius: "50px",
              padding: "4px 10px",
              boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
            }}
            onClick={handleClick}
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
                {profile.userName}
              </Typography>
              <Typography
                variant="caption"
                color={colors.black}
                sx={{ fontSize: 10 }}
              >
                {profile.designation}
              </Typography>
            </Box>

            <ArrowDropDown sx={{ fontSize: 24, color: colors.black }} />
            <Dropdown anchorEl={anchorEl} onClose={handleClose} open={open}>
              {userProfile &&
                userProfile?.map((user: userProfileProps) => {
                  return (
                    <UserProfile
                      key={user?.id}
                      userName={user?.userName}
                      designation={user?.designation}
                      changeProfile={changeProfile}
                    />
                  );
                })}
            </Dropdown>
          </Button>
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
