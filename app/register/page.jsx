"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setError("");

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (error) {
      setError(error.message || "Registration failed");
      return;
    }

    router.push("/login");
  };

  return (
    <section className="py-16 max-w-md mx-auto">
      <div className="card bg-base-100 shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Register</h1>

        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full mb-4"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

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

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button onClick={handleRegister} className="btn btn-primary w-full">
          Register
        </button>

        <p className="text-center mt-4">
          Already have account?{" "}
          <Link href="/login" className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
