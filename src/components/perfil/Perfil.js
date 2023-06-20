"use client"

import styles from "./Perfil.module.css";
import Image from "next/image";
import photo from "../../../public/assets/images/IMG_8054.jpg";
import nl2br from "react-nl2br";
import {useTranslations} from 'next-intl';

const Perfil = () => {

  const t = useTranslations('Perfil');

  return (
    <div className={styles.divFirst}>
      <div className={styles.divMain}>
        <div className={styles.divTxtPerfil}>
          <h1 className={`${styles.txtTitle} dark:text-white`}>
            {t('titulo')}
          </h1>
          <br />
          <p className={`${styles.txtText} dark:text-white`}>{nl2br(t('texto'))}</p>
          <br /><br />
          <a href="/assets/docs/CV_Leonel_Castaneda_Developer.pdf" download ><button className={styles.btnCv}>{t('descarga')}</button></a>
        </div>
        <Image className={styles.imgPhoto} src={photo} alt="Leonel Catañeda" />
      </div>
    </div>
  );
};

export default Perfil;
