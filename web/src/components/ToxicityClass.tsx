import { useState, useEffect } from "react";
import { fira } from "../app/layout";

export default function ToxicityClass(props: { label: string; value: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidth(props.value);
    });
  }, [props.value]);

  return (
    <div className="w-full flex mb-4 items-center gap-7">
      <div className="w-[20%]">
        <h3 className={`${fira.className} text-md`}>{props.label}</h3>
      </div>
      <div className="w-[70%] flex justify-end border-gray-800 border-2 rounded-md">
        <div
          style={{
            height: "10px",
            width: `${width}%`,
            backgroundColor: "lightblue",
            transitionProperty: "width",
            transitionDuration: "1s",
            borderRadius: "1rem",
          }}
        ></div>
      </div>
      <div className="w-[10%] text-right">
        <h3 className="text-gray-600">{props.value}%</h3>
      </div>
    </div>
  );
}
