import Profile2 from "../../../assets/img/Circle2.png"
import Button from "../../Button"
import Progress from "../../Progress"

const About = () => {
    return (
        <div className="p-[100px]">
            <div className="flex align-middle items-center justify-center">
                <h2 className="font-works font-bold text-4xl text-primary">About Me</h2>
            </div>

            <div className="flex justify-between gap-10 align-middle items-center">
                <div className="w-full">
                    <img src={Profile2} alt="Subhan Hakim" className="rounded-full" />
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-textsecondary font-works font-bold text-6xl"><span className="text-primary">1 Year’s Experience</span> on Front End Dev and UI/UX Designer</h2>
                        <p className="text-textsecondary font-works font-normal text-lg">Hello there! I'm <b>Subhan Nur Iqbal Hakim.</b> I specialize in <b>UI/UX</b> design and <b>Front End Dev</b>, and I'm deeply passionate and committed to my craft.</p>
                    </div>
                    <div className="gap-5 flex">
                        <Button title="Main Skills" type="button" variant="primary" />
                        <Button title="Certificates" type="button" variant="secondary" />
                        <Button title="Education" type="button" variant="secondary" />
                    </div>
                    <div>
                        <div className="flex gap-10 w-full">
                            <div className="w-full flex flex-col gap-5">
                                <Progress progress={100} title="Tailwind CSS" />
                                <Progress progress={85} title="React JS" />
                                <Progress progress={90} title="UI/UX Designer" />
                            </div>
                            <div className="w-full flex flex-col gap-5">
                                <Progress progress={50} title="Node JS" />
                                <Progress progress={70} title="Monggod DB" />
                                <Progress progress={75} title="Next JS" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About