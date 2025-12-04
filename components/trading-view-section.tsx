"use client"

import { useEffect, useRef } from "react"

export function TradingViewSection() {
  const btcContainerRef = useRef<HTMLDivElement>(null)
  const ethContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load TradingView widget script
    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/tv.js"
    script.async = true
    script.onload = () => {
      // Initialize BTC widget
      if (btcContainerRef.current && (window as any).TradingView) {
        ;new (window as any).TradingView.widget({
          container_id: "tradingview_btc",
          autosize: true,
          symbol: "BINANCE:BTCUSDT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_legend: false,
          save_image: false,
          backgroundColor: "rgba(0, 0, 0, 0)",
          gridColor: "rgba(255, 255, 255, 0.06)",
        })
      }

      // Initialize ETH widget
      if (ethContainerRef.current && (window as any).TradingView) {
        ;new (window as any).TradingView.widget({
          container_id: "tradingview_eth",
          autosize: true,
          symbol: "BINANCE:ETHUSDT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_legend: false,
          save_image: false,
          backgroundColor: "rgba(0, 0, 0, 0)",
          gridColor: "rgba(255, 255, 255, 0.06)",
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="pt-0 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Live Crypto Charts</h2>
          <p className="text-muted-foreground text-lg">Real-time price movements for Bitcoin and Ethereum</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* BTC Chart */}
          <div className="rounded-lg overflow-hidden border border-border bg-card">
            <div className="p-4 border-b border-border">
              <h3 className="text-xl font-semibold">Bitcoin (BTC)</h3>
            </div>
            <div id="tradingview_btc" ref={btcContainerRef} className="h-[500px]" />
          </div>

          {/* ETH Chart */}
          <div className="rounded-lg overflow-hidden border border-border bg-card">
            <div className="p-4 border-b border-border">
              <h3 className="text-xl font-semibold">Ethereum (ETH)</h3>
            </div>
            <div id="tradingview_eth" ref={ethContainerRef} className="h-[500px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
