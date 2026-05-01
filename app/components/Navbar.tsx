import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-primary">
          SunCart
        </Link>
      </div>

      <div className="flex gap-3">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/profile">My Profile</Link>
        <Link href="/login" className="btn btn-sm btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
}
