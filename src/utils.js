import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const prevPath = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log("auth req is", request);
  // const prevPathname = new URL(request.url).pathname;
  const response = redirect(
    `/login?message=you must login first to access this page!&redirectTo=${prevPath}`
  );
  if (!isLoggedIn) {
    // redirectiong to login page didnt work so had to write this down
    return Object.defineProperty(response, "body", { value: true });
  }
  return null;
}
