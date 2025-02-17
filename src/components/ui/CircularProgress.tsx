import { Box, Typography, CircularProgress } from "@mui/material";

const CircularPercantage = ({
  value,
  color,
}: {
  value: number;
  color: string;
}) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={100}
        sx={{
          color: "#E0DFDC",
          position: "relative",
          left: 0,
          top: 0,
        }}
        size={50}
        thickness={4}
      />

      <CircularProgress
        variant="determinate"
        value={value}
        sx={{
          color: color,
          position: "absolute",
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
        size={50}
        thickness={4}
      />

      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
        }}
      >
        <Typography fontSize="14px" fontWeight="bold">
          {value}%
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularPercantage;
