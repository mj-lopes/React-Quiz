import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { Btn } from "../components";

const Index = () => {
  return (
    <Formik
      initialValues={{
        num: "",
      }}
      validate={({ num }) => {
        const errors = {};
        if (!num || String(num).match(/[.-]/g)) {
          errors.num = "Escolha um números inteiro";
        }
        if (num < 0) {
          errors.num = "Escolha um número positivo";
        }
        if (num > 99) {
          errors.num = "Escolha um valor entre 0 e 99";
        }
        return errors;
      }}
      onSubmit={({ num }) => alert(num)}
    >
      {(submitForm, isSubmitting) => (
        <Form style={{ marginTop: "1rem" }} onSubmit={submitForm}>
          <Field
            component={TextField}
            name="num"
            variant="outlined"
            label="Número de perguntas"
            type="number"
            pattern="[0-9]{2}"
          />
          <br />
          <Btn
            cor={"primary"}
            estilo={"contained"}
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Let's go!
          </Btn>
        </Form>
      )}
    </Formik>
  );
};

export default Index;
