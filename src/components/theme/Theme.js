import { useState, useEffect } from "react";
import styles from "./Theme.module.css"
import Image from "next/image";

const Theme = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("value") === "dark") {
        setTheme('dark');
      document.documentElement.classList.add("dark");
    } else {
        setTheme('light')
      document.documentElement.classList.remove("dark");
    }
    }, 0);
    
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("value", theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={styles.divMain}>
      {theme === "dark" ? <button onClick={handleThemeSwitch} value="dark">
      <Image src="/assets/images/iconos/light.png" className={styles.iconTheme} alt="light" width="30" height="30"/>
      </button> : <button onClick={handleThemeSwitch} value="light">
      <Image src="/assets/images/iconos/dark.png" className={styles.iconTheme} alt="dark" width="30" height="30"/>
      </button>}
    </div>
  );
}

export default Theme;