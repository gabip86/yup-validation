import * as yup from "yup";

export const passwordSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .min(6, "Password should be minimum 6 characters long")
    .max(12, "Password should be maximum 12 characters long")
    .required("Old password is mandatory"),
  newPassword: yup
    .string()
    .min(6, "Password should be minimum 6 characters long")
    .max(12, "Password should be maximum 12 characters long")
    .required("New password is mandatory"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null])
    .required("Confirm password is mandatory"),
});
