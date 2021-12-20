import React, { useRef, useContext } from "react";
import { FormControl, FormLabel, Grid, Radio } from "@mui/material";

import { Btn, FormCtrlLabel, RadioFormGroup, String } from "../components";
import { useFormik } from "formik";
import { GlobalContext } from "../GlobalContext";

export const Questao = ({
  dados,
  index,
  perguntaAtual,
  setPerguntaAtual,
  quantidadePerguntas,
}) => {
  const { setRespostas } = useContext(GlobalContext);

  // Randomizar as posições das opções e guardar sua referência.
  const respostas = useRef(
    [...dados.incorrect_answers, dados.correct_answer].sort(
      () => Math.random() - 0.5,
    ),
  );

  const formik = useFormik({
    initialValues: { resp: "" },
    onSubmit: ({ resp }) => {
      setRespostas((respostas) => [...respostas, resp]);
      setPerguntaAtual(perguntaAtual + 1);
    },
  });

  if (index !== perguntaAtual) return null;

  return (
    <div className="anime">
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ marginBottom: "1rem" }}
      >
        <Grid>
          <String variant="h5">{`${perguntaAtual} / ${quantidadePerguntas}`}</String>
        </Grid>
        <Grid>
          <String variant="body1">Categoria: {dados.category}</String>
          <String variant="body1">Dificuldade: {dados.difficulty}</String>
        </Grid>
      </Grid>
      <form onSubmit={formik.handleSubmit}>
        <FormControl component="fieldset" sx={{ width: "100%" }}>
          <FormLabel
            component="legend"
            sx={{ fontSize: "1.5rem", color: "#16687D", fontWeight: "700" }}
            focused={false}
          >
            {dados.question}
          </FormLabel>
          <RadioFormGroup
            questao={dados.question}
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
          {perguntaAtual + 1 === quantidadePerguntas
            ? "Finish quiz"
            : "Next question"}
        </Btn>
      </form>
    </div>
  );
};
