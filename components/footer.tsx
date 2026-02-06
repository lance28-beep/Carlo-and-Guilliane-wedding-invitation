import { siteConfig } from "@/content/site"

export function Footer() {
  return (
    <footer className="mt-20 bg-[#EFD2AA] border-t border-[#800A06]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg sm:text-xl text-[#800A06] mb-1">
              {siteConfig.couple.bride} &amp; {siteConfig.couple.groom}
            </h3>
            <p className="text-sm text-[#800A06]/80">{siteConfig.wedding.date}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base text-[#800A06] mb-1">Ceremony</h4>
            <p className="text-sm text-[#800A06]/80">{siteConfig.ceremony.location}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base text-[#800A06] mb-1">Reception</h4>
            <p className="text-sm text-[#800A06]/80">{siteConfig.reception.location}</p>
          </div>
        </div>
        <div className="border-t border-[#800A06]/30 mt-8 pt-6 text-center text-xs sm:text-sm text-[#800A06]/80">
          <p>With love and gratitude • {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
