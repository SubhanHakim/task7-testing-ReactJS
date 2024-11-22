import Button from "../../Button"
import Profil from "../../../assets/img/Circle.png"
import SliderLogos from "../../Slider"


const Hero = () => {
    return (
        <>
            <div className="gap-10 flex py-[100px] flex-col">
                <div className="flex justify-between align-middle items-center px-[100px]">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1 w-[650px]">
                            <h4 className="font-works font-bold text-2xl text-textsecondary">Welcome to my Portfolio</h4>
                            <h1 className="text-textsecondary font-works font-bold text-6xl">Hi I’m <span className="text-primary">Subhan Hakim</span> Front End Dev And UI/UX Designer</h1>
                            <p className="font-works text-textsecondary font-normal text-2xl w-[450px]">Collaborate with highly skilled individuals, and I provide high-quality service.</p>
                        </div>
                        <div className="flex gap-5">
                            <Button title="Hire Me" type="button" variant="primary" />
                            <Button title="Download CV" type="button" variant="secondary" />
                        </div>
                    </div>
                    <div>
                        <img src={Profil} alt="Subhan Hakim" className="w-[550px] h-[550px] rounded-full" />
                    </div>
                </div>
                <div>
                    <SliderLogos />
                </div>
            </div>
        </>
    )
}

export default Hero