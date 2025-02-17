import { Badge, Box, Tab, Tabs } from "@mui/material";
import { tabs } from "../assets/contants/contants";
import { TabsProps } from "../types/types";
import { colors } from "../assets/contants/colors";

type TabHeaderProps = {
  activeTab: number;
  setActiveTab: (num: number) => void;
};

const TabHeader = ({ activeTab, setActiveTab }: TabHeaderProps) => {
  return (
    <Tabs
      value={activeTab}
      onChange={(_, newValue) => setActiveTab(newValue)}
      variant="standard"
      sx={{
        "& .MuiTabs-indicator": {
          backgroundColor: "#3b82f6",
          height: "3px",
          borderRadius: "4px",
        },
      }}
    >
      {tabs.map((tab: TabsProps, index: number) => {
        return (
          <Tab
            key={tab.label}
            label={
              <Box display="flex" alignItems="center" gap={2.2}>
                {tab.label}
                {tab.count !== null && (
                  <Badge
                    badgeContent={String(tab.count).padStart(2, "0")}
                    color="primary"
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "#e0e7ff",
                        color: "#3b82f6",
                        fontSize: "10px",
                        fontWeight: "bold",
                        borderRadius: "8px",
                        padding: "0 6px",
                      },
                    }}
                  />
                )}
              </Box>
            }
            sx={{
              textTransform: "none",
              fontSize: "14px",
              fontWeight: activeTab === index ? "bold" : "normal",
              color: activeTab === index ? colors.black : "#666",
              "&.Mui-selected": { color: "black" },
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default TabHeader;
