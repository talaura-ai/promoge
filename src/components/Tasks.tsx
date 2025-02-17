import { Box, Chip, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { TasksDataProps } from "../types/types";

type TaskProps = {
  index: number;
  task: TasksDataProps;
};

const Tasks = ({ index, task }: TaskProps) => {
  return (
    <Box display={"flex"} my={1}>
      {index !== 3 ? (
        <CheckCircleIcon color="warning" />
      ) : (
        <RadioButtonUncheckedIcon />
      )}
      <Typography flexGrow={1} marginLeft={1}>
        {task.task}
      </Typography>
      <Chip
        label={task.status}
        sx={{
          bgcolor: `rgba(${task.color}, 0.3)`,
          color: `rgba(${task.color}, 1)`,
          marginRight: 10,
        }}
      />
    </Box>
  );
};

export default Tasks;
