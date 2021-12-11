import React, { useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Btn } from "../components";

export const Questao = ({ dados, index, perguntaAtual, setPerguntaAtual }) => {
  const [value, setValue] = useState("");
  const respostas = useRef(
    [...dados.incorrect_answers, dados.correct_answer].sort(
      () => Math.random() - 0.5,
    ),
  );

  if (index !== perguntaAtual) return null;

  return (
    <FormControl component="fieldset" sx={{ width: "100%" }}>
      <FormLabel component="legend">{dados.question}</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      >
        {respostas.current.map((resposta) => (
          <FormControlLabel
            color="primary"
            key={`opcao - ${resposta}`}
            value={resposta}
            control={<Radio />}
            label={resposta}
            labelPlacement={"start"}
            sx={{
              width: "100%",
              border: "2px solid tomato",
              background: "theme.primary.main",
              borderRadius: "8px",
              margin: "8px 0",
            }}
          />
        ))}
      </RadioGroup>
      <Btn
        estilo={"contained"}
        cor={"secondary"}
        onClick={() => setPerguntaAtual(perguntaAtual + 1)}
      >
        Próxima pergunta
      </Btn>
    </FormControl>
  );
};
