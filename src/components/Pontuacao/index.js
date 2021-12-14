import { Grid } from "@mui/material";
import { String } from "..";
import { getLocalScore } from "../../helper/getLocalScore";

export const Pontuacao = () => (
  <Grid item sm={6}>
    <String variant="h5" component={"p"}>
      Pontuação
    </String>
    <String variant="h4" component={"span"} color="secondary">
      {getLocalScore()}
    </String>
  </Grid>
);
