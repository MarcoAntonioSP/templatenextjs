import Footer from "@/app/components/footer/Footer";
import Navpages from "@/app/components/navpages/Navpages";
import Serviceshero from "@/app/components/services-hero/Serviceshero";
import Servicosplanos from "@/app/components/servicosplanos/Servicosplanos";

export default function Servicos () {
    return (
        <div>
            <Navpages />
            <Serviceshero />
            <Servicosplanos />
            <Footer />
        </div>
    )
}