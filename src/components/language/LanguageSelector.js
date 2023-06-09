import styles from "./LanguageSelector.module.css";
import { useState } from "react";
import Link from 'next-intl/link';

const LanguageSelector = () => {

    const [buttonLang, setButtonLang]= useState(false);

    const handlerButton = (value)=> {
        if (value === "es") {
            setButtonLang(false);
        }
        if (value === "en"){
            setButtonLang(true);
        }
    }
  return (
    <div className={styles.divMain}>
        {/* {buttonLang === true ? <Link href="/" locale="es" onClick={() => handlerButton("es")} value="es">
            <img src="/assets/images/iconos/esp.png" alt="esp" className={styles.iconLang} /></Link> 
            :  <Link href="/" locale="en" onClick={() => handlerButton("en")} value="en">
            <img src="/assets/images/iconos/eng.png" alt="eng" className={styles.iconLang} />
        </Link>
        } */}
        <Link href="/" locale="es" onClick={() => handlerButton("es")} value="es">
            <img src="/assets/images/iconos/esp.png" alt="esp" className={styles.iconLang} /></Link> 
            <Link href="/" locale="en" onClick={() => handlerButton("en")} value="en">
            <img src="/assets/images/iconos/eng.png" alt="eng" className={styles.iconLang} />
        </Link>

    </div>
  )
}

export default LanguageSelector