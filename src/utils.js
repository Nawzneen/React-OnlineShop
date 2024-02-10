import { redirect } from "react-router-dom";

export async function requireAuth() {
  // const isLoggedIn = false;
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log("is user logged in?", isLoggedIn);
  const response = redirect(
    "/login?message=you must login first to access this page!"
  );
  if (!isLoggedIn) {
    console.log("redirecting to");
    // redirectiong to login page didnt work so had to write this down
    throw Object.defineProperty(response, "body", { value: true });
  }
  return null;
}
