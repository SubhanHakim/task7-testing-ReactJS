import About from "../../components/sections/About"
import Form from "../../components/sections/Form"
import Hero from "../../components/sections/Hero"
import SectionProjects from "../../components/sections/Projects"
import ServicePage from "../../components/sections/ServicePage"
import Testimoni from "../../components/sections/Testimoni"


const HomePage = () => {

    return (
        <>
            <Hero />
            <About />
            <ServicePage />
            <SectionProjects />
            <Testimoni />
            <Form />
        </>
    )
}

export default HomePage