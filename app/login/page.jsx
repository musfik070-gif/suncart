"use client";

import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getSafeRedirect } from "@/lib/redirect";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getRedirectTarget = () => getSafeRedirect(window.location.search);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn.email({
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push(getRedirectTarget());
      router.refresh();
    }
  };

  const handleGoogle = async () => {
    setError("");
    await signIn.social({
      provider: "google",
      callbackURL: getRedirectTarget(),
    });
  };

  return (
    <section className="py-16 max-w-md mx-auto">
      <form onSubmit={handleLogin} className="card bg-base-100 shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full mb-3"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <button
          type="button"
          onClick={handleGoogle}
          className="btn btn-outline w-full"
        >
          Continue with Google
        </button>

        <p className="text-center mt-4">
          New user?{" "}
          <Link href="/register" className="text-primary">
            Register
          </Link>
        </p>
      </form>
    </section>
  );
}
