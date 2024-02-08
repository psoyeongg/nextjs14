"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  // usePathname은 client component에서만 작동함
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href='/about-us'>About Us</Link>{" "}
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
