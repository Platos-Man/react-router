import { useLoaderData, useNavigate, Form } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../api";

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = await loginUser({ email, password });
  console.log(data);
  return null;
};

export default function Login() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const message = useLoaderData();

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error.message}</h3>}
      <Form method="post" className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={status === "submitting"}>{status === "submitting" ? "Logging in..." : "Log in"}</button>
      </Form>
    </div>
  );
}
