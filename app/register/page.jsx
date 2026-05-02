"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { getSafeRedirect } from "@/lib/redirect";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getRedirectTarget = () => getSafeRedirect(window.location.search, "");

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: image || undefined,
    });

    if (error) {
      setError(error.message || "Registration failed");
      setLoading(false);
      return;
    }

    // auto login session remove
    await authClient.signOut();

    setLoading(false);

    const redirect = getRedirectTarget();

    router.push(
      redirect ? `/login?redirect=${encodeURIComponent(redirect)}` : "/login",
    );
  };

  const handleGoogle = async () => {
    setError("");

    const redirect = getRedirectTarget();

    await authClient.signIn.social({
      provider: "google",
      callbackURL: redirect || "/",
    });
  };

  return (
    <section className="py-16 max-w-md mx-auto">
      <form
        onSubmit={handleRegister}
        className="card bg-base-100 shadow-xl p-8"
      >
        <h1 className="text-4xl font-bold text-center mb-6">Register</h1>

        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="url"
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

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full mb-3"
        >
          {loading ? "Creating account..." : "Register"}
        </button>

        <button
          type="button"
          onClick={handleGoogle}
          className="btn btn-outline w-full"
        >
          Continue with Google
        </button>

        <p className="text-center mt-4">
          Already have account?{" "}
          <Link href="/login" className="text-primary">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
}
