export function LeLoLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img src="/images/logo.png" alt="Bernau Logo" className="w-8 h-8 object-contain" />
      <span className="text-xl font-bold text-foreground">Bernau</span>
    </div>
  )
}
