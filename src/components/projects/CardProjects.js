import styles from "./CardProjects.module.css";
import Image from "next/image";

const CardProjects = (props) => {
  return (
    <div className={`${styles.divMain} w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
        <a href="#">
            <Image className="p-8 rounded-t-lg" src={props.image} alt={props.name} height="100"
                    width="400" />
        </a>
        <div className={`${styles.divName} px-5 pb-5`}>
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
            </a>
        </div>
    </div>
  )
}

export default CardProjects