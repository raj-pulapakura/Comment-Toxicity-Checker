import InformationButton from "@/components/InformationButton";
import ToxicityBars from "@/components/ToxicityBars";

export default function Home() {
  return (
    <main>
      <InformationButton />
      <h1 className="font-bold text-3xl text-center mt-20">
        Comment Toxicity Checker
      </h1>
      <p className="text-center mt-3 text-gray-400">By Raj Pulapakura</p>
      <section className="w-full flex flex-col justify-center items-center">
        <div style={{ minWidth: "450px" }} className="w-[70%]">
          <p className="text-lg text-center mt-4 text-gray-400">
            Make the world a kinder place by checking your sentences for
            toxicity.
          </p>
          <ToxicityBars />
        </div>
      </section>
    </main>
  );
}
