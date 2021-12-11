import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { api } from "../api";
import { Btn, Pilha, String } from "../components";
import { Container } from "./style";

export const StartQuiz = () => {
  const { numeroPerguntas, setNumeroPerguntas } = useContext(GlobalContext);

  return (
    <Container>
      <String variant="h3" marginBottom={3}>
        Está pronto?
      </String>
      <Pilha direction="row" spacing={2} justifyItems={"center"}>
        <Btn
          estilo={"contained"}
          cor={"secondary"}
          onClick={() => api(numeroPerguntas)}
        >
          Let's GO!
        </Btn>
        <Btn estilo={"outlined"} onClick={() => setNumeroPerguntas(0)}>
          Voltar
        </Btn>
      </Pilha>
    </Container>
  );
};
