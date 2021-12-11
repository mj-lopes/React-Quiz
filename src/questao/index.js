import React, { useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export const Questao = ({ dados }) => {
  const [value, setValue] = useState("");
  const respostas = useRef(
    [...dados.incorrect_answers, dados.correct_answer].sort(
      () => Math.random() - 0.5,
    ),
  );

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{dados.question}</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      >
        {respostas.current.map((resposta) => (
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
