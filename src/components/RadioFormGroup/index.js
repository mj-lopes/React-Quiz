import { RadioGroup } from "@mui/material";

export const RadioFormGroup = ({ questao, children, ...props }) => (
  <RadioGroup
    aria-label={`Questao - ${questao}`}
    name="controlled-radio-buttons-group"
    {...props}
    sx={{
      margin: "16px 0",
    }}
  >
    {children}
  </RadioGroup>
);
