import React, { useRef, useState } from "react";
import { FormControl, FormLabel, Radio } from "@mui/material";

import { Btn, FormCtrlLabel, RadioFormGroup } from "../components";
import parseString from "../helper/parseStringToHTML";

export const Questao = ({ dados, index, perguntaAtual, setPerguntaAtual }) => {
  const [value, setValue] = useState("");

  // Randomizar as posições das opções e guardar sua referência.
  const respostas = useRef(
    [...dados.incorrect_answers, dados.correct_answer].sort(
      () => Math.random() - 0.5,
    ),
  );

  if (index !== perguntaAtual) return null;

  // Tratamento para as HTML Entities
  const pergunta = parseString(dados.question);
  respostas.current.forEach(
    (resposta, index, array) => (array[index] = parseString(resposta)),
  );

  return (
    <FormControl component="fieldset" sx={{ width: "100%" }}>
      <FormLabel component="legend" sx={{ fontSize: "1.5rem" }} focused={false}>
        {pergunta}
      </FormLabel>
      <RadioFormGroup
        questao={pergunta}
        value={value}
        handleChange={({ target }) => setValue(target.value)}
      >
        {respostas.current.map((resposta) => (
          <FormCtrlLabel
            key={`opcao - ${resposta}`}
            textoOpcao={resposta}
            label={resposta}
            elControle={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#ffc107",
                    transition: ".3s",
                  },
                }}
              />
            }
          />
        ))}
      </RadioFormGroup>

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
