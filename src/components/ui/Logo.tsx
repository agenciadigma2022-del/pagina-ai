interface LogoProps {
  size?: "sm" | "md" | "lg"
  showTagline?: boolean
}

const sizes = {
  sm: { icon: "w-7 h-7 rounded-[8px]", text: "text-base", tagline: "text-[9px]" },
  md: { icon: "w-9 h-9 rounded-[10px]", text: "text-xl", tagline: "text-[10px]" },
  lg: { icon: "w-11 h-11 rounded-[12px]", text: "text-2xl", tagline: "text-xs" },
}

function EIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Barra vertical */}
      <rect x="4" y="3" width="2.5" height="18" rx="1.25" fill="white"/>
      {/* Barra superior (longa) */}
      <rect x="4" y="3" width="15" height="2.5" rx="1.25" fill="white"/>
      {/* Barra central (curta) */}
      <rect x="4" y="10.75" width="10" height="2.5" rx="1.25" fill="white"/>
      {/* Barra inferior (longa) */}
      <rect x="4" y="18.5" width="15" height="2.5" rx="1.25" fill="white"/>
    </svg>
  )
}

export function Logo({ size = "md", showTagline = false }: LogoProps) {
  const s = sizes[size]

  return (
    <div className="flex items-center gap-2.5">
      {/* Ícone */}
      <div className={`${s.icon} bg-violet-600 flex items-center justify-center shrink-0`}>
        <EIcon className="w-[65%] h-[65%]" />
      </div>

      {/* Texto */}
      <div className="flex flex-col leading-none">
        <span className={`${s.text} font-extrabold tracking-tight`}>
          <span className="text-gray-900">Empreend</span>
          <span className="text-violet-600">ify</span>
        </span>
        {showTagline && (
          <span className={`${s.tagline} text-gray-400 font-medium mt-0.5`}>
            Sua página. Seu negócio.
          </span>
        )}
      </div>
    </div>
  )
}
