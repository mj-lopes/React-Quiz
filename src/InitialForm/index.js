import { useFormik } from "formik";
import * as yup from "yup";
import { Btn, Input } from "../components";

const Index = () => {
  const validationSchema = yup.object({
    num: yup
      .number("Escolha um número")
      .required("Escolha um números inteiro")
      .min(1, "Escolha um número positivo")
      .max(99, "Escolha um valor entre 1 e 99")
      .positive("Escolha um número positivo")
      .integer("Escolha um números inteiro"),
  });

  const formik = useFormik({
    initialValues: {
      num: "",
    },
    validationSchema: validationSchema,
    onSubmit: ({ num }) => {
      alert(num);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
  );
};

export default Index;
