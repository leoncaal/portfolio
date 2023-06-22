"use client"

import styles from "./Projects.module.css";
import { useState } from "react";
import CardProjects from "./CardProjects";
import DetailProject from "./DetailProject";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const Projects = () => {

  const t = useTranslations('Proyectos');
  const loc = useLocale();

  let projects = null; 
  const [showModal, setShowModal] = useState(false);
  const [idClicked, setIdClicked] = useState(0);

  const handlerClic = (value) => {
    setIdClicked(value);
    setShowModal(true);
  };

  if(loc === "es"){
    projects = require("./data-es.json");
  }
  if(loc === "en"){
    projects = require("./data-en.json");
  }

  return (
    <div className={styles.divFirst} >
      <div className={styles.destination} id="projects"></div>
      <div className={styles.divAux}>
      <div>
        <h1 className={`${styles.txtTitle} dark:text-black`}>{t('titulo')}</h1>
      </div>
      
    <div className={styles.divMain}>

        {projects.map((project) => { 
          return(
          <button className={styles.btnCard} onClick={() => handlerClic(project.id)} key = {project.id} value = {project.id}><CardProjects 
          key = {project.id}
          name = {project.name}
          description = {project.description}
          image = {project.image}
          technologies = {project.technologies}
         /></button>)})
        }
        </div>
        </div>
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-7xl max-h-full">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className={`${styles.divRest} flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t dark:bg-[#27374D]`}>
                
                <DetailProject id={idClicked}/>

                </div>
                {/*footer*/}
                <div className={`${styles.divClose} flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b dark:bg-[#27374D]`}>
                  <button
                    className={styles.btnClose}
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    {t('cerrar')}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}

export default Projects;