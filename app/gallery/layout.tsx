"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Hide the global navbar while on /gallery
    const navbar = document.querySelector("nav") as HTMLElement | null
    if (navbar) navbar.style.display = "none"
    return () => {
      if (navbar) navbar.style.display = ""
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#EFD2AA]">
      {/* Simple top bar with only Back link */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-[#EFD2AA]/95 border-b border-[#800A06]/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-12 sm:h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-[#EFD2AA] font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-2 border-[#800A06] bg-[#800A06] hover:bg-[#671107] hover:border-[#671107] transition-all duration-200 font-sans text-sm sm:text-base"
          >
            <span className="text-base sm:text-lg text-[#EFD2AA]">←</span>
            <span className="hidden xs:inline text-[#EFD2AA]">Back to main page</span>
            <span className="xs:hidden text-[#EFD2AA]">Back</span>
          </Link>
          <div className="text-xs sm:text-sm text-[#800A06] font-sans font-medium">Gallery</div>
        </div>
      </div>
      {children}
    </div>
  )
}






