import { Divider } from "@mui/material";
import React from "react";
import { Btn, String } from "../components";

export const ReviewRelatorio = ({ onClick }) => {
  return (
    <div>
      <String variant="h4" component={"h3"}>
        Revisite o último relatorio.
      </String>
      <Btn cor={"secondary"} onClick={onClick}>
        Visualizar
      </Btn>
      <Divider sx={{ margin: "1rem 0" }} />
    </div>
  );
};
