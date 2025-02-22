import { Theme } from "@emotion/react";
import { Box, SxProps } from "@mui/material";
import React from "react";

const Container = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) => {
  return <Box sx={{ paddingX: { xs: 2, sm: 3 }, ...sx }}>{children}</Box>;
};

export default Container;
