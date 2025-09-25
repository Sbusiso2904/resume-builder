import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const onSubmit = (data) => {
    const storedUser = localStorage.getItem(data.email);
    
    if (!storedUser) {
      setMessage("❌ Email or password doesn't match our records.");
      return;
    }

    const userData = JSON.parse(storedUser);

    if (userData.password === data.password) {
      setMessage(`✅ Welcome back, ${userData.name}!`);
      // You can redirect after a short delay
      setTimeout(() => {
        navigate("/builder"); // or your dashboard route
      }, 1500);
    } else {
      setMessage("❌ Email or password doesn't match our records.");
    }
    
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-700">Login</h2>

      {message && (
        <div
          className={`text-center mb-4 font-medium ${
            message.startsWith("✅") ? "text-green-600" : "text-red-500"
          }`}
        >
          {message}
        </div>
      )}

      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="p-2 border border-gray-300 rounded"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">*Email* is required</span>
        )}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          className="p-2 border border-gray-300 rounded"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">*Password* is required</span>
        )}

        <input
          type="submit"
          value="Login"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
        />
      </form>
    </div>
  );
}


export default Login;
