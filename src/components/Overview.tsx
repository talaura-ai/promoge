import { Box, Typography } from "@mui/material";
import OverviewCard from "./ui/OverviewCard";
import { overViewCardDetaisl } from "../assets/contants/data";
import DropdownButton from "./ui/DropdownButton";
import Container from "./ui/Container";
import { useState } from "react";
import Options from "./ui/Options";

const Overview = () => {
  const [showOptions, setShowOptions] = useState("");
  const [duration, setDuration] = useState("Last 15 days");

  const handleSelect = (value: string) => {
    setDuration(value);
    setTimeout(() => setShowOptions(""), 0);
  };

  return (
    <Container>
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

        <DropdownButton
          text={duration}
          onClick={() =>
            setShowOptions((prev) => (prev !== "duration" ? "duration" : ""))
          }
        >
          {showOptions === "duration" && (
            <Options
              list={["Last 15 days", "Last 30 days", "Last 1 month"]}
              onSelect={(state) => handleSelect(state)}
            />
          )}
        </DropdownButton>
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
    </Container>
  );
};

export default Overview;
