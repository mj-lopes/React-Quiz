import { Typography } from "@mui/material";

export const Tittle = ({ children, ...props }) => (
  <Typography
    {...props}
    sx={{
      "::before": {
        content: "''",
        display: "block",
        width: "150px",
        height: "3px",
        position: "relative",
        top: "55px",
        borderRadius: "4px",
        background: "#ffc107",
      },
    }}
  >
    {children}
  </Typography>
);
