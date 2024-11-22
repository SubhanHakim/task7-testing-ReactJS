import React from 'react';

interface ArrowProps {
    left?: boolean;
    onClick: (e: React.MouseEvent<SVGSVGElement>) => void; // Accepts MouseEvent for SVG
    disabled?: boolean;
}

const Arrow: React.FC<ArrowProps> = (props) => {
    const disabled = props.disabled ? "fill-grayText cursor-not-allowed" : "fill-textsecondary cursor-pointer"; // Change fill color and cursor based on disabled state

    return (
        <svg
            onClick={props.disabled ? undefined : props.onClick} // Prevent click if disabled
            className={`w-10 h-10 p-2 border-2 border-primary rounded-full hover:bg-primary transition-all ease-in-out delay-100 hover:scale-110 duration-300 ${disabled} ${props.left ? "left-2" : "right-2"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left ? (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            ) : (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    );
}

export default Arrow;