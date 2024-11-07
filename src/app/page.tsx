import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";
import CarouselHead from "./components/carouselHead/CarouselHead";
import NavHead from "./components/navHead/NavHead";
import Apresentation from "./components/structure/Apresentation";
import ServiceCard from "./components/servicecard/ServiceCard";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Herocombo from "./components/herocombo/Herocombo";

export default function Home() {
  return (
    <div className={styles.pagestyles}>
      <NavHead />
      <CarouselHead />
      <Herocombo />
      <Apresentation />
      <Hero />
      <ServiceCard />
      <Footer />
    </div>
  );
}
