import React from "react";
import {
  useLoaderData,
  useActionData,
  useNavigation,
  Form,
  redirect,
  useNavigate,
} from "react-router-dom";
import { loginUser } from "../apis";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}
// passing down the login prop to the action
export async function action({ request }, setIsLoggedIn) {
  console.log("rqu in action is", request);
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const prevPathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
    return Object.defineProperty(redirect(prevPathname), "body", {
      value: true,
    });
  } catch (err) {
    return err.message;
  }
}
export default function Login() {
  const errorMessage = useActionData();
  // for the status of submitting
  const navigation = useNavigation();
  // This message is for redirection to login page when need authentication
  const message = useLoaderData();

  const style = {
    width: "500px",
  };

  const btnSubmitting = {
    backgroundColor: "gray",
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
        {errorMessage && <p className="text-danger fw-bold">{errorMessage}</p>}
        <Form
          method="post"
          className="login-form d-flex flex-column justify-content-center align-items-center mt-4"
          style={style}
        >
          <input
            className="mt-4 p-2 "
            name="email"
            type="email"
            placeholder="Email address is admin@admin.com "
          />
          <input
            className="mt-4 p-2"
            name="password"
            type=""
            placeholder="Password is admin"
          />
          <button
            className="mt-4 p-2"
            style={navigation.state === "submitting" ? btnSubmitting : null}
            disbaled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Logging In..." : "Log in"}
          </button>
        </Form>
        <p className="mt-4 mb-5">Dont have an account? Create one!</p>
      </div>
    </div>
  );
}
