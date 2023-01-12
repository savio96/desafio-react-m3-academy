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
      nome: Yup.string().label("Seu nome completo").required(),
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
              type="text"
              placeholder="Seu nome completo"
              value={formik.values.nome}
            />
          </li>
          <li className={styles["form-item"]}>
            <label>E-mail</label>
            <input
              type="text"
              placeholder="Seu email"
              value={formik.values.email}
            />
          </li>
          <li className={styles["form-item"]}>
            <label>CPF</label>
            <input
              type="text"
              placeholder="000.000.000-00"
              value={formik.values.cpf}
            />
          </li>

          <li className={styles["form-item"]}>
            <label>Data de Nascimento</label>
            <input
              type="text"
              placeholder="00.00.00"
              value={formik.values.nascimento}
            />
          </li>
          <li className={styles["form-item"]}>
            <label>Telefone</label>
            <input
              type="text"
              placeholder="(00)00000-0000"
              value={formik.values.tel}
            />
          </li>
          <li className={styles["form-item"]}>
            <label>Instagram</label>
            <input
              type="text"
              placeholder="@seuuser"
              value={formik.values.instagram}
            />
          </li>
        </ul>
        <button>Cadastre-se</button>
      </form>
    </div>
  );
};

export { FormInput };
