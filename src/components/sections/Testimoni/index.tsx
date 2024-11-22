import TestimoniCard from "./Testimoni"



const Testimoni = () => {
    return (
        <>
            <section className="p-[100px]">
                <div className="flex flex-col gap-10">
                    <div className="flex align-middle items-center justify-center flex-col gap-5">
                        <h2 className="font-works font-bold text-4xl text-primary">Testimonials</h2>
                        <h2 className="font-works font-bold text-4xl text-textsecondary">The Trust From Clients</h2>
                    </div>

                    <div>
                        <TestimoniCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimoni