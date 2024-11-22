import SectionCard from "./SectionCard"


const ServicePage = () => {
    return (
        <div className="p-[100px]">
            <div className="flex flex-col gap-10">
                <div className="flex align-middle items-center justify-center flex-col gap-5">
                    <h2 className="font-works font-bold text-4xl text-primary">About Me</h2>
                    <h2 className="font-works font-bold text-4xl text-textsecondary">Why Hire Me ?</h2>
                </div>
                <SectionCard />
            </div>
        </div>
    )
}

export default ServicePage