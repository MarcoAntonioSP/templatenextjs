import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselHead from "./components/carouselHead/CarouselHead";
import NavHeader from "./components/navHeader/NavHeader";
import NavHead from "./components/navHead/NavHead";
import Section1 from "./components/section1/Section1";
import Apresentation from "./components/structure/Apresentation";
import ServiceCard from "./components/servicecard/ServiceCard";
export default function Home() {
  return (
    <div className={styles.pagestyles}>
      <NavHead />
      <CarouselHead />
      <Apresentation />
      <ServiceCard />
      <Section1 />
      <NavHeader />
    </div>
  );
}
