"use client"

import { InfiniteSlider } from "./ui/infinite-slider"
import { ProgressiveBlur } from "./ui/progressive-blur"
import { useEffect, useState } from "react"

export function CryptoLogosSection() {
  const [gap, setGap] = useState(16)

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.outerWidth <= 768 || window.innerWidth <= 768
      console.log("Device width:", window.innerWidth, "Is Mobile:", isMobile)
      setGap(isMobile ? 16 : 80)  // 根据屏幕大小设置不同的 gap
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="group relative m-auto max-w-6xl">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:border-gray-600 md:pr-6 mb-4 md:mb-0">
              <p className="text-end text-sm text-gray-400">Powering the best teams</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider durationOnHover={10} duration={15} gap={gap}>
                <div className="flex">
                  <img
                    className="mx-auto h-8 w-8 opacity-60 hover:opacity-100 transition-opacity"
                    src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg"
                    alt="Bitcoin Logo"
                    height="32"
                    width="auto"
                  />
                </div>

                <div className="flex">
                  <img
                    className="mx-auto h-8 w-8 opacity-60 hover:opacity-100 transition-opacity"
                    src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"
                    alt="Ethereum Logo"
                    height="32"
                    width="auto"
                  />
                </div>

                <div className="flex">
                  <img
                    className="mx-auto h-8 w-8 opacity-60 hover:opacity-100 transition-opacity"
                    src="https://cryptologos.cc/logos/solana-sol-logo.svg"
                    alt="Solana Logo"
                    height="32"
                    width="auto"
                  />
                </div>

                <div className="flex">
                  <img
                    className="mx-auto h-8 w-8 opacity-60 hover:opacity-100 transition-opacity"
                    src="https://cryptologos.cc/logos/bnb-bnb-logo.svg"
                    alt="BNB Logo"
                    height="32"
                    width="auto"
                  />
                </div>

                <div className="flex">
                  <img
                    className="mx-auto h-8 w-8 opacity-60 hover:opacity-100 transition-opacity"
                    src="https://cryptologos.cc/logos/cardano-ada-logo.svg"
                    alt="Cardano Logo"
                    height="32"
                    width="auto"
                  />
                </div>

                <div className="flex">
                  <img
                    className="mx-auto h-8 w-8 opacity-60 hover:opacity-100 transition-opacity"
                    src="https://cryptologos.cc/logos/polkadot-new-dot-logo.svg"
                    alt="Polkadot Logo"
                    height="32"
                    width="auto"
                  />
                </div>

                <div className="flex">
                  <img
                    className="mx-auto h-8 w-8 opacity-60 hover:opacity-100 transition-opacity"
                    src="https://cryptologos.cc/logos/avalanche-avax-logo.svg"
                    alt="Avalanche Logo"
                    height="32"
                    width="auto"
                  />
                </div>
              </InfiniteSlider>

              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
