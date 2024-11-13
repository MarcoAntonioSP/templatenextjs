import Footer from "@/app/components/footer/Footer";
import Midsection from "@/app/components/index/midsection/Midsection";
import Navpages from "@/app/components/navpages/Navpages";
import Portifolio from "@/app/components/quemsomos/portifolio/Portifolio";
import Servicosplanos from "@/app/components/servicoscomponents/servicosplanos/Servicosplanos";

export default function Servicos () {
    return (
        <div>
            <Navpages />
            <Portifolio />
            <Servicosplanos />
            <Midsection />
            <Footer />
        </div>
    )
}