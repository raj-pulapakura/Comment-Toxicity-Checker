"use client";

import { useEffect } from "react";
import { predict } from "./helpers";

function ToxicityClass(props: { label: string; value: number }) {
  return (
    <div>
      <h3>{props.label}</h3>
    </div>
  );
}

export default function Home() {
  // useEffect(() => {
  //   predict("You are amazing.").then((res) => console.log(res));
  // }, []);

  return (
    <main>
      <h1 className="font-bold text-3xl text-center mt-20">
        👍👎 Comment Toxicity Checker
      </h1>
      <div className="bg-gray-900 w-full flex flex-col justify-center items-center">
        <div className="bg-gray-800 w-1/2">
          <p className="text-lg text-center mt-4 text-gray-400">
            Make the world a kinder place by checking your sentences and
            comments for toxicity.
          </p>
          <input
            autoFocus
            placeholder="Start typing..."
            className="autofocus text-2xl my-20 w-1/2 outline-0 bg-transparent placeholder:text-gray-700"
          />
          <div>
            <h3>toxic</h3>
            <div></div>
          </div>
          <div>
            <h3>severe toxic</h3>
            <div></div>
          </div>
          <div>
            <h3>obscene</h3>
            <div></div>
          </div>
          <div>
            <h3>threat</h3>
            <div></div>
          </div>
          <div>
            <h3>insult</h3>
            <div></div>
          </div>
          <div>
            <h3>identity hate</h3>
            <div></div>
          </div>
        </div>
      </div>
    </main>
  );
}
