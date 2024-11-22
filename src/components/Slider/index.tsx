import Slider from "react-infinite-logo-slider"
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";


const SliderLogos = () => {
    return (
        <div className="bg-[#F8F8F8] px-[100px] py-10">
            <Slider
                duration={40}
                pauseOnHover={true}
                blurBorders={false}
                blurBorderColor={'#fff'}
            >
                <Slider.Slide>
                    <FaReact size={80} color="#666666" />
                </Slider.Slide>
                <Slider.Slide>
                    <RiNextjsFill size={80} color="#666666" />
                </Slider.Slide>
                <Slider.Slide>
                    <IoLogoJavascript size={80} color="#666666" />
                </Slider.Slide>
                <Slider.Slide>
                    <RiTailwindCssFill size={80} color="#666666" />
                </Slider.Slide>
                <Slider.Slide>
                    <DiMongodb size={80} color="#666666" />
                </Slider.Slide>
            </Slider>
        </div>
    )


}

export default SliderLogos