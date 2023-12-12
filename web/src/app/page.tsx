import IconBar from "@/components/IconBar";
import ToxicityBars from "@/components/ToxicityBars";

export default function Home() {
  return (
    <main>
      <IconBar />
      <h1 className="font-bold text-3xl text-center mt-20">
        Comment Toxicity Checker
      </h1>
      <p className="text-center mt-3 text-gray-400">By Raj Pulapakura</p>
      <section className="w-full flex flex-col justify-center items-center mb-10">
        <div style={{ minWidth: "450px" }} className="w-[70%]">
          <p className="text-sm text-center mt-4 text-gray-400">
            Note: the model is only as good as the data it is trained on. Responses may be unintentionally incorrect or disrespectful.
          </p>
          <ToxicityBars />
        </div>
      </section>
    </main>
  );
}
