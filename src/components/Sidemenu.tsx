import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import {
  Plus,
  Briefcase,
  CheckSquare,
  Clock,
  Users,
  Settings,
  Layers,
  NetworkIcon as Network2,
  Grid,
  ChevronLeft,
} from "lucide-react";
import { colors } from "../assets/contants/colors";

interface NavItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  variant?: "default" | "primary" | "highlight";
}

const navItems: NavItem[] = [
  { name: "Dashboard", icon: Grid, variant: "primary" },
  { name: "Projects", icon: Briefcase },
  { name: "Tasks", icon: CheckSquare },
  { name: "Time log", icon: Clock },
  { name: "Resource mgnt", icon: Network2 },
  { name: "Users", icon: Users },
  { name: "Project template", icon: Layers },
  { name: "Menu settings", icon: Settings },
];

const SideMenu = ({
  isCollapsed,
  setIsCollapsed,
}: {
  isCollapsed: boolean;
  setIsCollapsed: (bool: boolean) => void;
}) => {
  const [currentMenu, setCurrentMenu] = useState(0);

  return (
    <Box
      sx={{
        position: "fixed",
        padding: 2,
        height: "100vh",
        width: isCollapsed ? "80px" : "250px",
        bgcolor: colors.black,
        transition: "width 0.3s ease",
      }}
    >
      <IconButton
        sx={{
          bgcolor: colors.white,
          position: "absolute",
          left: isCollapsed ? 65 : 235,
          top: 10,
          width: 30,
          height: 30,
          transition: "left 0.3s ease",
          "&:hover": {
            bgcolor: "#ccc",
          },
        }}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <ChevronLeft
          style={{
            transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </IconButton>

      <ListItemButton
        sx={{
          display: "flex",
          justifyContent: isCollapsed ? "center" : "flex-start",
          bgcolor: colors.white,
          marginY: 6,
          borderRadius: 10,
          color: colors.black,
          width: "100%",
          padding: isCollapsed ? "10px 0" : "10px 16px",
          transition: "padding 0.3s ease",
          "&:hover": {
            bgcolor: colors.white,
            color: colors.black,
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: "unset",
            color: colors.white,
            justifyContent: "center",
            marginRight: isCollapsed ? 0 : 2,
          }}
        >
          <Plus
            style={{
              background: colors.orange,
              borderRadius: "50%",
              padding: "6px",
              width: isCollapsed ? "32px" : "24px",
              height: isCollapsed ? "32px" : "24px",
              transition: "width 0.3s ease, height 0.3s ease",
            }}
          />
        </ListItemIcon>
        {!isCollapsed && <ListItemText primary={"Create new project"} />}
      </ListItemButton>

      <List>
        {navItems.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              bgcolor: currentMenu === index ? colors.white : "transparent",
              marginY: 1,
              borderRadius: 10,
              color: currentMenu === index ? colors.orange : colors.white,
              width: "100%",
              padding: isCollapsed ? "10px 0" : "10px 10px",
              transition: "padding 0.3s ease",
              display: "flex",
              justifyContent: isCollapsed ? "center" : "flex-start",
              "&:hover": {
                bgcolor: colors.white,
                color: colors.orange,
                "& .MuiListItemIcon-root": {
                  color: colors.orange,
                },
              },
            }}
            onClick={() => setCurrentMenu(index)}
          >
            <ListItemIcon
              sx={{
                minWidth: "unset",
                color: currentMenu === index ? colors.orange : colors.white,
                justifyContent: "center",
                marginRight: isCollapsed ? 0 : 2,
              }}
            >
              <item.icon />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary={item.name} />}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default SideMenu;
