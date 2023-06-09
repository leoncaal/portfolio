import styles from "./CardProjects.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const CardProjects = (props) => {

  const { ref: myRef, inView: cardIsVisible } = useInView();
  
  return (
    <div ref={myRef} className={`${styles.divMain} ${cardIsVisible ? styles.animatezoom : styles.opacity} w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-[#526D82] dark:border-gray-700`}>
        
            <Image ref={myRef} className={`${styles.img} ${cardIsVisible ? styles.animatefade : styles.animatefadeout} p-3 rounded-t-lg`} src={props.image[0]} alt={props.name} height="100"
                    width="400" />
       
        <div className={`${styles.divName} px-5 pb-5`}>
           
                <h5 className="text-xl font-semibold tracking-tight text-black dark:text-white">{props.name}</h5>
       
        </div>
    </div>
  )
}

export default CardProjects