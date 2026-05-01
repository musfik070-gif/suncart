"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    router.push("/");
  };

  return (
    <section className="py-16 max-w-md mx-auto">
      <div className="card bg-base-100 shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-4"
        />

        <button onClick={handleLogin} className="btn btn-primary w-full">
          Login
        </button>

        <p className="text-center mt-4 text-sm">New user? Register</p>
      </div>
    </section>
  );
}
