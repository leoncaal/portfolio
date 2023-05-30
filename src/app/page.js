import Perfil from "../components/perfil/Perfil";
import Navbar from "@/components/navBar/Navbar";
import Projects from "@/components/projects/Projects";

const Home = () => {
  return (
    <div>
        <Navbar />
      <section>
        <Perfil />
      </section>
      <section>
        <Projects />
      </section>

    </div>
  )
}

export default Home;