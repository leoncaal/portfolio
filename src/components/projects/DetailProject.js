"use client"

import styles from "./DetailProject.module.css"
import { Carousel } from "@material-tailwind/react";
import nl2br from "react-nl2br";

const projects = require("./data.json");

const DetailProject = (props) => {
    const datos = projects.filter(project => project.id === props.id);
    
  return (
    <div>
        <div className={styles.divTitle}>
            <h1>{datos[0].name}</h1>
            </div>
        <br />
        <br />
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
    <h1>Descripción</h1>
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
    <h1>Tecnologias</h1>
  <Carousel className="rounded-xl" autoplay="true" autoplayDelay="2000" loop="true">



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
  <a href={datos[0].website} target="_blank"><button className={styles.btnVisitame}>Visitame</button></a>
  </div>
  
  </div>
  )
}

export default DetailProject