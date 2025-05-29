"use client"

import styles from "./Perfil.module.css";
import Image from "next/image";
import photo from "../../../public/assets/images/IMG_8054.jpg";
import nl2br from "react-nl2br";
import {useTranslations, useLocale} from 'next-intl';
import { useInView } from "react-intersection-observer";
import { useRouter } from 'next/router';

const Perfil = () => {

  const locale = useLocale();

  const { ref: myRef, inView: perfilIsVisible } = useInView();
  const { ref: myRef2, inView: perfilIsVisible2 } = useInView();
  const { ref: myRef3, inView: perfilIsVisible3 } = useInView();

  const t = useTranslations('Perfil');

  const pdfUrl = locale === 'es' 
    ? '/assets/docs/CV_Leonel_Castaneda_Developer_Es.pdf' 
    : '/assets/docs/CV_Leonel_Castañeda_Developer_En.pdf';

  return (
    <div className={styles.divFirst}>
      <div className={styles.divMain}>
        <div className={styles.divTxtPerfil}>
          <h1 className={`${styles.txtTitle} ${perfilIsVisible ? styles.animatefade : styles.opacity} text-black dark:text-white`}>
            {t('titulo')}
          </h1>
          <br />
          <p ref={myRef} className={`${styles.txtText} ${perfilIsVisible ? styles.animatefade : styles.opacity} text-black  dark:text-white`}>{nl2br(t('texto'))}</p>
          <br /><br />
          <a href={pdfUrl} download ><button ref={myRef3} className={`${perfilIsVisible3 ? styles.animatezoom : styles.opacity} flex w-full justify-center rounded-full bg-[#526D82] px-9 py-1.5 text-sm font-semibold transition duration-700 leading-6 text-white shadow-sm hover:bg-[#27374D] transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600;`}>{t('descarga')}</button></a>
        </div>
        <Image ref={myRef2} className={`${styles.imgPhoto} ${perfilIsVisible2 ? styles.animatezoom : styles.opacity} `} src={photo} alt="Leonel Catañeda" />
      </div>
    </div>
  );
};

export default Perfil;
