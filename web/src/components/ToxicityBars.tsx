"use client";

import { predict } from "@/helpers";
import { useState, KeyboardEvent } from "react";
import ToxicityClass from "./ToxicityClass";

export default function ToxicityBars() {
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

  let [toxicState, setToxicState] = useState<number>(0);
  let [severeToxicState, setSevereToxicState] = useState<number>(0);
  let [obsceneState, setObsceneState] = useState<number>(0);
  let [threatState, setThreatState] = useState<number>(0);
  let [insultState, setInsultState] = useState<number>(0);
  let [identityState, setIdentityState] = useState<number>(0);

  return (
    <div>
      <input
        autoFocus
        placeholder="Start typing..."
        className="w-full autofocus text-2xl mt-20 mb-3 outline-0 bg-transparent placeholder:text-gray-700"
        onKeyDown={onInputKeyDown}
      />
      <p className="text-gray-700 mb-20">Click Enter to run the checker.</p>
      <ToxicityClass label="toxic" value={toxicState} />
      <ToxicityClass label="severe toxic" value={severeToxicState} />
      <ToxicityClass label="obscene" value={obsceneState} />
      <ToxicityClass label="threat" value={threatState} />
      <ToxicityClass label="insult" value={insultState} />
      <ToxicityClass label="identity hate" value={identityState} />
    </div>
  );
}
