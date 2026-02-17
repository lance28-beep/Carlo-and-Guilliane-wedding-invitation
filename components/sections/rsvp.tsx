"use client"

import { useRef, useState } from "react"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Heart, CheckCircle, AlertCircle, User, Users, MessageSquare } from "lucide-react"
import { siteConfig } from "@/content/site"
import { Cormorant_Garamond, Cinzel } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

interface RSVPFormProps {
  onSuccess?: () => void
}

export function RSVP({ onSuccess }: RSVPFormProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const guests = formData.get("guests") as string
    const message = formData.get("message") as string

    // Google Forms integration
    const googleFormData = new FormData()
    googleFormData.append("entry.405401269", name)
    googleFormData.append("entry.1335956832", guests)
    googleFormData.append("entry.893740636", message)

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdIVAeJQ3SuqPEShhWeob136H7gpcnxgW4ubpjEMp06MhcGQQ/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: googleFormData,
        }
      )

      formRef.current?.reset()
      if (onSuccess) onSuccess()
      window.dispatchEvent(new Event("rsvpUpdated"))

      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      setIsSubmitting(false)
      setError("Something went wrong. Please try again.")
    }
  }

  return (
    <Section id="rsvp" className="relative py-16 sm:py-24 md:py-36 overflow-hidden">
      {/* Decorative background elements (transparent section) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-[#800A06]/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-20 right-20 w-20 h-20 bg-[#9F8650]/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-[#800A06]/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#9F8650]/8 rounded-full blur-lg animate-pulse" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#800A06]/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9F8650]/20 to-transparent" />
        {/* Corner flowers (same asset, oriented per corner) */}
        {/* Top-right (base) */}
        <img
          src="/decoration/corner_right-top.png"
          alt=""
          aria-hidden="true"
          className="absolute top-0 right-0 w-24 sm:w-40 sm:w-56 md:w-64 lg:w-72 opacity-60 select-none mix-blend-multiply"
        />
        {/* Top-left (mirror horizontally) */}
        <img
          src="/decoration/corner_right-top.png"
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 w-24 sm:w-40 sm:w-56 md:w-64 lg:w-72 opacity-60 select-none transform scale-x-[-1] mix-blend-multiply"
        />
        {/* Bottom-left (rotate 180) */}
        <img
          src="/decoration/corner_right-top.png"
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-24 sm:w-40 sm:w-56 md:w-64 lg:w-72 opacity-60 select-none rotate-180 mix-blend-multiply"
        />
        {/* Bottom-right (rotate 180 + mirror) */}
        <img
          src="/decoration/corner_right-top.png"
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-24 sm:w-40 sm:w-56 md:w-64 lg:w-72 opacity-60 select-none transform rotate-180 scale-x-[-1] mix-blend-multiply"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className={`${cinzel.className} text-xl sm:text-4xl md:text-7xl lg:text-8xl font-normal text-white mb-4 md:mb-6 text-balance drop-shadow-sm relative overflow-visible uppercase tracking-widest`}>
            <span className="relative z-10">RSVP</span>
            <span className="absolute -inset-x-3 -inset-y-4 text-white/5 blur-[8px] -z-10 select-none pointer-events-none">RSVP</span>
          </h2>
          {/* Decorative divider under title */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-2 md:mb-4">
            <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent via-[#800A06]/60 to-[#9F8650]/30" />
            <div className="w-2 h-2 rounded-full bg-[#800A06]" />
            <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent via-[#800A06]/60 to-[#9F8650]/30" />
          </div>

          {/* Elegant Card */}
          <div className="max-w-3xl mx-auto px-2 sm:px-4">
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#800A06]/5 via-[#9F8650]/10 to-[#F9F8F4]/5 rounded-2xl blur-xl -z-10"></div>
              
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-10 md:p-12 border border-[#800A06]/20 shadow-xl">
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
  
                  <h3 className={`${cinzel.className} text-base sm:text-3xl md:text-4xl font-bold text-[#800A06] uppercase tracking-wide`}>
                    We Reserved Seats for You
                  </h3>
                </div>
                
                <p className={`${cormorant.className} text-sm sm:text-lg md:text-xl text-[#800A06]/80 font-light leading-relaxed`}>
                  The favor of your reply is kindly requested on or before{" "}
                  <span className="font-semibold text-[#800A06] bg-[#800A06]/5 px-2 py-1 rounded-lg text-sm md:text-base border border-[#800A06]/10">
                    {siteConfig.details.rsvp.deadline}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Form */}
        <div className="max-w-2xl mx-auto px-2 sm:px-4">
          <div className="relative">
            {/* Form Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/90 rounded-3xl blur-sm -z-10"></div>
            
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-[#800A06]/20">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 sm:space-y-9">
                {/* Full Name Field */}
                <div className="space-y-1 sm:space-y-3">
                  <label className={`${cormorant.className} flex items-center gap-2 text-xs sm:text-lg font-semibold text-[#800A06]`}>
                    <User className="h-4 w-4 sm:h-5 sm:w-5" />
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className={`${cormorant.className} w-full px-3 sm:px-6 py-2 sm:py-4 border border-[#800A06]/20 focus:border-[#800A06] rounded-lg sm:rounded-xl text-base sm:text-xl placeholder:text-[#800A06]/30 transition-all duration-300 hover:border-[#800A06]/40 focus:ring-4 focus:ring-[#800A06]/5 bg-white/80 backdrop-blur-sm outline-none`}
                    />
                  </div>
                </div>

                {/* Number of Guests Field */}
                <div className="space-y-1.5 sm:space-y-3.5">
                  <label className={`${cormorant.className} flex items-center gap-2 text-xs sm:text-lg font-semibold text-[#800A06]`}>
                    <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                    Number of Guests *
                  </label>
                  <div className="relative">
                    <select
                      name="guests"
                      required
                      className={`${cormorant.className} w-full px-3 sm:px-6 py-2.5 sm:py-4 border border-[#800A06]/20 focus:border-[#800A06] rounded-lg sm:rounded-xl text-base sm:text-xl bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-[#800A06]/40 focus:ring-4 focus:ring-[#800A06]/5 cursor-pointer appearance-none text-[#800A06] outline-none`}
                    >
                      <option value="">Select number of guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5 sm:space-y-3.5">
                  <label className={`${cormorant.className} flex items-center gap-2 text-xs sm:text-lg font-semibold text-[#800A06]`}>
                    <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                    Message (Optional)
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Any special requests or dietary restrictions?"
                      rows={3}
                      className={`${cormorant.className} w-full px-3 sm:px-6 py-2.5 sm:py-4 border border-[#800A06]/20 focus:border-[#800A06] rounded-lg sm:rounded-xl min-h-[100px] sm:min-h-[160px] text-base sm:text-xl placeholder:text-[#800A06]/30 transition-all duration-300 hover:border-[#800A06]/40 focus:ring-4 focus:ring-[#800A06]/5 resize-none bg-white/80 backdrop-blur-sm outline-none`}
                    />
                  </div>
                </div>

                {/* Enhanced Submit Button */}
                <div className="pt-3 sm:pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-[#800A06] to-[#9B4719] hover:from-[#9B4719] hover:to-[#800A06] text-white border-none px-6 sm:px-10 py-3 sm:py-5 rounded-lg sm:rounded-xl text-sm sm:text-xl ${cinzel.className} font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden tracking-wider`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2 sm:gap-3 relative z-10">
                        <svg className="animate-spin h-4 w-4 sm:h-6 sm:w-6" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span className="text-sm sm:text-base">Sending Your RSVP...</span>
                      </span>
                    ) : (
                      <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                        <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="text-sm sm:text-base">Submit RSVP</span>
                      </span>
                    )}
                  </Button>
                </div>

                {/* Enhanced Status Messages */}
                {isSubmitted && (
                  <div className="text-center mt-4 sm:mt-6 p-3 sm:p-6 bg-green-50/80 border border-green-200 rounded-lg sm:rounded-xl backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="bg-green-100 p-1 sm:p-2 rounded-full">
                        <CheckCircle className="text-green-700" size={16} />
                      </div>
                      <span className={`text-green-800 ${cinzel.className} font-bold text-sm sm:text-xl`}>RSVP Sent!</span>
                    </div>
                    <p className={`text-green-700 ${cormorant.className} text-xs sm:text-lg`}>
                      Thank you for your RSVP! We look forward to celebrating with you. 💕
                    </p>
                  </div>
                )}

                {error && (
                  <div className="text-center mt-4 sm:mt-6 p-3 sm:p-6 bg-red-50/80 border border-red-200 rounded-lg sm:rounded-xl backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="bg-red-100 p-1 sm:p-2 rounded-full">
                        <AlertCircle className="text-red-700" size={16} />
                      </div>
                      <span className={`text-red-800 ${cinzel.className} font-bold text-sm sm:text-xl`}>Error</span>
                    </div>
                    <p className={`text-red-700 ${cormorant.className} text-xs sm:text-lg`}>{error}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

      </div>
    </Section>
  )
}
