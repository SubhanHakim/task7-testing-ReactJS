import GallerData from "../../../json/Gallery.json"

const GalleryDetail = () => {
    return (

        <>
            <div className="p-[100px]">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {GallerData.map((item, index) => {
                        return (
                            <div key={index}>
                                <img className="h-auto max-w-full rounded-lg" src={item.image} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default GalleryDetail