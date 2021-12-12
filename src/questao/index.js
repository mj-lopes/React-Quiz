import React, { useRef } from "react";
import { FormControl, FormLabel, Radio } from "@mui/material";

import { Btn, FormCtrlLabel, RadioFormGroup } from "../components";
import parseString from "../helper/parseStringToHTML";
import { useFormik } from "formik";

export const Questao = ({ dados, index, perguntaAtual, setPerguntaAtual }) => {
  // Randomizar as posições das opções e guardar sua referência.
  const respostas = useRef(
    [...dados.incorrect_answers, dados.correct_answer].sort(
      () => Math.random() - 0.5,
    ),
  );

  const formik = useFormik({
    initialValues: { resp: "" },
    onSubmit: ({ resp }) => {
      alert(resp);
      setPerguntaAtual(perguntaAtual + 1);
    },
  });

  if (index !== perguntaAtual) return null;

  // Tratamento para as HTML Entities
  const pergunta = parseString(dados.question);
  respostas.current.forEach(
    (resposta, index, array) => (array[index] = parseString(resposta)),
  );

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl component="fieldset" sx={{ width: "100%" }}>
        <FormLabel
          component="legend"
          sx={{ fontSize: "1.5rem" }}
          focused={false}
        >
          {pergunta}
        </FormLabel>
        <RadioFormGroup
          questao={pergunta}
          value={formik.values.resp}
          onChange={({ target }) => formik.setValues({ resp: target.value })}
        >
          {respostas.current.map((resposta) => (
            <FormCtrlLabel
              key={`opcao - ${resposta}`}
              value={resposta}
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
      </FormControl>

      <Btn
        estilo={"contained"}
        cor={"secondary"}
        type="submit"
        disabled={!formik.values.resp}
        onClick={formik.handleSubmit}
      >
        Próxima pergunta
      </Btn>
    </form>
  );
};
