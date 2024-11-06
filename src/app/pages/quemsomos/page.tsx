import Navpages from "@/app/components/navpages/Navpages";
import Quemsomostop from "@/app/components/quemsomos/Quemsomostop";
import Footer from "@/app/components/footer/Footer";
import Heroquemsomos from "@/app/components/heroquemsomos/Heroquemsomos";
import HeroAI from "@/app/components/heroai/HeroAI";


export default function Quemsomos() {
    return (
        <div>
          <Navpages />
          <Heroquemsomos />
          <Quemsomostop />
          <HeroAI />
          <Footer />
        </div>
    )
}