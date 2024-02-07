import React from "react";
import { useLoaderData } from "react-router-dom";
import { loginUser } from "../apis";

export function loader({ request }) {
  console.log("req is", request);
  return new URL(request.url).searchParams.get("message");
}
export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({});
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);

  // This message is for redirection to login page when need authentication
  const message = useLoaderData();
  console.log(message);
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  function handleSubmit(e) {
    e.preventDefault();
    loginUser(loginFormData)
      .then((res) => {
        console.log("login is successful", res);
      })
      .catch((error) => {
        console.error("Login failed", error);
        setError(error);
      })
      .finally(() => setStatus("idle"));
    setError(null);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setStatus("submitting");
    console.log("name and value is", name, value);
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  }
  const style = {
    width: "500px",
    // border: "solid 1px black",
  };

  return (
    <div className="login-container ,b-5 flex-grow-1 d-flex flex-column justify-content-center align-items-center ">
      {message && (
        <p className="text-align-left fw-bold text-capitalize text-warning ">
          {message}
        </p>
      )}
      <div className=" ">
        <h1>Sign in to your account</h1>
        {error && <p className="text-danger">{error.message}</p>}
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
          <button disbaled={status === "submitting"} className="mt-4 p-2 ">
            Log in
          </button>
        </form>
        <p className="mt-4 mb-5">Dont have an account? Create one!</p>
      </div>
    </div>
  );
}
