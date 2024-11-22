import Organisasi from "../../../assets/img/organisasi.jpg"

const DetailAbout = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-10">
                <div className="bg-white shadow hover:shadow-xl transition-all ease-in-out rounded-md p-10 flex flex-col justify-between">
                    <div className="flex flex-col gap-5">
                        <h4 className="text-2xl font-bold text-primary font-works">How it Started</h4>
                        <h1 className="text-textsecondary font-works font-bold text-4xl">Future Software Engineer, Driven by Code and Creativity!</h1>
                    </div>
                    <div>
                        <p className="font-works text-grayText font-normal text-base">Hi, I’m Subhan Hakim, a university student at Universitas Siliwangi, currently pursuing my passion for technology through the Kampus Merdeka program at ProductZilla Academy. This opportunity has allowed me to delve deeper into Software Engineering while gaining valuable hands-on experience.<br />I’m a curious learner and a dedicated team player with a growing interest in solving real-world problems through technology. Though my professional experience is still in its early stages, I’ve had the opportunity to work on several government projects, which have taught me the importance of precision, reliability, and impact in delivering solutions.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="max-w-full h-[456px] bg-gray-100 relative rounded-lg">
                        <img src={Organisasi} alt="" className="object-cover rounded-lg h-full w-full max-w-full max-h-full" />
                    </div>
                    <div className="bg-white shadow hover:shadow-xl transition-all ease-in-out rounded-md p-10 flex flex-col gap-4 justify-between">
                        <div className="flex justify-between gap-4 ">
                            <div className="bg-[#FAFAFA] w-full p-4 rounded-lg">
                                <h2 className="font-works font-bold text-4xl text-textBlack">1</h2>
                                <span className="font-works font-normal text-2xl text-textsecondary">Years Experience</span>
                            </div>
                            <div className="bg-[#FAFAFA] w-full p-4 rounded-lg">
                                <h2 className="font-works font-bold text-4xl text-textBlack">15+</h2>
                                <span className="font-works font-normal text-2xl text-textsecondary">Project</span>
                            </div>
                        </div>
                        <div className="flex justify-between gap-2 ">
                            <div className="bg-[#FAFAFA] w-full p-4 rounded-lg">
                                <h2 className="font-works font-bold text-4xl text-textBlack">3</h2>
                                <span className="font-works font-normal text-2xl text-textsecondary">Years Experience</span>
                            </div>
                            <div className="bg-[#FAFAFA] w-full p-4 rounded-lg">
                                <h2 className="font-works font-bold text-4xl text-textBlack">1</h2>
                                <span className="font-works font-normal text-2xl text-textsecondary">Years Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailAbout