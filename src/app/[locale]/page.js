"use client"

import styles from "./page.module.css"
import Perfil from "../../components/perfil/Perfil";
import Navbar from "../../components/navBar/Navbar";
import Projects from "../../components/projects/Projects";
import Contacto from "../../components/contact/Contacto";
import Footer from "../../components/footer/Footer";
import { Spinner } from "@material-tailwind/react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const Home = () => {

  const t = useTranslations('Page');

  const [spinner, setSpinner] = useState(true);

  setTimeout(() => {
    setSpinner(false);
  }, 1000);

  return (
    <div>
  {spinner === true ? <div className={`${styles.spinner} flex items-end gap-8 backdrop-brightness-50 backdrop-opacity-70 bg-[#9DB2BF]`}>
    <p className={`text-6xl text-black`}>{t('bienvenido')}</p>
    <Spinner color="gray" className={`${styles.spinnerSize} h-12 w-12`} />
    <p className={`${styles.p} text-2xl text-black`}>{t('cargando')}</p>
  </div> : <div className={`${styles.divMain} ${styles.animatefade} bg-[#ffffff] dark:bg-[#000000]`}> 
      <section>
        <Navbar />
      </section>
      <section>
        <Perfil />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contacto />
      </section>
      <section>
        <Footer />
      </section>

      </div> } 

    
    </div>
  )
}

export default Home;