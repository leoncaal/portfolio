import Perfil from "../components/perfil/Perfil";
import Navbar from "@/components/navBar/Navbar";
import Projects from "@/components/projects/Projects";
import DetailProject from "@/components/projects/DetailProject";
import Contacto from "@/components/contact/Contacto";
import Footer from "@/components/footer/Footer";

const Home = () => {
  return (
    <div>      
      <section>
        <Navbar />
      </section>
      <section>
        <Perfil />
      </section>
      <section>
        <Projects />
      </section>
{/*       <section>
        <DetailProject />
        </section> */}
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