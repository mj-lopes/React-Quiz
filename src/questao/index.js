import React, { useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Btn } from "../components";
import parseString from "../helper/parseStringToHTML";

export const Questao = ({ dados, index, perguntaAtual, setPerguntaAtual }) => {
  const [value, setValue] = useState("");
  const respostas = useRef(
    [...dados.incorrect_answers, dados.correct_answer].sort(
      () => Math.random() - 0.5,
    ),
  );
  if (index !== perguntaAtual) return null;

  const pergunta = parseString(dados.question);
  respostas.current.forEach(
    (resposta, index, array) => (array[index] = parseString(resposta)),
  );

  return (
    <FormControl component="fieldset" sx={{ width: "100%" }}>
      <FormLabel component="legend" sx={{ fontSize: "1.5rem" }} focused={false}>
        {pergunta}
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        sx={{
          margin: "16px 0",
        }}
      >
        {respostas.current.map((resposta) => (
          <FormControlLabel
            key={`opcao - ${resposta}`}
            value={resposta}
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#ffc107",
                    transition: ".3s",
                  },
                }}
              />
            }
            label={resposta}
            labelPlacement={"start"}
            sx={{
              width: "100%",
              border: "2px solid #219ebc",
              borderRadius: "8px",
              margin: "8px 0",
              paddingLeft: "8px",
              justifyContent: "space-between",
              ":hover": {
                boxShadow: "0 0 8px #219ebc",
                transition: ".3s",
              },
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
