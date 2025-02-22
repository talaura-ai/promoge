import { Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colors } from "../../assets/contants/colors";

const DropdownButton = ({
  text,
  children,
  onClick,
}: {
  text: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: colors.white,
        borderRadius: 30,
        paddingX: 2,
        paddingY: 1,
        cursor: "pointer",
        position: "relative",
      }}
    >
      <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>{text}</Typography>
      <ExpandMoreIcon />
      <Box sx={{ display: "inline-block" }}>{children}</Box>
    </Box>
  );
};

export default DropdownButton;
