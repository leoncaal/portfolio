"use client"

import styles from "./Perfil.module.css";
import Image from "next/image";
import photo from "../../../public/assets/images/IMG_8054.jpg";
import nl2br from "react-nl2br";
import {useTranslations} from 'next-intl';
import { useInView } from "react-intersection-observer";

const Perfil = () => {

  const { ref: myRef, inView: perfilIsVisible } = useInView();
  const { ref: myRef2, inView: perfilIsVisible2 } = useInView();
  const { ref: myRef3, inView: perfilIsVisible3 } = useInView();

  const t = useTranslations('Perfil');

  return (
    <div className={styles.divFirst}>
      <div className={styles.divMain}>
        <div className={styles.divTxtPerfil}>
          <h1 className={`${styles.txtTitle} ${perfilIsVisible ? styles.animatefade : ''} text-black dark:text-white`}>
            {t('titulo')}
          </h1>
          <br />
          <p ref={myRef} className={`${styles.txtText} ${perfilIsVisible ? styles.animatefade : ''} text-black  dark:text-white`}>{nl2br(t('texto'))}</p>
          <br /><br />
          <a href="/assets/docs/CV_Leonel_Castaneda_Developer.pdf" download ><button ref={myRef3} className={`${perfilIsVisible3 ? styles.animatezoom : ''} flex w-full justify-center rounded-full bg-[#526D82] px-9 py-1.5 text-sm font-semibold transition duration-700 leading-6 text-white shadow-sm hover:bg-[#27374D] transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600;`}>{t('descarga')}</button></a>
        </div>
        <Image ref={myRef2} className={`${styles.imgPhoto} ${perfilIsVisible2 ? styles.animatezoom : styles.animatezoomout} `} src={photo} alt="Leonel Catañeda" />
      </div>
    </div>
  );
};

export default Perfil;
