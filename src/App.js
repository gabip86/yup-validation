import { Formik, Form, Field } from "formik";
import { passwordSchema } from "./validations/PasswordChange";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={passwordSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, isSubmitting, isValidating, isValid }) => (
          <div>
            <Form className="Form">
              <div className="title">Change password</div>
              <div className="inputs">
                <Field
                  type="password"
                  name="oldPassword"
                  placeholder="Enter your old password"
                  autoComplete="off"
                />
                {errors.oldPassword && touched.oldPassword ? (
                  <div className="error">{errors.oldPassword}</div>
                ) : null}
                <Field
                  type="password"
                  name="newPassword"
                  placeholder="Enter your new password"
                  autoComplete="off"
                />
                {errors.newPassword && touched.newPassword ? (
                  <div className="error">{errors.newPassword}</div>
                ) : null}

                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  autoComplete="off"
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="error">{errors.confirmPassword}</div>
                ) : null}

                <input
                  type="submit"
                  id="submit"
                  disabled={isSubmitting || isValidating || !isValid}
                />
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default App;
