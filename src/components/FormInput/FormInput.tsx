import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./formInput.module.scss";

const FormInput = () => {
  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      cpf: "",
      nascimento: "",
      tel: "",
      instagram: "",
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .required()
        .test(
          "is-full-name",
          "Please enter both your first and last name",
          function (value: any) {
            const nameArr = value.split(" ");
            return nameArr.length >= 2;
          }
        ),
      email: Yup.string().email().required(),
      cpf: Yup.string().required(),
      nascimento: Yup.string().required(),
      tel: Yup.string().required(),
      instagram: Yup.string().required(),
    }),
    onSubmit: function (values) {
      alert(`You are registered! Name: ${values.nome}. Email: ${values.email}. Profession: ${values.cpf}. 
              Age: ${values.nascimento}`);
    },
  });

  return (
    <div className={styles["form"]}>
      <form onSubmit={formik.handleSubmit}>
        <h2>Preencha o formulário</h2>
        <ul className={styles["form-itens"]}>
          <li className={styles["form-item"]}>
            <label>Nome</label>
            <input
              id="nome"
              type="text"
              placeholder="Seu nome completo"
              value={formik.values.nome}
              onChange={formik.handleChange}
            />
          </li>
          <li className={styles["form-item"]}>
            <label>E-mail</label>
            <input
              id="email"
              type="text"
              placeholder="Seu email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </li>
          <li className={styles["form-item"]}>
            <label>CPF</label>
            <input
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={formik.values.cpf}
              onChange={formik.handleChange}
            />
          </li>

          <li className={styles["form-item"]}>
            <label>Data de Nascimento</label>
            <input
              id="nascimento"
              type="text"
              placeholder="00.00.00"
              value={formik.values.nascimento}
              onChange={formik.handleChange}
            />
          </li>
          <li className={styles["form-item"]}>
            <label>Telefone</label>
            <input
              id="tel"
              type="text"
              placeholder="(00)00000-0000"
              value={formik.values.tel}
              onChange={formik.handleChange}
            />
          </li>
          <li className={styles["form-item"]}>
            <label>Instagram</label>
            <input
              id="instagram"
              type="text"
              placeholder="@seuuser"
              value={formik.values.instagram}
              onChange={formik.handleChange}
            />
          </li>
        </ul>
        <button type="submit">Cadastre-se</button>
      </form>
    </div>
  );
};

export { FormInput };
