import About from "../../components/sections/About"
import Form from "../../components/sections/Form"
import Hero from "../../components/sections/Hero"
import SectionProjects from "../../components/sections/Projects"
import GalleryDetail from "../../components/sections/Projects/Gallery"
import ServicePage from "../../components/sections/ServicePage"
import Testimoni from "../../components/sections/Testimoni"


const HomePage = () => {

    return (
        <>
            <Hero />
            <About />
            <ServicePage />
            <GalleryDetail />
            <Testimoni />
            <Form />
        </>
    )
}

export default HomePage