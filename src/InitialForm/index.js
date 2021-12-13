import { useFormik } from "formik";
import { useContext } from "react";
import * as yup from "yup";

import { Btn, Input, String } from "../components";
import { GlobalContext } from "../GlobalContext";
import { Tittle } from "./styles";

const Index = () => {
  const { setNumeroPerguntas } = useContext(GlobalContext);

  const validationSchema = yup.object({
    num: yup
      .number("Escolha um número")
      .required("Escolha um número inteiro")
      .min(1, "Escolha um valor entre 1 e 99")
      .max(99, "Escolha um valor entre 1 e 99")
      .positive("Escolha um número positivo")
      .integer("Escolha um número inteiro"),
  });

  const formik = useFormik({
    initialValues: {
      num: "",
    },
    validationSchema: validationSchema,
    onSubmit: ({ num }) => {
      setNumeroPerguntas(num);
    },
  });

  return (
    <>
      <Tittle variant="h4" component="h2">
        Novo Quiz
      </Tittle>
      <form onSubmit={formik.handleSubmit}>
        <String variant="body1" sx={{ marginTop: ".5rem" }}>
          Quantas perguntas deseja responder?
        </String>
        <Input
          fullWidth
          id={"num"}
          nome={"num"}
          estilo={"outlined"}
          label={"Número de perguntas"}
          type={"number"}
          value={formik.values.num}
          onChange={formik.handleChange}
          error={formik.touched.num && Boolean(formik.errors.num)}
          helperText={formik.touched.num && formik.errors.num}
        />

        <Btn
          cor={"primary"}
          estilo={"contained"}
          type="submit"
          disabled={formik.isSubmitting}
        >
          Let's go!
        </Btn>
      </form>
    </>
  );
};

export default Index;
