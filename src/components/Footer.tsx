import { Box, Grid, CardContent, Typography } from "@mui/material";
import {
  projectData,
  projectHeader,
  taskData,
  workloadData,
} from "../assets/contants/data";
import { useState } from "react";
import { colors } from "../assets/contants/colors";

// components
import Header from "./ui/Header";
import RadialChart from "./RadialChart";
import ProjectTable from "./ProjectTable";
import StackChart from "./StackChart";
import TabHeader from "./TabHeader";
import Tasks from "./Tasks";
import DropdownButton from "./ui/DropdownButton";
import Container from "./ui/Container";
import Options from "./ui/Options";

const Footer = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showDropdownOptions, setShowDropdownOptions] = useState("");

  const [projectName, setProjectName] = useState("Project");
  const [projectManager, setProjectManager] = useState("Project Manager");
  const [projectStatus, setProjectStatus] = useState("Status");
  const [chartState, setChartState] = useState("All");
  const [duration, setDuration] = useState("Last 15 days");

  const filterProjects = projectData.slice(1).filter((project) => {
    if (
      projectName.toLowerCase() === "project" &&
      projectManager.toLowerCase() === "project manager" &&
      projectStatus.toLowerCase() === "status"
    )
      return project;
    if (projectName.toLowerCase() !== "project") {
      return project.name === projectName;
    }
    if (projectManager.toLowerCase() !== "project manager") {
      return project.manager === projectManager;
    }
    if (projectStatus.toLowerCase() !== "status") {
      return project.status === projectStatus;
    }
  });

  return (
    <Container sx={{ marginTop: 2, paddingBottom: 2 }}>
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
                <DropdownButton
                  text={projectName}
                  onClick={() =>
                    setShowDropdownOptions((prev) =>
                      prev !== "project" ? "project" : ""
                    )
                  }
                >
                  {showDropdownOptions === "project" && (
                    <Options
                      list={projectData.map((project) => project.name)}
                      onSelect={(project) => {
                        setProjectName(
                          project.toLowerCase() === "all" ? "Project" : project
                        );
                        setProjectManager("Project Manager");
                        setProjectStatus("Status");
                      }}
                    />
                  )}
                </DropdownButton>
                <DropdownButton
                  text={projectManager}
                  onClick={() =>
                    setShowDropdownOptions((prev) =>
                      prev !== "manager" ? "manager" : ""
                    )
                  }
                >
                  {showDropdownOptions === "manager" && (
                    <Options
                      list={projectData.map((project) => project.manager)}
                      onSelect={(manager) => {
                        setProjectManager(
                          manager.toLowerCase() === "all"
                            ? "Project Manager"
                            : manager
                        );
                        setProjectName("Project");
                        setProjectStatus("Status");
                      }}
                    />
                  )}
                </DropdownButton>
                <DropdownButton
                  text={projectStatus}
                  onClick={() =>
                    setShowDropdownOptions((prev) =>
                      prev !== "status" ? "status" : ""
                    )
                  }
                >
                  {showDropdownOptions === "status" && (
                    <Options
                      list={[
                        ...new Set(
                          projectData.map((project) => project.status)
                        ),
                      ]}
                      onSelect={(status) => {
                        setProjectStatus(
                          status.toLowerCase() === "all" ? "Status" : status
                        );
                        setProjectManager("Project Manager");
                        setProjectName("Project");
                      }}
                    />
                  )}
                </DropdownButton>
              </Header>
              <ProjectTable
                projectHeader={projectHeader}
                projectData={filterProjects}
              />
            </CardContent>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ borderRadius: 4, bgcolor: colors.secondary }}>
            <CardContent>
              <Header heading=" Overall Progress">
                <DropdownButton
                  text={chartState}
                  onClick={() =>
                    setShowDropdownOptions((prev) =>
                      prev !== "all" ? "all" : ""
                    )
                  }
                >
                  {showDropdownOptions === "all" && (
                    <Options
                      list={["All", "Partial", "Full"]}
                      onSelect={(state) => setChartState(state)}
                    />
                  )}
                </DropdownButton>
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
                <DropdownButton
                  text={duration}
                  onClick={() =>
                    setShowDropdownOptions((prev) =>
                      prev !== "workload" ? "workload" : ""
                    )
                  }
                >
                  {showDropdownOptions === "workload" && (
                    <Options
                      list={["Last 15 days", "Last 30 days", "Last 1 month"]}
                      onSelect={(state) => setDuration(state)}
                    />
                  )}
                </DropdownButton>
              </Header>
              <StackChart workloadData={workloadData} />
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
