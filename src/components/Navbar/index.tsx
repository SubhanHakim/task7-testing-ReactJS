import { NavLink } from "react-router-dom"
import Button from "../Button"

const Navbar = () => {
    return (
        <nav className="bg-white py-8 px-[100px] drop-shadow-md">
            <div className="flex justify-between items-center align-middle">
                <NavLink to={"/"} className={"text-2xl font-bold text-textBlack font-zen"}>Subhan Hakim</NavLink>
                <div className="flex gap-10 font-works font-semibold ">
                    <NavLink to={"/"} className={"text-lg font-semibold text-textsecondary"}>Home</NavLink>
                    <NavLink to={"/about"} className={"text-lg font-semibold text-textsecondary"}>About Me</NavLink>
                    <NavLink to={"/gallery"} className={"text-lg font-semibold text-textsecondary"}>Gallery</NavLink>
                    <NavLink to={"/contact"} className={"text-lg font-semibold text-textsecondary"}>Contact Me</NavLink>
                </div>
                <div>
                    <Button title="Let's Chat" type="button" variant="primary" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar