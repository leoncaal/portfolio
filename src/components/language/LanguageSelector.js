import styles from "./LanguageSelector.module.css";
import Link from 'next-intl/link';
import { useLocale } from "next-intl";

const LanguageSelector = () => {

    const loc = useLocale();

  return (
    <div className={styles.divMain}>
        {/* {buttonLang === true ? <Link href="/" locale="es" onClick={() => handlerButton("es")} value="es">
            <img src="/assets/images/iconos/esp.png" alt="esp" className={styles.iconLang} /></Link> 
            :  <Link href="/" locale="en" onClick={() => handlerButton("en")} value="en">
            <img src="/assets/images/iconos/eng.png" alt="eng" className={styles.iconLang} />
        </Link>
        } */}
       {loc === "en" ?
        <Link href="/" locale="es" value="es">
            <img src="/assets/images/iconos/esp.png" alt="esp" className={styles.iconLang} /></Link> 
            : <Link href="/" locale="en" value="en">
            <img src="/assets/images/iconos/eng.png" alt="eng" className={styles.iconLang} />
        </Link>
        }


    </div>
  )
}

export default LanguageSelector