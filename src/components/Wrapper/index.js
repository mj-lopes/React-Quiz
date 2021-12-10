import React from "react";
import { Box } from "@mui/system";

export const Wrapper = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "6px",
        overflow: "hidden",
        padding: "1rem",
      }}
    >
      {children}
    </Box>
  );
};
