import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";
import CarouselHead from "./components/index/carouselHead/CarouselHead";
import NavHead from "./components/index/navHead/NavHead";
import Apresentation from "./components/index/structure/Apresentation";
import ServiceCard from "./components/index/servicecard/ServiceCard";
import Hero from "./components/index/hero/Hero";
import Footer from "./components/footer/Footer";
import Herocombo from "./components/index/herocombo/Herocombo";
import Faqitens from "./components/index/faqitens/Faqitens";

export default function Home() {
  return (
    <div className={styles.pagestyles}>
      <NavHead />
      <CarouselHead />
      <Herocombo />
      <Apresentation />
      <Hero />
      <ServiceCard />
      <Faqitens />
      <Footer />
    </div>
  );
}
