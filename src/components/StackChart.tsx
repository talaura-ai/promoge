import { Box, Typography } from "@mui/material";
import { getCircleStyle } from "../utils/helpers";
import { WorkloadDataProps } from "../types/types";
import React from "react";

const StackChart = ({
  workloadData,
}: {
  workloadData: WorkloadDataProps[];
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="flex-end"
      mt={4}
    >
      {workloadData.map((person: WorkloadDataProps) => (
        <Box
          key={person.name}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {[...Array(Math.floor(Math.random() * 5) + 1)].map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: 14,

                ...getCircleStyle(index, person.value),
              }}
            >
              {index === 0 ? String(person.value) : ""}
            </Box>
          ))}
          <Typography variant="body2" mt={1}>
            {person.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default React.memo(StackChart);
