import { TextField } from "@mui/material";

export const Input = ({ id, nome, estilo, label, type, ...props }) => (
  <TextField
    id={id}
    name={nome}
    variant={estilo}
    label={label}
    type={type}
    {...props}
    sx={{ margin: "1rem 0" }}
  />
);
