"use client";

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState(null);

  useEffect(() => {
    let active = true;

    authClient
      .getSession()
      .then((session) => {
        if (active) {
          setUser(session?.data?.user || null);
        }
      })
      .catch(() => {
        if (active) {
          setUser(null);
        }
      });

    return () => {
      active = false;
    };
  }, [pathname]);

  const handleLogout = async () => {
    await authClient.signOut();

    setUser(null);
    router.push("/login");
    router.refresh();
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4 sm:px-8 flex-col gap-4 lg:flex-row">
      <div className="flex-1 justify-center lg:justify-start">
        <Link href="/" className="text-3xl sm:text-4xl font-bold text-primary">
          SunCart
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-8 items-center text-base sm:text-lg font-medium">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/profile">My Profile</Link>

        {user ? (
          <>
            <Image
              src={user.image || "https://i.pravatar.cc/100"}
              alt={user.name || "User avatar"}
              width={40}
              height={40}
              unoptimized
              className="w-10 h-10 rounded-full"
            />

            <button onClick={handleLogout} className="btn btn-primary btn-sm">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-primary btn-sm">
              Login
            </Link>

            <Link href="/register" className="btn btn-outline btn-sm">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
