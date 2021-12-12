import { FormControlLabel } from "@mui/material";

export const FormCtrlLabel = ({ textoOpcao, elControle }) => (
  <FormControlLabel
    value={textoOpcao}
    label={textoOpcao}
    control={elControle}
    labelPlacement={"start"}
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
