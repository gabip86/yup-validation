import { passwordSchema } from "../validations/PasswordChange";

function Form() {
  const changePassword = async (event) => {
    event.preventDefault();
    let formData = {
      oldPassword: event.target[0].value,
      newPassword: event.target[1].value,
      confirmPassword: event.target[2].value,
    };
    const isValid = await passwordSchema.isValid(formData);
    console.log(isValid);
  };

  return (
    <div className="Form">
      <div className="title">Change password</div>
      <div className="inputs">
        <form onSubmit={changePassword}>
          <input
            type="password"
            name="oldPassword"
            placeholder="Enter your old password"
          />
          <input
            type="password"
            name="newPassword"
            placeholder="Enter your new password"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
          />
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
