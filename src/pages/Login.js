import React from "react";

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({});
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    const { name, value } = e.target;
    console.log("name and value is", name, value);
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  }
  const style = {
    width: "500px",
    // border: "solid 1px black",
  };

  return (
    <div className="login-container flex-grow-1 d-flex flex-column justify-content-center align-items-center ">
      <h1 className="mt-5">Sign in to your account</h1>
      <form
        onSubmit={handleSubmit}
        className="login-form d-flex flex-column justify-content-center align-items-center mt-4"
        style={style}
      >
        <input
          className="mt-4 p-2 "
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          className="mt-4 p-2"
          name="password"
          onChange={handleChange}
          type=""
          placeholder="Password"
          value={loginFormData.password}
        />
        <button className="mt-4 p-2 ">Log in</button>
      </form>
      <p className="mt-4 mb-5">Dont have an account? Create one!</p>
    </div>
  );
}
