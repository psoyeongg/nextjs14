"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

export default function Navigation() {
  // usePathname은 client component에서만 작동함
  const path = usePathname();
  const navRef = useRef(null);

  const [fixed, setFixed] = useState(false);

  const handleScroll = () => {
    setFixed(window.scrollY > 10);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={classNames(styles.nav, fixed ? styles.fixed : "")}
    >
      <Link href='/'>
        <img src='/images/logo.png' alt='logo' />
      </Link>
      <ul>
        <li className={path === "/" ? styles.active : styles.noActive}>
          <Link href='/'>Home</Link>
        </li>
        <li className={path === "/about-us" ? styles.active : styles.noActive}>
          <Link href='/about-us'>About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
