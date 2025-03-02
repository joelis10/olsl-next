'use client'

import styles from "../styles/header.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Apply dynamic class based on scroll state

  return (
    <header className={clsx(styles.header, isScrolled && styles.scrolled)}>
      <Image
        src="/logo.svg"
        width="80"
        height="80"
        alt="OLS Logo"
      />
      <ul className={styles.nav}>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Recent Works</li>
        <li>Contact Us</li>
      </ul>
    </header >
  );
}
