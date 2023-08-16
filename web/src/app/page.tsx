"use client";

import { KeyboardEvent, useState } from "react";
import { predict } from "./helpers";
import ToxicityClass from "./components/ToxicityClass";

export default function Home() {
  let [toxicState, setToxicState] = useState<number>(0);
  let [severeToxicState, setSevereToxicState] = useState<number>(0);
  let [obsceneState, setObsceneState] = useState<number>(0);
  let [threatState, setThreatState] = useState<number>(0);
  let [insultState, setInsultState] = useState<number>(0);
  let [identityState, setIdentityState] = useState<number>(0);

  function onInputKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      predict(e.currentTarget.value).then((predictions) => {
        // convert predictions from range [0, 1] to range [0, 100]
        predictions = predictions.map((rawPred) => Math.round(rawPred * 100));
        // update states for predictions
        setToxicState(predictions[0]);
        setSevereToxicState(predictions[1]);
        setObsceneState(predictions[2]);
        setThreatState(predictions[3]);
        setInsultState(predictions[4]);
        setIdentityState(predictions[5]);
      });
    }
  }

  return (
    <main>
      <h1 className="font-bold text-3xl text-center mt-20">
        Comment Toxicity Checker
      </h1>
      <div className="w-full flex flex-col justify-center items-center">
        <div style={{ minWidth: "450px" }} className="w-[60%]">
          <p className="text-lg text-center mt-4 text-gray-400">
            Make the world a kinder place by checking your sentences for
            toxicity.
          </p>
          <input
            autoFocus
            placeholder="Start typing..."
            className="w-full autofocus text-2xl my-20 outline-0 bg-transparent placeholder:text-gray-700"
            onKeyDown={onInputKeyDown}
          />
          <ToxicityClass label="toxic" value={toxicState} />
          <ToxicityClass label="severe toxic" value={severeToxicState} />
          <ToxicityClass label="obscene" value={obsceneState} />
          <ToxicityClass label="threat" value={threatState} />
          <ToxicityClass label="insult" value={insultState} />
          <ToxicityClass label="identity hate" value={identityState} />
        </div>
      </div>
    </main>
  );
}
