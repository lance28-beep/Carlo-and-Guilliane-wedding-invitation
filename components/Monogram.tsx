import React from "react"

type MonogramProps = {
  /**
   * Defaults to the project's monogram asset in /public.
   * You can override this if you ever swap assets.
   */
  src?: string
  /**
   * Accessible label for screen readers.
   * (We render the monogram as a CSS mask, so there is no real <img alt="...">.)
   */
  label?: string
  /**
   * Tailwind / className for sizing and extra styling.
   * Make sure width & height are set by the parent or via this className.
   */
  className?: string
}

/**
 * Monogram rendered as a solid color using CSS mask.
 * This guarantees the displayed monogram color is exactly #800A06.
 */
export function Monogram({
  src = "/monogram/monogram.png",
  label = "Monogram",
  className = "",
}: MonogramProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`bg-[#800A06] ${className}`.trim()}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  )
}

