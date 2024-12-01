import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-primary" aria-labelledby="footer-heading">
            <div className="flex items-center justify-between px-[100px] py-4">
                <div className="flex gap-4 items-center">
                    <h4 className="text-2xl font-bold text-white">Subhan Hakim</h4>
                    <p className="text-x text-white">&copy; 2024 Subhan Hakim, Inc. All rights reserved.</p>
                </div>
                <div className="flex gap-4 items-center">
                    <h4 className="text-2xl font-bold text-white">Follow Us :</h4>
                    <div className="flex items-center gap-3">
                        <a href="" className="text-2xl text-white" data-testid="facebook-icon">
                            <FaFacebook />
                        </a>
                        <a href="" className="text-2xl text-white" data-testid="github-icon">
                            <BsGithub />
                        </a>
                        <a href="" className="text-2xl text-white" data-testid="linkedin-icon">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;