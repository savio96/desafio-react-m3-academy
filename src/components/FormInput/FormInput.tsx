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
      termos: false,
    },
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
    }),
    onSubmit: function (values) {
      alert(`You are registered! Name: ${values.nome}. Email: ${values.email}. Profession: ${values.cpf}. 
              Age: ${values.nascimento},${values.tel},${values.instagram}`);
    },
  });

  return (
    <div className={styles["form"]}>
      <form onSubmit={formik.handleSubmit}>
        <h2>Preencha o formulário</h2>
        <ul className={styles["form-itens"]}>
          <li className={styles["form-item"]}>
            <div className={styles["textForm"]}>
              <label>Nome</label>
              {formik.touched.nome && formik.errors.nome && (
                <span className={styles["errorFormik"]}>
                  {formik.errors.nome}
                </span>
              )}
            </div>
            <input
              id="nome"
              type="text"
              placeholder="Seu nome completo"
              value={formik.values.nome}
              onChange={formik.handleChange}
            />
          </li>
          <li className={styles["form-item"]}>
            <div className={styles["textForm"]}>
              <label>E-mail</label>
              {formik.touched.email && formik.errors.email && (
                <span className={styles["errorFormik"]}>
                  {formik.errors.email}
                </span>
              )}
            </div>
            <input
              id="email"
              type="text"
              placeholder="Seu email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </li>
          <li className={styles["form-item"]}>
            <div className={styles["textForm"]}>
              <label>CPF</label>
              {formik.touched.cpf && formik.errors.cpf && (
                <span className={styles["errorFormik"]}>
                  {formik.errors.cpf}
                </span>
              )}
            </div>
            <input
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={formik.values.cpf}
              onChange={formik.handleChange}
            />
          </li>

          <li className={styles["form-item"]}>
            <div className={styles["textForm"]}>
              <label>Data de Nascimento</label>
              {formik.touched.nascimento && formik.errors.nascimento && (
                <span className={styles["errorFormik"]}>
                  {formik.errors.nascimento}
                </span>
              )}
            </div>
            <input
              id="nascimento"
              type="text"
              placeholder="00.00.00"
              value={formik.values.nascimento}
              onChange={formik.handleChange}
            />
          </li>
          <li className={styles["form-item"]}>
            <div className={styles["textForm"]}>
              <label>Telefone</label>
              {formik.touched.tel && formik.errors.tel && (
                <span className={styles["errorFormik"]}>
                  {formik.errors.tel}
                </span>
              )}
            </div>
            <input
              id="tel"
              type="text"
              placeholder="(00)00000-0000"
              value={formik.values.tel}
              onChange={formik.handleChange}
            />
          </li>
          <li className={styles["form-item"]}>
            <div className={styles["textForm"]}>
              <label>Instagram</label>
              {formik.touched.instagram && formik.errors.instagram && (
                <span className={styles["errorFormik"]}>
                  {formik.errors.instagram}
                </span>
              )}
            </div>
            <input
              id="instagram"
              type="text"
              placeholder="@seuuser"
              value={formik.values.instagram}
              onChange={formik.handleChange}
            />
          </li>
          <li>
            {formik.touched.termos && formik.errors.termos && (
              <span className={styles["errorFormik"]}>
                {formik.errors.termos}
              </span>
            )}
            <a href="/">Declaro que li e aceito</a>
            <input type="checkbox" />
          </li>
        </ul>
        <button type="submit">Cadastre-se</button>
      </form>
    </div>
  );
};

export { FormInput };
