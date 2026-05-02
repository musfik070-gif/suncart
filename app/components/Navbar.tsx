"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("isLoggedIn");
    setLoggedIn(!!user);
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <Link href="/" className="text-3xl font-bold text-primary">
          SunCart
        </Link>
      </div>

      <div className="flex gap-5 items-center">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>

        {loggedIn && <Link href="/profile">My Profile</Link>}

        {!loggedIn && (
          <Link href="/login" className="btn btn-sm btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
