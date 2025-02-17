import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { AgGauge } from "ag-charts-react";
import "ag-charts-enterprise";
import React from "react";
import { AgGaugeOptions } from "ag-charts-enterprise";

const RadialChart = () => {
  const [options] = useState<AgGaugeOptions>({
    type: "radial-gauge",

    value: 86,

    width: 1000,

    scale: {
      min: 0,
      max: 100,
    },
    bar: {
      fills: [{ color: "#4CAF50" }, { color: "#FFC107" }, { color: "#FF7043" }],
      fillMode: "discrete",
    },
    background: {
      fill: "transparent",
    },
  });

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection={"column"}
      mt={2}
      overflow={"hidden"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",

          width: "100%",
        }}
      >
        <AgGauge options={options} />
      </Box>

      <Box
        flexDirection={"row"}
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box textAlign="center">
          <Typography fontWeight="bold">95</Typography>
          <Typography fontSize={14} color="gray">
            Total projects
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography fontWeight="bold" color="green">
            26
          </Typography>
          <Typography fontSize={14} color="gray">
            Completed
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography fontWeight="bold" color="#FFC107">
            35
          </Typography>
          <Typography fontSize={14} color="gray">
            Delayed
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography fontWeight="bold" color="#FF7043">
            35
          </Typography>
          <Typography fontSize={14} color="gray">
            On going
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(RadialChart);
