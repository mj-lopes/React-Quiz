import React from "react";
import { Btn, String } from "../components";

const ReviewRelatorio = ({ onClick }) => {
  return (
    <div>
      <String variant="h4" component={"h3"}>
        Revisite o último relatorio.
      </String>
      <Btn cor={"secondary"} onClick={onClick}>
        Visualizar
      </Btn>
    </div>
  );
};

export default ReviewRelatorio;
