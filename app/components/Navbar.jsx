"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-primary">
          SunCart
        </Link>
      </div>

      <div className="flex gap-5 items-center">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>

        {mounted ? (
          <>
            <Link href="/profile">My Profile</Link>
            <Link href="/login" className="btn btn-sm btn-primary">
              Login
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
}
