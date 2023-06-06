import styles from "./CardProjects.module.css";
import Image from "next/image";

const CardProjects = (props) => {
  
  return (
    <div className={`${styles.divMain} w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
        
            <Image className={`${styles.img} p-3 rounded-t-lg`} src={props.image[0]} alt={props.name} height="100"
                    width="400" />
       
        <div className={`${styles.divName} px-5 pb-5`}>
           
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
       
        </div>
    </div>
  )
}

export default CardProjects