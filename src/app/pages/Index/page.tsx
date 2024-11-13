import "bootstrap/dist/css/bootstrap.min.css";
import NavHead from "@/app/components/index/navHead/NavHead";
import styles from "./page.module.css";
import CarouselHead from "@/app/components/index/carouselHead/CarouselHead";
import Herocombo from "@/app/components/index/herocombo/Herocombo";
import ServiceCard from "@/app/components/index/servicecard/ServiceCard";
import Apresentation from "@/app/components/index/structure/Apresentation";
import Faqitens from "@/app/components/index/faqitens/Faqitens";
import Footer from "@/app/components/footer/Footer";
import Midsection from "@/app/components/index/midsection/Midsection";


export default function Index () {
  return (
    <div className={styles.pagestyles}>
      <NavHead />
      <CarouselHead />
      <Herocombo />
      <Midsection />
      <ServiceCard />
      <Apresentation />
      <Faqitens />
      <Footer />
    </div>
  );
}
