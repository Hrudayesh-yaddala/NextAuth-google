"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();
  return (
    <div className="flex justify-between bg-green-600 h-12 ">
      <div className=" font-bold mx-4 flex items-center">Logo</div>
      <div>
        {session.data?.user ? (
          <button
            className="bg-red-500 p-2 font-semibold rounded-md"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        ) : (
          <button
            className="bg-sky-400 p-2 font-semibold rounded-md"
            onClick={() => (window.location.href = "/sign-in")}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
