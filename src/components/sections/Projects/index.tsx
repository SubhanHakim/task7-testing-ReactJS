import GalleryDetail from "./Gallery"

const SectionProjects = () => {
    return (
        <>
            <div className="p-[100px]">
                <div className="flex flex-col gap-10">
                    <div className="flex align-middle items-center justify-center flex-col gap-5">
                        <h2 className="font-works font-bold text-4xl text-primary">Our Projects</h2>
                        <h2 className="font-works font-bold text-4xl text-textsecondary">Presenting My Design Portfolio and Case Studies</h2>
                    </div>

                    <div>
                        <GalleryDetail />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionProjects