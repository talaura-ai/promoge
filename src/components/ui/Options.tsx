import { Box, Button } from "@mui/material";
import { colors } from "../../assets/contants/colors";

const Options = ({
  list,
  onSelect,
}: {
  list: string[];
  onSelect: (value: string) => void;
}) => {
  return (
    <Box
      sx={{
        bgcolor: colors.white,
        width: "auto",
        display: "inline-flex",
        borderRadius: 2,
        padding: 1,
        flexDirection: "column",
        position: "absolute",
        top: 50,
        left: 0,
        zIndex: 9,
      }}
    >
      {list &&
        list.map((value, index) => {
          return (
            <Button
              key={index}
              sx={{ color: colors.black, width: "100%" }}
              onClick={() => onSelect(value)}
            >
              {value}
            </Button>
          );
        })}
    </Box>
  );
};

export default Options;
