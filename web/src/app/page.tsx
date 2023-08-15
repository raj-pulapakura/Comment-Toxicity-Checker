"use client";

import { useEffect } from "react";
import { predict } from "./helpers";

export default function Home() {
  useEffect(() => {
    predict("You are amazing.").then((res) => console.log(res));
  }, []);

  return (
    <section>
      <h1>Have a thought-provoking comment to share on Twitter?</h1>
      <p>
        Let's check it for toxicity first. Trust me, it's better for everyone.
      </p>
      <input />
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
    </section>
  );
}
