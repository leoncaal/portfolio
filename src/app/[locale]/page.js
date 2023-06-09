
import styles from "./page.module.css"
import Perfil from "../../components/perfil/Perfil";
import Navbar from "../../components/navBar/Navbar";
import Projects from "../../components/projects/Projects";
import Contacto from "../../components/contact/Contacto";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className={styles.divMain}> 
      <section>
        <Navbar />
      </section>
      <section>
        <Perfil />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contacto />
      </section>
      <section>
        <Footer />
      </section>

    </div>
  )
}

export default Home;