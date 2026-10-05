import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#000000] px-6 py-10 text-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.08),transparent_46%)]" />
        <div className="cyber-grid absolute inset-x-0 bottom-0 h-[58vh] [transform:perspective(900px)_rotateX(68deg)] [transform-origin:center_top] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.2)_75%,transparent_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[44vh] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        <div className="drift absolute left-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#35C9FF] opacity-70" />
        <div className="drift absolute right-[14%] top-[25%] h-1.5 w-1.5 rounded-full bg-[#FF2EA6] opacity-60" />
        <div className="drift absolute bottom-[28%] left-[22%] h-2 w-2 rounded-full bg-[#39FF14] opacity-60" />
        <div className="drift absolute bottom-[22%] right-[20%] h-1.5 w-1.5 rounded-full bg-[#B45CFF] opacity-60" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-5 text-center font-pixel uppercase tracking-[0.22em]">
          <div className="flicker flex items-center justify-center gap-3 leading-[0.9]">
            <span className="text-[clamp(2.35rem,4.5vw,4.55rem)] font-bold text-[#35C9FF] [text-shadow:0_0_10px_rgba(53,201,255,0.95),0_0_24px_rgba(53,201,255,0.65),0_0_40px_rgba(53,201,255,0.35)]">
              AI
            </span>
            <span className="pt-1 text-[clamp(1.15rem,2.1vw,1.85rem)] font-bold text-white [text-shadow:0_0_6px_rgba(255,255,255,0.4)]">
              OR
            </span>
            <span className="text-[clamp(2.35rem,4.5vw,4.55rem)] font-bold text-[#FF2EA6] [text-shadow:0_0_10px_rgba(255,46,166,0.95),0_0_24px_rgba(255,46,166,0.65),0_0_40px_rgba(255,46,166,0.35)]">
              NOT?
            </span>
          </div>

          <div className="mt-3 text-[clamp(1.2rem,2.1vw,1.75rem)] font-bold uppercase leading-[1.1] text-white [text-shadow:0_0_8px_rgba(255,255,255,0.3)]">
            THE GAME
          </div>
        </div>

        <Link
          href="/game"
          className="relative mt-7 flex h-[100px] w-[420px] cursor-pointer items-center justify-center overflow-hidden rounded-[22px] border-[5px] border-[#39FF14] bg-[#050505] text-[44px] font-bold tracking-[2px] text-[#39FF14] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(57,255,20,0.6),0_0_38px_rgba(57,255,20,0.35)] active:scale-[0.97] font-pixel shadow-[0_0_12px_rgba(57,255,20,0.45),0_0_24px_rgba(57,255,20,0.28)] before:pointer-events-none before:absolute before:inset-[2px] before:rounded-[16px] before:bg-[linear-gradient(180deg,rgba(57,255,20,0.16),transparent_45%,rgba(57,255,20,0.04))]"
        >
          <span className="text-[#ff2ea6]">P</span>
          <span className="text-[#35c9ff]">L</span>
          <span className="text-[#ffb300]">A</span>
          <span className="text-[#b45cff]">Y</span>
        </Link>

        <p className="absolute left-1/2 top-full mt-[30px] -translate-x-1/2 whitespace-nowrap font-pixel text-[11px] font-normal not-italic normal-case text-[#9CA3AF]">
          by: <a href="https://www.instagram.com/adriiiief/" target="_blank" rel="noopener noreferrer" className="no-underline">@adriiiief</a>
        </p>
      </div>
    </main>
  );
}
