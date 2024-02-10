import React from "react";
import { useLoaderData, useNavigate, Form, redirect } from "react-router-dom";
import { loginUser } from "../apis";

export function loader({ request }) {
  // console.log("req is", request);
  // return null;
  return new URL(request.url).searchParams.get("message");
}
// passing down the login prop to the action
export async function action(obj, setIsLoggedIn) {
  // console.log(obj);
  const formData = await obj.request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = await loginUser({ email, password });
  localStorage.setItem("isLoggedIn", true);
  setIsLoggedIn(true);
  console.log("this is the object", obj);

  throw Object.defineProperty(redirect("/host"), "body", { value: true });

  // return ;
}
export default function Login() {
  const [error, setError] = React.useState(null);

  // This message is for redirection to login page when need authentication
  const message = useLoaderData();
  console.log(message);

  const style = {
    width: "500px",
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
        <Form
          method="post"
          className="login-form d-flex flex-column justify-content-center align-items-center mt-4"
          style={style}
        >
          <input
            className="mt-4 p-2 "
            name="email"
            type="email"
            placeholder="Email address"
          />
          <input
            className="mt-4 p-2"
            name="password"
            type=""
            placeholder="Password"
          />
          <button
            // disbaled={status === "submitting"}
            className="mt-4 p-2 "
          >
            Log in
          </button>
        </Form>
        <p className="mt-4 mb-5">Dont have an account? Create one!</p>
      </div>
    </div>
  );
}
