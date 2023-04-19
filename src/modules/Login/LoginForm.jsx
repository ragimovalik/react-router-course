import {
  useLoaderData,
  useActionData,
  useNavigation,
  redirect,
  Form
} from "react-router-dom";

import { loginUser } from "../../api/api";

import s from "./LoginForm.module.css";

export async function loader({ request }) {
  const message = new URL(request.url).searchParams.get("message");

  return message;
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";

  try {
    const data = await loginUser({ email, password });
    if (data.user) {
      localStorage.setItem("loggedin", true);
    }
    return redirect(pathname, { replace: true });
  } catch (error) {
    return error.message;
  }
}

const LoginForm = () => {
  const message = useLoaderData();
  const errorMessage = useActionData(null);
  const { state } = useNavigation();

  return (
    <div className={s.login_container}>
      <h1>Sign in to your account</h1>
      {message && <h3 style={{ color: "#cc0000" }}>{message}</h3>}
      {errorMessage && <h3 style={{ color: "#cc0000" }}>{errorMessage}</h3>}

      <Form method="post" replace className={s.login_form}>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={state === "submitting"}>
          {state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
};

export default LoginForm;
