"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggler from "../themeToggler/ThemeToggler";
import AuthLinks from "../authLinks/AuthLinks";


const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrolling ? '#ffffff' : 'transparent',
    top: scrolling ? 0 : '20px',
    boxShadow: scrolling ? '0 5px 25px rgba(1, 1, 1, 0.2)' : 'none',
    // Add other styles as needed
    transition: '0.3s ease',
  };
  return (
    <div className={styles.container} style={navbarStyle}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="Facebook" width={24} height={24}></Image>
        <Image src="/instagram.png" alt="Instagram" width={24} height={24}></Image>
        <Image src="/tiktok.png" alt="Tiktok" width={24} height={24}></Image>
        <Image src="/youtube.png" alt="Youtube" width={24} height={24}></Image>
      </div>
      <div className={styles.logo}>
      My Blog
      </div>
      <div className={styles.links}>
        <ThemeToggler />
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/">Contatc</Link>
        <Link className={styles.link} href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
