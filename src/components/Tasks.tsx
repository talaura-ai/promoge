import { Box, Checkbox, Chip, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { TasksDataProps } from "../types/types";
import { useState } from "react";

type TaskProps = {
  index: number;
  task: TasksDataProps;
};

const taskStatus = ["Approved", "In Review", "Ongoing"];

const getRandomStatus = () => {
  return Math.floor(Math.random() * taskStatus.length);
};

const Tasks = ({ index, task }: TaskProps) => {
  const [currentStatus, setCurrentStatus] = useState(getRandomStatus());

  const handleChangeStatus = () => {
    setCurrentStatus((prev) => (prev + 1) % taskStatus.length);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginY: { xs: 2, sm: 0 },
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        gap: { xs: 1, sm: 0 },
        borderBottom: { xs: `1px solid #ccc`, sm: "none" },
        paddingY: { xs: 1, sm: 0 },
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Checkbox
          defaultChecked={index % 2 === 0}
          icon={
            <RadioButtonUncheckedIcon style={{ fontSize: 24, color: "gray" }} />
          }
          checkedIcon={
            <CheckCircleIcon style={{ fontSize: 24, color: "#FF9966" }} />
          }
        />

        <Typography flexGrow={1} marginLeft={1}>
          {task.task}
        </Typography>
      </Box>
      <Chip
        label={taskStatus[currentStatus]}
        onClick={handleChangeStatus}
        sx={{
          bgcolor:
            taskStatus[currentStatus] === "Approved"
              ? `rgba(67, 155, 106, 0.3)`
              : taskStatus[currentStatus].toLowerCase() === "in review"
              ? `rgba(294, 94, 42, 0.3)`
              : `rgba(215, 95, 54, 0.3)`,

          color:
            taskStatus[currentStatus] === "Approved"
              ? `rgba(67, 155, 106, 1)`
              : taskStatus[currentStatus].toLowerCase() === "in review"
              ? `rgba(294, 94, 42, 1)`
              : `rgba(215, 95, 54, 1)`,

          marginRight: 10,

          cursor: "pointer",
          "&:hover": {
            bgcolor: "#ddd",
          },
        }}
      />
    </Box>
  );
};

export default Tasks;
