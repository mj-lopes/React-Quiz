import React, { useContext, useRef } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Opcao from "./style";
import { GlobalContext } from "../GlobalContext";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

export const Resultado = ({ index }) => {
  const { respostas, data } = useContext(GlobalContext);
  const dados = data[index];

  const opcoes = useRef(
    [...dados.incorrect_answers, dados.correct_answer].sort(
      () => Math.random() - 0.5,
    ),
  );

  const acertou = respostas[index] === dados.correct_answer;
  const acertouErrouOpcao = (opcao) => {
    if (acertou & (respostas[index] === opcao)) return "#388e3c";
    if (!acertou & (respostas[index] === opcao)) return "#d32f2f";
    if (!acertou & (dados.correct_answer === opcao)) return "#388e3c";
    return "#219EBC30";
  };

  return (
    <Accordion>
      <AccordionSummary
        aria-controls="pergunta-content"
        id="pergunta-header"
        expandIcon={
          <ArrowForwardIosSharpIcon
            sx={{ color: `${acertou ? "green" : "red"}` }}
          />
        }
      >
        <h3>{dados.question}</h3>
      </AccordionSummary>
      <AccordionDetails>
        <ul>
          {opcoes.current.map((opcao) => (
            <li key={`opcao: ${opcao}`}>
              <Opcao cor={acertouErrouOpcao(opcao)}>{opcao}</Opcao>
            </li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};
