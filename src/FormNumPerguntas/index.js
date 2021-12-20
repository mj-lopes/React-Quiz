import { useFormik } from "formik";
import { useContext } from "react";
import * as yup from "yup";

import { Btn, Input, String } from "../components";
import { GlobalContext } from "../GlobalContext";
import { Tittle } from "./styles";

export const FormNumPerguntas = () => {
  const { setNumeroPerguntas } = useContext(GlobalContext);

  const validationSchema = yup.object({
    num: yup
      .number("Choose a positive number")
      .required("Choose a positive number")
      .min(1, "Choose a number ranging from 1 to 99")
      .max(99, "Choose a number ranging from 1 to 99")
      .positive("Choose a positive number")
      .integer("Choose a integer"),
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
      <Tittle variant="h3" component="h2">
        Start a New Quiz
      </Tittle>
      <form onSubmit={formik.handleSubmit}>
        <String variant="body1" sx={{ marginTop: ".5rem" }}>
          How many questions do you want to answer?
        </String>
        <Input
          fullWidth
          id={"num"}
          nome={"num"}
          estilo={"outlined"}
          label={"Number of questions"}
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
          size="large"
        >
          Let's go!
        </Btn>
      </form>
    </>
  );
};
