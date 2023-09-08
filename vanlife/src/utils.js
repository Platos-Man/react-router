import { redirect } from "react-router-dom";

// Used to simulate auth
export const requireAuth = (request) => {
  const isLoggedIn = localStorage.getItem("loggedIn");
  const pathname = new URL(request.url).pathname;

  if (!isLoggedIn) {
    throw redirect(
      pathname ? `/login?message=You must log in first&redirectTo=${pathname}` : "/login?message=You must log in first"
    );
  }
};
