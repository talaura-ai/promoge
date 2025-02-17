import React from "react";
import { Box, Typography, SxProps, Theme } from "@mui/material";

const Header = ({
  heading,
  children,
  sx,
}: {
  heading: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 2,
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        {heading}
      </Typography>

      <Box display="flex" gap={2} sx={{ ...sx }}>
        {children}
      </Box>
    </Box>
  );
};

export default Header;
