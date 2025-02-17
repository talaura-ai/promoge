import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { colors } from "../../assets/contants/colors";

type PropsOverview = {
  icon: React.ReactNode;
  heading: string;
  money: string;
  report: string;
  iconBgColor: string;
  id: number;
};

const OverviewCard = ({
  icon,
  heading,
  money,
  report,
  iconBgColor,
  id,
}: PropsOverview) => {
  return (
    <Box
      sx={{
        bgcolor: colors.secondary,
        padding: 2.5,
        borderRadius: 3,
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
        minWidth: "calc(100% / 4 - 1%)",
        flex: "1 1 calc(25% - 8)",
      }}
    >
      <Typography
        sx={{
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: iconBgColor,
          borderRadius: "50%",
          color: colors.white,
        }}
      >
        {icon}
      </Typography>
      <Typography fontSize={14} paddingY={1.4} color="gray">
        {heading}
      </Typography>
      <Typography
        variant="h4"
        component="div"
        sx={{ mb: 1 }}
        fontSize={24}
        fontWeight={"600"}
      >
        {money.split("/")[0]}&nbsp;
        <Typography component="span">/{money.split("/")[1]}</Typography>
      </Typography>
      <Typography fontSize={10} alignItems={"center"} display={"flex"}>
        {" "}
        {id === 2 ? (
          <SouthEastIcon sx={{ width: 12, height: 12, color: colors.red }} />
        ) : (
          <ArrowOutwardIcon
            sx={{ width: 12, height: 12, color: colors.green }}
          />
        )}
        {report}
      </Typography>
    </Box>
  );
};

export default OverviewCard;
