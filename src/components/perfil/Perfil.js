import styles from "./Perfil.module.css";
import Image from "next/image";
import photo from "../../../public/assets/images/IMG_8054.jpg";
import {titulo, texto} from "./data";
import nl2br from "react-nl2br";

const Perfil = () => {
  return (
    <div className={styles.divFirst}>
      <div className={styles.divMain}>
        <div className={styles.divTxtPerfil}>
          <h1 className={styles.txtTitle}>
            {titulo}
          </h1>
          <br />
          {nl2br(texto)}
          <br /><br />
          <a href="/assets/docs/CV_Leonel_Castaneda_Developer.pdf" download ><button className={styles.btnCv}>Download CV</button></a>
        </div>
        <Image className={styles.imgPhoto} src={photo} alt="Leonel Catañeda" />
      </div>
    </div>
  );
};

export default Perfil;
