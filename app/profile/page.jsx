"use client";

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      const session = await authClient.getSession().catch(() => null);

      if (!session?.data?.user) {
        router.replace("/login?redirect=/profile");
        return;
      }

      setUser(session.data.user);
      setLoading(false);
    };

    loadProfile();
  }, [router]);

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
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
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="card bg-base-100 shadow-xl p-10 text-center">
        <Image
          src={user.image || "https://i.pravatar.cc/160"}
          alt={user.name || "User avatar"}
          width={96}
          height={96}
          unoptimized
          className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
        />

        <h1 className="text-4xl font-bold mb-2">{user.name}</h1>

        <p className="text-gray-500 mb-6">{user.email}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/profile/update" className="btn btn-primary">
            Update Information
          </Link>

          <button onClick={handleLogout} className="btn btn-outline">
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}
