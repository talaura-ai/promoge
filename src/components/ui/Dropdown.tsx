import { Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Dropdown = ({ text }: { text: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#fff",
        borderRadius: 30,
        paddingX: 2,
        paddingY: 1,
      }}
    >
      <Typography>{text}</Typography>
      <ExpandMoreIcon />
    </Box>
  );
};

export default Dropdown;
