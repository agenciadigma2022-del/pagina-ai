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

  return (
    <footer className="py-10 px-6 text-center" style={{ backgroundColor: palette.primary }}>
      <div className="max-w-xl mx-auto">
        {data.logo ? (
          <img src={data.logo} alt="Logo" className="h-10 mx-auto mb-3" />
        ) : (
          <div className="text-xl font-bold text-white mb-2">Sua Logo</div>
        )}
        <p className="text-sm text-white opacity-60 mb-6">{data.tagline}</p>
        <div className="flex justify-center gap-6 mb-6">
          {social.instagram && (
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 text-sm">Instagram</a>
          )}
          {social.whatsapp && (
            <a href={`https://wa.me/55${social.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 text-sm">WhatsApp</a>
          )}
          {social.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="text-white opacity-70 hover:opacity-100 text-sm">Facebook</a>
          )}
        </div>
        {data.showBranding && (
          <p className="text-xs text-white opacity-40">
            Criado com <a href="/" className="underline">Págin.ai</a>
          </p>
        )}
      </div>
    </footer>
  )
}
