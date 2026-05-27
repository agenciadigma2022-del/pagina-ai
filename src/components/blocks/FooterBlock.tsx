"use client"

import { Palette } from "@/types"

interface FooterData {
  logo?: string
  tagline: string
  socialLinks: { instagram?: string; whatsapp?: string; facebook?: string }
  showBranding: boolean
}

export function FooterBlock({ data, palette }: { data: FooterData; palette: Palette }) {
  const social = data.socialLinks ?? {}
  const hasSocial = social.instagram || social.whatsapp || social.facebook

  return (
    <footer className="py-10 md:py-12 px-5 sm:px-8 md:px-16" style={{ backgroundColor: palette.primary }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8" style={{ borderBottom: `1px solid rgba(255,255,255,0.1)` }}>
          <div>
            {data.logo ? (
              <img src={data.logo} alt="Logo" className="h-8 mb-3" />
            ) : (
              <div className="text-base font-bold text-white tracking-wide mb-2">
                {data.tagline?.split(" ").slice(0, 2).join(" ")}
              </div>
            )}
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">{data.tagline}</p>
          </div>

          {hasSocial && (
            <div className="flex items-center gap-6">
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = palette.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  Instagram
                </a>
              )}
              {social.whatsapp && (
                <a
                  href={`https://wa.me/55${social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = palette.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  WhatsApp
                </a>
              )}
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = palette.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  Facebook
                </a>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-6">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} · Todos os direitos reservados
          </p>
          {data.showBranding && (
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              Criado com{" "}
              <a href="/" className="hover:underline transition-opacity" style={{ color: palette.accent }}>
                Empreendify
              </a>
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}
