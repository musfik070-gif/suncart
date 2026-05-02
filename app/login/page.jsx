"use client";

import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    const res = await signIn.email({
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/");
    }
  };

  const handleGoogle = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <section className="py-16 max-w-md mx-auto">
      <div className="card bg-base-100 shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

        <button onClick={handleLogin} className="btn btn-primary w-full mb-3">
          Login
        </button>

        <button onClick={handleGoogle} className="btn btn-outline w-full">
          Continue with Google
        </button>

        <p className="text-center mt-4">
          New user?{" "}
          <Link href="/register" className="text-primary">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}
