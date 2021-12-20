import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import useFetch from "../useFetchApi";
import { Btn, BtnsList, String } from "../components";
import { Container } from "./style";

export const StartQuiz = () => {
  const { numeroPerguntas, setNumeroPerguntas } = useContext(GlobalContext);
  const { request } = useFetch();

  return (
    <Container className="anime">
      <String variant="h3" marginBottom={3}>
        Are You Ready?
      </String>
      <BtnsList direction="row" spacing={2} justifyItems={"center"}>
        <Btn
          estilo={"contained"}
          cor={"secondary"}
          onClick={() => request(numeroPerguntas)}
        >
          Start!
        </Btn>
        <Btn estilo={"outlined"} onClick={() => setNumeroPerguntas(null)}>
          Cancel
        </Btn>
      </BtnsList>
    </Container>
  );
};
