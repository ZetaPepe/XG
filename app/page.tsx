import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TradingViewSection } from "@/components/trading-view-section"
import { CryptoLogosSection } from "@/components/crypto-logos-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-full">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <TradingViewSection />
        <CryptoLogosSection />
      </main>
      <Footer />
    </div>
  )
}
