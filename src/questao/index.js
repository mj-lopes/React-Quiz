import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export const Questao = ({ dados }) => {
  const [value, setValue] = useState("");
  const [respostas, setRespostas] = useState([]);

  useEffect(() => {
    setRespostas(
      [...dados.incorrect_answers, dados.correct_answer].sort(
        () => Math.random() - 0.5,
      ),
    );
  }, [dados.incorrect_answers, dados.correct_answer]);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{dados.question}</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      >
        {respostas.map((resposta) => (
          <FormControlLabel
            key={`opcao - ${resposta}`}
            value={resposta}
            control={<Radio />}
            label={resposta}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
