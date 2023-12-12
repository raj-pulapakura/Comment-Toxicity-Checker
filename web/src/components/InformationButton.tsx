"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SvgButton from "./SvgButton";

export default function InformationButton() {
  let [translation, setTranslation] = useState("translateX(100%)");

  const headerStyle = "font-bold text-2xl mb-5";
  const paraMargin = "mb-3";
  const urlStyle = "underline underline-offset-2";

  return (
    <>
    
      {/* Used SVG instead of FontAwesome because the icon would fill up the screen on loading. */}

      <SvgButton onClick={() => setTranslation("translateX(0%)")} svgPath="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />

      <section
        className="absolute top-0 right-0 bg-gray-800 z-20 h-screen w-[500px] p-10 overflow-auto"
        style={{
          transitionProperty: "all",
          transitionDuration: "0.25s",
          transform: translation,
        }}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className="mb-10 hover:cursor-pointer"
          onClick={() => {
            setTranslation("translateX(100%)");
          }}
        />
        <h1 className={headerStyle}>🤔 Purpose</h1>
        <p className={`${paraMargin}`}>
          Classify a sentence based on 6 toxicity levels:
        </p>
        <ul className="ml-10 mb-12 list-disc">
          <li>toxic</li>
          <li>severe toxic</li>
          <li>obscene</li>
          <li>threat</li>
          <li>insult</li>
          <li>identity hate</li>
        </ul>

        <h1 className={headerStyle}>🧠 How does it work?</h1>
        <p className={`${paraMargin}`}>
          The input text is fed into a{" "}
          <a className={urlStyle} href="https://www.tensorflow.org/">
            TensorFlow
          </a>{" "}
          model, which computes the probabilities for the above classes.{" "}
        </p>
        <p className={`${paraMargin}`}>
          The model was trained on a{" "}
          <a
            className={urlStyle}
            href="https://www.kaggle.com/competitions/jigsaw-toxic-comment-classification-challenge/data"
          >
            Kaggle dataset
          </a>{" "}
          for Toxic Comment Classification.
        </p>
        <p className={`${paraMargin}`}>
          I trained the model in a{" "}
          <a
            className={urlStyle}
            href="https://www.kaggle.com/rajpulapakura/comment-toxicity-classification"
          >
            Kaggle notebook
          </a>{" "}
          using Python, and then used the TensorFlowJS Converter to convert it
          into a format which could be used in a web application.
        </p>
        <p className="mb-12">
          If you want to see how the model was trained, check out my{" "}
          <a
            className={urlStyle}
            href="https://www.kaggle.com/rajpulapakura/comment-toxicity-classification"
          >
            Kaggle notebook
          </a>{" "}
          in which I built the model from scratch using TensorFlow.
        </p>

        <h1 className={headerStyle}>
          🤖 Model overview (includes ML terminology)
        </h1>
        <ol className="list-decimal ml-10">
          <li className={`${paraMargin}`}>
            Tokenization: The input sentence is converted into a sequences of
            integers.
          </li>
          <li className={`${paraMargin}`}>
            Embeddings: The model converts the sequence of integers into word
            embeddings, which capture the semantic meaning of the words in the
            sentence.
          </li>
          <li className={`${paraMargin}`}>
            LSTM: The word embeddings are passed through LSTM (Long Short-Term
            Memory) units, which learn the sequential meaning of the sentence.
          </li>
          <li className={`${paraMargin}`}>
            Output: The output from the LSTM is converted into probabilities for
            each target class.
          </li>
        </ol>
        <p>
          Again, if you want to dive deeper into how this model works, feel free
          to check out the Kaggle notebook in which the model was designed.
        </p>
      </section>
    </>
  );
}
