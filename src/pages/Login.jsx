import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("✅ Login Successful");

      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else if (res.data.user.role === "seller") {
        navigate("/seller");
      } else {
        navigate("/");
      }

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <form
        onSubmit={login}
        className="bg-white w-[420px] p-8 rounded-2xl shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-center mb-8 text-black">
          Welcome Back
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-300 rounded-lg text-black placeholder-gray-500 mb-4 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-300 rounded-lg text-black placeholder-gray-500 mb-6 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg text-lg"
        >
          Login
        </button>

        <p className="text-center mt-6 text-gray-700">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-violet-600 font-semibold"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;