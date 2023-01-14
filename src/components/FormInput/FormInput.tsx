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
  //email: string;
  //cpf: string;
  //nascimento: string;
  //tel: string;
  //instagram: string;
  termos: boolean;
}
const FormInput = () => {
  const initialValues = {
    nome: "",
    //email: "",
    //cpf: "",
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
        "is-full-name",
        "Please enter both your first and last name",
        function (value: any) {
          if (value === "" || value === undefined) {
            return false;
          } else {
            const nameArr = value.split(" ");
            return nameArr.length >= 2;
          }
        }
      ),
    termos: Yup.boolean().required("*").isTrue(),
  });
  const handleFormikSubmit = (values: IFormikValues) => {
    console.log(values);
  };
  return (
    <div>
      <h2>Preencha o formulário</h2>
      <Formik
        onSubmit={handleFormikSubmit}
        initialValues={initialValues}
        validationSchema={validacao}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="nome">Nome</label>
              <Field
                type="text"
                id="nome"
                name="nome"
                className={errors.nome && touched.nome && "invalid"}
              />
              <ErrorMessage component="span" name="nome" />
            </div>
            <div>
              <label htmlFor="check">termos</label>
              <Field type="checkbox" id="check" name="termos" className="" />
            </div>
            <button type="submit">Cadastre-se</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { FormInput };
