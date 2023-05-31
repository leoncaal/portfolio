import styles from "./Footer.module.css";
import Image from "next/image";
import git from "../../../public/assets/images/iconos/signo-de-github.png";
import link from "../../../public/assets/images/iconos/signo-de-linkedin.png";
import email from "../../../public/assets/images/iconos/correo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.divFirst}>
      <div className={styles.divMain}>
        <h1 className={styles.txtName}>© 2023 Leonel Castañeda</h1>
        <Link href="https://github.com/leoncaal" target="_blank">
          <Image className={styles.img} src={git} alt="GitHub" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/leonel-castaneda/"
          target="_blank">
          <Image className={styles.img} src={link} alt="Linkedin" />
        </Link>
        <Link href="mailto:leonel_1mx@yahoo.com.mx" target="_blank">
          <Image className={styles.img} src={email} alt="Linkedin" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
