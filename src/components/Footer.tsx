import { Box, Grid, CardContent, Typography } from "@mui/material";
import {
  projectData,
  projectHeader,
  taskData,
  workloadData,
} from "../assets/contants/contants";
import { useState } from "react";
import { colors } from "../assets/contants/colors";

// components
import Dropdown from "./ui/Dropdown";
import Header from "./ui/Header";
import RadialChart from "./RadialChart";
import ProjectTable from "./ProjectTable";
import StackChart from "./StackChart";
import TabHeader from "./TabHeader";
import Tasks from "./Tasks";

const Footer = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box sx={{ borderRadius: 4, bgcolor: colors.secondary }}>
            <CardContent>
              <Header
                heading="Project Summary"
                sx={{
                  display: "flex",
                  "@media (max-width: 700px)": { display: "none" },
                }}
              >
                <Dropdown text="Project" />
                <Dropdown text="Project Manager" />
                <Dropdown text="Status" />
              </Header>
              <ProjectTable
                projectHeader={projectHeader}
                projectData={projectData}
              />
            </CardContent>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ borderRadius: 4, bgcolor: colors.secondary }}>
            <CardContent>
              <Header heading=" Overall Progress">
                <Dropdown text="All" />
              </Header>
              <Box display="flex" justifyContent="center" mt={2}></Box>
              <RadialChart />
            </CardContent>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box sx={{ borderRadius: 4, bgcolor: colors.secondary }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Today Task
              </Typography>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
              </Box>
              {taskData.map((task, index) => {
                return <Tasks index={index} task={task} key={index} />;
              })}
            </CardContent>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ borderRadius: 4, bgcolor: colors.secondary }}>
            <CardContent>
              <Header heading="Projects Workload">
                <Dropdown text="Last 3 months" />
              </Header>
              <StackChart workloadData={workloadData} />
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
