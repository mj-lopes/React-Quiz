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
        Você está pronto?
      </String>
      <BtnsList direction="row" spacing={2} justifyItems={"center"}>
        <Btn
          estilo={"contained"}
          cor={"secondary"}
          onClick={() => request(numeroPerguntas)}
        >
          Let's GO!
        </Btn>
        <Btn estilo={"outlined"} onClick={() => setNumeroPerguntas(null)}>
          Voltar
        </Btn>
      </BtnsList>
    </Container>
  );
};
