import { Button } from "@mui/material";

export const Btn = ({ children, estilo, cor, ...props }) => (
  <Button variant={estilo} color={cor} {...props}>
    {children}
  </Button>
);
