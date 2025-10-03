import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";


function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (isLogin) {
      // MOCK LOGIN - Always successful for demo
      console.log("✅ Login successful:", data.email);
      setIsAuthenticated(true);
    } else {
      
      // MOCK SIGN UP
      const user = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      localStorage.setItem(data.email, JSON.stringify(user));
      console.log("✅ Registration successful:", user);
      setIsLogin(true); // Switch to login after sign up
      alert("Registration successful! Please login with your credentials.");
    }
    reset();
  };

  // Redirect to maindash instead of dashboard
  if (isAuthenticated) {
    return <Navigate to="/maindash" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {!isLogin && (
            <div className="mb-4">
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Full Name"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">Name is required</p>
              )}
            </div>
          )}

          <div className="mb-4">
            <input
              type="email"
              {...register("email", { 
                required: true,
                pattern: /^\S+@\S+$/i 
              })}
              placeholder="Email"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Valid email is required</p>
            )}
          </div>

          <div className="mb-6">
            <input
              type="password"
              {...register("password", { 
                required: true,
                minLength: 6 
              })}
              placeholder="Password"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                reset();
              }}
              className="text-sm text-blue-600 hover:underline focus:outline-none"
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
