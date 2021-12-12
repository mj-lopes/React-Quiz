import { RadioGroup } from "@mui/material";

export const RadioFormGroup = ({ questao, value, handleChange, children }) => (
  <RadioGroup
    aria-label={`Questao - ${questao}`}
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
    sx={{
      margin: "16px 0",
    }}
  >
    {children}
  </RadioGroup>
);
