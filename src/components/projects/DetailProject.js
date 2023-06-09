"use client"

import styles from "./DetailProject.module.css"
import { Carousel } from "@material-tailwind/react";
import nl2br from "react-nl2br";
import { useLocale } from "next-intl";

const projects = require("./data-es.json");
const projectsEn = require("./data-en.json");

const DetailProject = (props) => {

    const loc = useLocale();
    let datos = null;
    if(loc === "es"){
        datos = projects.filter(project => project.id === props.id);
    }
    if(loc === "en"){
        datos = projectsEn.filter(project => project.id === props.id);
    }
    
  return (
    <div className={styles.divMain}>
        <div className={styles.divTitle}>
            <h1>{datos[0].name}</h1>
            </div>
        <br key="1"/>
        <br key="2"/>
    <div>
        <Carousel className="rounded-xl">
            {datos[0].image.map(img => {
                return (
                    <img
                    key={img}
                    src={img}
                    alt={img}
                    className="h-full w-full object-cover"
                    />
                )
            })}
  </Carousel>
  </div>
  <div className={styles.divContent}>
    <div>
    <br />
    <br />
    <h1 className={styles.txtHeaders}>{datos[0].descriptionD}</h1>
    <br />
    <p className={styles.txtContent}>{nl2br(datos[0].description)}</p>
    <br />
    <ul className="list-disc pl-4">
        {datos[0].bullets.map(bullet => {
            return(
                <li key={bullet}>{bullet}</li>
            )
        }
        )}
    </ul>
    </div>

    <div className={styles.divTech}>
    <h1 className={styles.txtHeaders}>{datos[0].technologiesD}</h1>
  <Carousel className="rounded-xl" autoplay={true} autoplayDelay={2000} loop={true}>



  {datos[0].technologies.map(tech => {
                return (
                    <img
                    key={tech}
                    src={`/assets/images/iconos/${tech}.png`}
                    alt={tech}
                    className={styles.imgIcon}
                    />
                )
            })}
  </Carousel>
  </div>

  </div>
  
  <div className={styles.divBtn}>
    <br />
    <br />
  <a href={datos[0].website} target="_blank"><button className={styles.btnVisitame}>{datos[0].visit}</button></a>
  </div>
  
  </div>
  )
}

export default DetailProject