import React from "react";
import {
  useFormik,
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
} from "formik";
import * as Yup from "yup";

import styles from "./formInput.module.scss";

interface IFormikValues {
  nome: string;
  email: string;
  cpf: string;
  //nascimento: string;
  //tel: string;
  //instagram: string;
  termos: boolean;
}
const FormInput = () => {
  const initialValues = {
    nome: "",
    email: "",
    cpf: "",
    //nascimento: "",
    //tel: "",
    //instagram: "",
    termos: false,
  }; /*
  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      cpf: "",
      nascimento: "",
      tel: "",
      instagram: "",
      termos: false,
    },*/
  validationSchema: Yup.object({
    nome: Yup.string()
      .required("*Campo Obrigatório")
      .test(
        "is-full-name",
        "Please enter both your first and last name",
        function (value: any) {
          const nameArr = value.split(" ");
          return nameArr.length >= 2;
        }
      ),
    email: Yup.string().required("*Campo Obrigatório"),
    cpf: Yup.string().required("*Campo Obrigatório"),
    nascimento: Yup.string().required("*Campo Obrigatório"),
    tel: Yup.string().required("*Campo Obrigatório"),
    instagram: Yup.string().required("*Campo Obrigatório"),
    termos: Yup.boolean().required("*").isTrue(),
  }); /*
    onSubmit: function (values) {
      alert(`You are registered! Name: ${values.nome}. Email: ${values.email}. Profession: ${values.cpf}. 
              Age: ${values.nascimento},${values.tel},${values.instagram}`);
    },
  });*/
  const validacao = Yup.object().shape({
    nome: Yup.string()
      .required("*Campo Obrigatório")
      .test(
        "Nome Completo",
        "Preencha com um nome e sobrenome válido.",
        function (value: any) {
          if (value === "" || value === undefined) {
            return false;
          } else {
            const nameArr = value.split(" ");
            return nameArr.length >= 2;
          }
        }
      ),
    email: Yup.string().required("*Campo Obrigatório").email("E-mail inválido"),
    cpf: Yup.string()
      .required("*Campo Obrigatório")
      .test("cpf", "Preencha com um cpf válido.", function (value: any) {
        if (value === "" || value === undefined) {
          return false;
        } else {
          const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
          const regex = new RegExp(cpfRegex);
          return regex.test(value);
        }
      }),
    termos: Yup.boolean().oneOf([true], "*"),
  });
  const handleFormikSubmit = (values: IFormikValues) => {
    console.log(values);
  };

  return (
    <div className={styles["form-wrapper"]}>
      <h2>Preencha o formulário</h2>
      <Formik
        onSubmit={handleFormikSubmit}
        initialValues={initialValues}
        validationSchema={validacao}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles["form-col"]}>
              <div className={styles["form-text"]}>
                <label htmlFor="nome">Nome</label>
                <ErrorMessage
                  component="span"
                  name="nome"
                  className={styles["form-error"]}
                />
              </div>

              <Field
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu nome completo"
                className={errors.nome && touched.nome && "invalid"}
              />
            </div>
            <div className={styles["form-col"]}>
              <div className={styles["form-text"]}>
                <label htmlFor="email">E-mail</label>
                <ErrorMessage
                  component="span"
                  name="email"
                  className={styles["form-error"]}
                />
              </div>

              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Seu e-mail"
                className={errors.email && touched.email && "invalid"}
              />
            </div>
            <div className={styles["form-col"]}>
              <div className={styles["form-text"]}>
                <label htmlFor="cpf">CPF</label>
                <ErrorMessage
                  component="span"
                  name="cpf"
                  className={styles["form-error"]}
                />
              </div>

              <Field
                type="text"
                id="cpf"
                name="cpf"
                placeholder="000.000.000-00"
                className={errors.cpf && touched.cpf && "invalid"}
              />
            </div>
            <div className={styles["form-col"] && styles["form-check"]}>
              <div className={styles["form-text-check"]}>
                <ErrorMessage
                  component="span"
                  name="termos"
                  className={styles["form-error"]}
                />
                <label htmlFor="check">
                  <a href="/">Declaro que li e aceito</a>
                </label>
              </div>

              <Field
                type="checkbox"
                id="check"
                name="termos"
                className={
                  errors.termos &&
                  touched.termos &&
                  "invalid" &&
                  styles["form-checkbox"]
                }
              />
            </div>
            <button className={styles["form-btn"]} type="submit">
              Cadastre-se
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { FormInput };
