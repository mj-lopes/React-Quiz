import React from "react";
import { Divider, Grid } from "@mui/material";
import { Btn, String } from "../components";
import { getLocalScore } from "../helper/getLocalScore";

export const ReviewRelatorio = ({ onClick }) => {
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-end"
        spacing={2}
      >
        <Grid item sm={6}>
          <String variant="h5" component={"h3"}>
            Último Quiz
          </String>
          <Btn
            cor={"secondary"}
            estilo={"outlined"}
            onClick={onClick}
            size={"large"}
          >
            Visualizar
          </Btn>
        </Grid>
        <Grid item sm={6}>
          <String variant="h5" component={"p"}>
            Pontuação
          </String>
          <String variant="h4" component={"span"} color="secondary">
            {getLocalScore()}
          </String>
        </Grid>
      </Grid>
      <Divider sx={{ margin: "1rem 0" }} />
    </>
  );
};
