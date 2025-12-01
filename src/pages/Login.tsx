import React, { useState, type FormEvent } from "react";
import { loginAdmin } from "../utils/apicall";
import { useNavigate } from "react-router-dom";

export type LoginData = {
  email: string;
  password: string;
};

type Props = {
  onSubmit?: (data: LoginData) => void;
  className?: string;
};

const LoginForm: React.FC<Props> = ({ onSubmit, className = "" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const errors = {
    email:
      !email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        ? "Please enter a valid email"
        : "",
    password: !password ? "Password is required" : "",
  };

  const isValid = !errors.email && !errors.password;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (!isValid) return;

    const loginData: LoginData = { email: email.trim(), password };

    try {
      const { token, auth } = await loginAdmin(loginData);
      localStorage.setItem("token", JSON.stringify({ token, auth }));
      navigate("/admin");
    } catch (err: any) {
      const msg =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong";

      setErrorMsg(msg);
      setTimeout(() => setErrorMsg(""), 3000);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-amber-50 ${className}`}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8"
        noValidate
      >
        <h2 className="text-2xl font-semibold mb-6 text-amber-700">Sign In</h2>

        {errorMsg && (
          <div className="mb-4 p-3 text-sm text-white bg-red-500 rounded-lg">
            {errorMsg}
          </div>
        )}

        <label className="block mb-4">
          <span className="text-sm font-medium text-amber-600">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            required
            placeholder="you@example.com"
            className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-amber-300 focus:border-amber-400 ${
              touched.email && errors.email
                ? "border-red-400"
                : "border-gray-300"
            }`}
          />
          {touched.email && errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email}</p>
          )}
        </label>

        <label className="block mb-6">
          <span className="text-sm font-medium text-amber-600">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, password: true }))}
            required
            placeholder="Enter your password"
            className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-amber-300 focus:border-amber-400 ${
              touched.password && errors.password
                ? "border-red-400"
                : "border-gray-300"
            }`}
          />
          {touched.password && errors.password && (
            <p className="text-xs text-red-600 mt-1">{errors.password}</p>
          )}
        </label>

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-2 rounded-xl text-white font-medium shadow-sm active:scale-95 transition ${
            isValid
              ? "bg-amber-600 hover:bg-amber-700"
              : "bg-amber-300 cursor-not-allowed"
          }`}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
