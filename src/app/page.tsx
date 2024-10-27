import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "./page.module.css";
import CarouselHead from "./components/carouselHead/CarouselHead";
import NavHeader from "./components/navHeader/NavHeader";
export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <CarouselHead />
      <NavHeader />
    </div>
  );
}
