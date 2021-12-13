import { Typography } from "@mui/material";

export const Tittle = ({ children, ...props }) => (
  <Typography
    {...props}
    sx={{
      "::before": {
        content: "''",
        display: "block",
        width: "100px",
        height: "3px",
        position: "relative",
        top: "43px",
        borderRadius: "4px",
        background: "linear-gradient(90deg, #219ebc, #35c480, #ffc107)",
      },
    }}
  >
    {children}
  </Typography>
);
