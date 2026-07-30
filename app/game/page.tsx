"use client";

import Image from "next/image";
import { Bot, Camera } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function GamePage() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [imageIndex, setImageIndex] = useState(1);
  const [selected, setSelected] = useState<"ai" | "real" | null>(null);

  useEffect(() => {
    const savedBest = window.localStorage.getItem("ai-or-not-best-score");
    if (savedBest) {
      setBestScore(Number(savedBest));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ai-or-not-best-score", String(bestScore));
  }, [bestScore]);

  const totalImages = 10;

  const statusLabel = useMemo(() => {
    if (selected === "ai") {
      return "AI GENERATED";
    }
    if (selected === "real") {
      return "REAL PHOTO";
    }
    return "CHOOSE YOUR CALL";
  }, [selected]);

  const handleGuess = (guess: "ai" | "real") => {
    setSelected(guess);
    const nextScore = score + 1;
    setScore(nextScore);
    setBestScore((current) => Math.max(current, nextScore));
    setImageIndex((current) => (current % totalImages) + 1);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#000000] px-4 py-6 text-center sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.08),transparent_46%)]" />
        <div className="cyber-grid absolute inset-x-0 bottom-0 h-[62vh] opacity-70 [transform:perspective(900px)_rotateX(68deg)] [transform-origin:center_top] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.22)_80%,transparent_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[48vh] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        <div className="drift absolute left-[10%] top-[16%] h-1.5 w-1.5 rounded-full bg-[#35C9FF] opacity-70" />
        <div className="drift absolute right-[13%] top-[24%] h-1.5 w-1.5 rounded-full bg-[#FF2EA6] opacity-60" />
        <div className="drift absolute bottom-[24%] left-[18%] h-2 w-2 rounded-full bg-[#39FF14] opacity-60" />
        <div className="drift absolute bottom-[20%] right-[18%] h-1.5 w-1.5 rounded-full bg-[#B45CFF] opacity-60" />
      </div>

      <section className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-5">
        <div className="flex w-full items-center justify-between rounded-[20px] border border-[#39FF14]/70 bg-black/70 px-4 py-3 shadow-[0_0_18px_rgba(57,255,20,0.2)] backdrop-blur-sm sm:px-6">
          <div className="flex items-center gap-2 text-left">
            <div className="flex flex-col leading-none">
              <span className="font-pixel text-[10px] uppercase tracking-[0.28em] text-[#39FF14]">AI</span>
              <span className="font-pixel text-[10px] uppercase tracking-[0.28em] text-[#39FF14]">OR NOT?</span>
            </div>
            <span className="font-pixel text-[10px] uppercase tracking-[0.28em] text-white/70">THE GAME</span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#39FF14]/40 bg-black/60 px-3 py-1.5">
            <span className="font-pixel text-[10px] uppercase tracking-[0.24em] text-[#39FF14]">Image</span>
            <span className="font-pixel text-[10px] uppercase tracking-[0.24em] text-white">{imageIndex}</span>
            <span className="font-pixel text-[10px] uppercase tracking-[0.24em] text-white/70">/</span>
            <span className="font-pixel text-[10px] uppercase tracking-[0.24em] text-white/70">{totalImages}</span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#39FF14]/40 bg-black/60 px-3 py-1.5">
            <span className="font-pixel text-[10px] uppercase tracking-[0.24em] text-[#39FF14]">Score</span>
            <span className="font-pixel text-[10px] uppercase tracking-[0.24em] text-white">{score}</span>
          </div>
        </div>

        <div className="max-w-2xl text-center">
          <p className="font-pixel text-[11px] uppercase tracking-[0.24em] text-white sm:text-[12px]">
            Guess if the image is AI-generated or real.
          </p>
          <p className="mt-2 font-pixel text-[11px] uppercase tracking-[0.24em] text-white/70 sm:text-[12px]">
            10 images.
          </p>
          <p className="mt-2 font-pixel text-[11px] uppercase tracking-[0.24em] text-[#39FF14] sm:text-[12px]">
            Good luck.
          </p>
        </div>

        <div className="w-full max-w-5xl">
          <div className="image-frame relative overflow-hidden rounded-[24px] border border-[#39FF14]/80 bg-[#050505] p-3 shadow-[0_0_24px_rgba(57,255,20,0.16)]">
            <div className="aspect-video w-full overflow-hidden rounded-[18px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(53,201,255,0.16),transparent_45%),linear-gradient(135deg,rgba(255,46,166,0.12),transparent_35%),#020202]">
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.16),transparent_55%)]" />
                <div className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-[18px]">
                  <Image
                    src="/images/placeholder.png"
                    alt="Placeholder image"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-3xl flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => handleGuess("ai")}
            className="group flex flex-1 items-center justify-center gap-3 rounded-[22px] border-[4px] border-[#ff2ea6]/80 bg-[#12020f] px-5 py-4 text-[18px] font-bold uppercase tracking-[0.18em] text-[#ff2ea6] shadow-[0_0_14px_rgba(255,46,166,0.22)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_0_22px_rgba(255,46,166,0.35)] active:scale-[0.98] font-pixel"
          >
            <Bot className="h-5 w-5" />
            <span>AI GENERATED</span>
          </button>

          <button
            type="button"
            onClick={() => handleGuess("real")}
            className="group flex flex-1 items-center justify-center gap-3 rounded-[22px] border-[4px] border-[#35c9ff]/80 bg-[#07131b] px-5 py-4 text-[18px] font-bold uppercase tracking-[0.18em] text-[#35c9ff] shadow-[0_0_14px_rgba(53,201,255,0.22)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_0_22px_rgba(53,201,255,0.35)] active:scale-[0.98] font-pixel"
          >
            <Camera className="h-5 w-5" />
            <span>REAL PHOTO</span>
          </button>
        </div>
      </section>
    </main>
  );
}
