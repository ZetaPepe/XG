import { ParticleTextEffect } from "./particle-text-effect"

export function HeroSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="flex-1 flex items-center justify-center">
        <ParticleTextEffect words={["Bernau", "Crypto", "Fan"]} />
      </div>
    </section>
  )
}
