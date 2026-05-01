"use client";

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="card bg-base-100 shadow-xl p-10 text-center">
        <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-4xl font-bold mx-auto mb-6">
          U
        </div>

        <h1 className="text-4xl font-bold mb-2">User Profile</h1>

        <p className="text-gray-500 mb-6">user@email.com</p>

        <button onClick={handleLogout} className="btn btn-primary">
          Logout
        </button>
      </div>
    </section>
  );
}
