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
    .when("newPassword", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("newPassword")], "Both password need to be the same"),
    })
    .required("Confirm your password"),
});
