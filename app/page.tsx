import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black px-6 py-10 text-center">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-neon-green/10" />
      <div className="cyber-grid absolute inset-0 opacity-70" />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <h1 className="mb-8 text-glow-neon text-base leading-relaxed text-neon-green sm:text-lg md:text-xl">
          AI or NOT?
          <br />
          THE GAME
        </h1>

        <p className="mt-6 max-w-xs text-[10px] leading-6 text-neutral-400 sm:mt-8 sm:text-xs sm:leading-7">
          Can you tell what was created by AI?
        </p>

        <Link
          href="/game"
          className="animate-pulse-neon mt-10 w-full max-w-xs border-2 border-neon-green bg-black px-8 py-5 text-sm text-neon-green transition-colors hover:bg-neon-green hover:text-black sm:mt-12 sm:py-6 sm:text-base"
        >
          PLAY
        </Link>
      </div>
    </main>
  );
}
