import { Box, Typography } from "@mui/material";
import OverviewCard from "./ui/OverviewCard";
import { overViewCardDetaisl } from "../assets/contants/contants";
import Dropdown from "./ui/Dropdown";

const Overview = () => {
  return (
    <Box paddingX={3}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: 2,
        }}
      >
        <Typography fontSize={20} fontWeight={"500"}>
          Overview
        </Typography>

        <Dropdown text="Last 30 days" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        {overViewCardDetaisl.map((card) => {
          return (
            <OverviewCard
              key={card.id}
              heading={card.heading}
              icon={<card.icon />}
              money={card.money}
              report={card.report}
              iconBgColor={card.color}
              id={card.id}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Overview;
