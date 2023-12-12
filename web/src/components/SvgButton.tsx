"use client";

import {MouseEventHandler, useState} from "react";

export default function SvgButton(
    {onClick, svgPath }: { onClick?: MouseEventHandler<SVGSVGElement> | undefined, svgPath: string }
) {

    let [hovering, setHovering] = useState(false);

    return (
        <svg 
            onMouseOver={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={onClick}
            color={hovering ? "gray" : "white"}
            viewBox="0 0 512 512"
            height={35}
            width={35}
            className="hover:cursor-pointer"
        >
            <path fill="currentColor" d={svgPath} />
        </svg>
    );
}