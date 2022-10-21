function Form() {
  return (
    <div className="Form">
      <div className="title">Change password</div>
      <div className="inputs">
        <form>
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
