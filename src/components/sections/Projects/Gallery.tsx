import GallerData from "../../../json/Gallery.json"

const Gallery = () => {
    return (

        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {GallerData.map((item, index) => {
                    return (
                        <div key={index}>
                            <img className="h-auto max-w-full rounded-lg" src={item.image} alt="" />
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Gallery