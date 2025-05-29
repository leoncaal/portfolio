"use client"

import styles from "./DetailProjectUx.module.css"
import { Carousel, IconButton } from "@material-tailwind/react";
import nl2br from "react-nl2br";
import { useLocale } from "next-intl";

const projects = require("./data-es.json");
const projectsEn = require("./data-en.json");

const DetailProjectUX = (props) => {

    const loc = useLocale();
    let datos = null;
    if(loc === "es"){
        datos = projects.filter(project => project.id === props.id);
    }
    if(loc === "en"){
        datos = projectsEn.filter(project => project.id === props.id);
    }
    
  return (
    <div className={`${styles.divMain} dark:bg-[#27374D]`}>
        <div className={styles.divTitle}>
            <h1 className="text-black dark:text-white">{datos[0].name}</h1>
            </div>
        <br key="1"/>
        <br key="2"/>
    <div>
        <Carousel className="rounded-xl" prevArrow={({ handlePrev }) => (
        <IconButton
          variant="outlined"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="outlined"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}>
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
    <h1 className={`${styles.txtHeaders} text-black dark:text-white`}>{datos[0].descriptionD}</h1>
    <br />
    <p className={`${styles.txtContent} text-black dark:text-white`}>{nl2br(datos[0].description)}</p>
    <br />
    <ul className="list-disc pl-4 text-black dark:text-white">
        {datos[0].bullets.map(bullet => {
            return(
                <li key={bullet}>{bullet}</li>
            )
        }
        )}
    </ul>
    <br />
    <p className={`${styles.txtContent} text-black dark:text-white`}>{nl2br(datos[0].description2)}</p>
    </div>

    <div className={styles.divTech}>
    <h1 className={`${styles.txtHeaders} text-black dark:text-white`}>{datos[0].technologiesD}</h1>
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
    <br />{
      datos[0].websiteweb ? <div className={styles.divButtons}>
        <a href={datos[0].websiteweb} target="_blank"><button className={styles.btnVisitame}>{datos[0].visitweb}</button></a>
      <a href={datos[0].websitemovil} target="_blank"><button className={styles.btnVisitame}>{datos[0].visitmovil}</button></a>
      </div>
      
      : <a href={datos[0].website} target="_blank"><button className={styles.btnVisitame}>{datos[0].visit}</button></a>
    }
  
  {datos[0].docs !== "" ? <a href={datos[0].docs} target="_blank"><button className={styles.btnVisitame}>{datos[0].process}</button></a> : null}
  </div>

{/*   <div>
  <iframe className={styles.iframe} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7kpZvp3VEwxTApVEO5SzKm%2FUntitled%3Ftype%3Ddesign%26node-id%3D64-1398%26t%3DHz2dp0QlnZc6Qp6K-1%26scaling%3Dscale-down%26page-id%3D64%253A1397%26starting-point-node-id%3D64%253A1398%26mode%3Ddesign" allowfullscreen></iframe>
  </div> */}
  
  </div>
  )
}

export default DetailProjectUX
