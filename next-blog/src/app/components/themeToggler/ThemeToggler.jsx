"use client";
import React, { useContext } from "react";
import styles from "./themeToggler.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggler = () => {
  const { toggle, theme } = useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image
        className={styles.image}
        src="/moon.png"
        alt="Moon"
        width={14}
        height={14}
      />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image
        className={styles.image}
        src="/sun.png"
        alt="Sun"
        width={14}
        height={14}
      />
    </div>
  );
};

export default ThemeToggler;
