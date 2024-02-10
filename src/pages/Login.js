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
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
    // return redirect("/host");
    return Object.defineProperty(redirect("/host"), "body", { value: true });
  } catch (err) {
    return err.message;
  }
}
export default function Login() {
  const errorMessage = useActionData();
  // for the status of submitting
  const navigation = useNavigation();
  console.log("navigaton is", navigation);
  // This message is for redirection to login page when need authentication
  const message = useLoaderData();
  console.log(message);

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
