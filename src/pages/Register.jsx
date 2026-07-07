import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/auth/register", form);

      alert("✅ Registration Successful");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      <form
        onSubmit={register}
        className="bg-white w-[420px] p-8 rounded-2xl shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-center mb-8 text-black">
          Create Account
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-300 rounded-lg text-black placeholder-gray-500 mb-4 outline-none"
        />

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
          className="w-full p-3 border-2 border-gray-300 rounded-lg text-black placeholder-gray-500 mb-4 outline-none"
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-300 rounded-lg text-black mb-6"
        >
          <option value="customer">Customer</option>
          <option value="seller">Seller</option>
        </select>

        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg text-lg"
        >
          Register
        </button>

        <p className="text-center mt-6 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-violet-600 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;