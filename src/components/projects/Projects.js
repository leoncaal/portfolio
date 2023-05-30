import styles from "./Projects.module.css";
import CardProjects from "./CardProjects";

const Projects = () => {
  const projects = require("./data.json");
  return (
    <div className={styles.divFirst} id="projects">
      <div className={styles.divAux}>
      <div>
        <h1 className={styles.txtTitle}>Proyectos</h1>
      </div>
      
    <div className={styles.divMain}>

        {projects.map((project) => { 
          return(
          <CardProjects 
          key = {project.id}
          name = {project.name}
          description = {project.description}
          image = {project.image}
          technologies = {project.technologies}
         />)})
        }
        </div>
        </div>
    </div>
  )
}

export default Projects;