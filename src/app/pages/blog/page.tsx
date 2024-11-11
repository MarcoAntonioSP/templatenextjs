
import Navpages from "@/app/components/navpages/Navpages";
import BlogHero from "@/app/components/blogcomponents/bloghero/Bloghero";
import Serviceshero from "@/app/components/servicoscomponents/services-hero/Serviceshero";
import Footer from "@/app/components/footer/Footer";
import Herotwo from "@/app/components/blogcomponents/herotwo/Herotwo";

export default function Blog () {
    return (
        <div>
            <Navpages />
            <Serviceshero />
            <BlogHero />
            <Herotwo />
            <Footer />
        </div>
    )
}