import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir e-posta giriniz.")
    .required("Zorunlu alan. Boş bırakılamaz."),
  password: yup
    .string()
    .min(6, "En az 6 karakter giriniz.")
    .required("Zorunlu alan. Boş bırakılamaz.")
});

export default validations;
