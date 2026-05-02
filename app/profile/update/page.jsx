"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdateProfilePage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      const session = await authClient.getSession().catch(() => null);

      if (!session?.data?.user) {
        router.replace("/login?redirect=/profile/update");
        return;
      }

      setName(session.data.user.name || "");
      setImage(session.data.user.image || "");
      setLoading(false);
    };

    loadProfile();
  }, [router]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    setError("");
    setSaving(true);

    const res = await authClient.updateUser({
      name,
      image: image || null,
    });

    if (res?.error) {
      setError(res.error.message || "Profile update failed");
      setSaving(false);
      return;
    }

    router.push("/profile");
    router.refresh();
  };

  if (loading) {
    return (
      <section className="py-20 text-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </section>
    );
  }

  return (
    <section className="py-16 max-w-md mx-auto">
      <form onSubmit={handleUpdate} className="card bg-base-100 shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Update Profile
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full mb-4"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          type="url"
          placeholder="Photo URL"
          className="input input-bordered w-full mb-4"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={saving}
          className="btn btn-primary w-full"
        >
          {saving ? "Updating..." : "Update Information"}
        </button>
      </form>
    </section>
  );
}
