import { FormControlLabel } from "@mui/material";

export const FormCtrlLabel = ({ value, elControle, ...props }) => (
  <FormControlLabel
    value={value}
    label={value}
    control={elControle}
    labelPlacement={"start"}
    {...props}
    sx={{
      width: "100%",
      border: "2px solid #219ebc",
      borderRadius: "8px",
      margin: "8px 0",
      paddingLeft: "8px",
      justifyContent: "space-between",
      ":hover": {
        boxShadow: "0 0 8px #219ebc",
        transition: ".3s",
      },
    }}
  />
);
