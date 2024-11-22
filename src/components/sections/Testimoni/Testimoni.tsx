import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import testi from "../../../json/testimoni.json"
import Arrow from "../../Arrows";

const TestimoniCard = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        }
    });

    const handleLeftClick = (e: React.MouseEvent<SVGSVGElement>) => {
        e.stopPropagation();
        instanceRef.current?.prev(); // Navigate to the previous slide
    };

    const handleRightClick = (e: React.MouseEvent<SVGSVGElement>) => {
        e.stopPropagation();
        instanceRef.current?.next(); // Navigate to the next slide
    };

    return (
        <>
            <div className="relative grid grid-cols-1 gap-4">
                {loaded && instanceRef.current && (
                    <>
                        <div className="flex justify-end gap-10">
                            <Arrow
                                left
                                onClick={handleLeftClick}
                                disabled={currentSlide === 0} 
                            />
                            <Arrow
                                onClick={handleRightClick}
                                disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                            />
                        </div>
                    </>
                )}
                <div ref={sliderRef} className="keen-slider">
                    {testi.map((testi, index) => (
                        <div key={index} className="keen-slider__slide border-solid border-2 border-primary rounded-lg p-10">
                            <div className="flex justify-center flex-col items-center gap-10">
                                <h1 className="font-works text-2xl font-normal text-textsecondary text-center">"{testi.comment}"</h1>
                                <div className="flex gap-5 items-center justify-center">
                                    <div className="w-[50px] h-[50px]">
                                        <img src={testi.image} alt={testi.name} className="rounded-full" />
                                    </div>
                                    <div className="">
                                        <h3 className="font-works text-lg font-semibold text-textsecondary">{testi.name}</h3>
                                        <p className="font-works text-sm font-normal text-grayText">{testi.job}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Dots for navigation */}
            {loaded && instanceRef.current && (
                <div className="flex py-2 justify-center items-center gap-2">
                    {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx);
                                }}
                                className={`border-none w-[10px] h-[10px] rounded-[50%] cursor-pointer focus:outline-none ${currentSlide === idx ? "bg-primary" : "bg-slate-400"}`}
                            ></button>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default TestimoniCard;