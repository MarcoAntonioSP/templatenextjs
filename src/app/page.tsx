import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";
import CarouselHead from "./components/carouselHead/CarouselHead";
import NavHead from "./components/navHead/NavHead";
import Apresentation from "./components/structure/Apresentation";
import ServiceCard from "./components/servicecard/ServiceCard";
import Hero from "./components/hero/Hero";
import Herotwo from "./components/herotwo/Herotwo";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.pagestyles}>
      <NavHead />
      <CarouselHead />
      <Apresentation />
      <Herotwo />
      <Hero />
      <ServiceCard />
      <Footer />
    </div>
  );
}
