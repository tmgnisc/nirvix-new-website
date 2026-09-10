import Image from "next/image";

type DeviceMockupProps = {
  /** Path to the 16:10 desktop screenshot. */
  desktopSrc: string;
  /** Path to the 9:19.5 mobile screenshot. */
  mobileSrc: string;
  /** Site name — used to build the alt text for both screenshots. */
  name: string;
  /**
   * Load immediately instead of lazily, for cards above the fold. Next 16 deprecates
   * the `priority` prop, and `preload` is the wrong tool here because a grid has
   * several LCP candidates depending on viewport — so this maps to `loading="eager"`.
   */
  eager?: boolean;
};

/**
 * A laptop with a phone tucked into its bottom-right corner, both showing the live
 * landing page. Purely presentational — the caller supplies the link wrapper.
 */
export function DeviceMockup({ desktopSrc, mobileSrc, name, eager }: DeviceMockupProps) {
  return (
    <div className="relative pb-[7%] pr-[10%]">
      {/* Laptop */}
      <div className="rounded-t-xl border border-b-0 border-neutral-800 bg-neutral-900 p-[0.9%] shadow-[0_18px_40px_-24px_rgba(15,23,42,0.55)]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-white">
          <Image
            src={desktopSrc}
            alt={`${name} website homepage on a laptop screen`}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 33vw"
            className="object-cover object-top"
            loading={eager ? "eager" : "lazy"}
          />
        </div>
      </div>
      {/* Laptop hinge and base */}
      <div className="relative left-1/2 h-[1.6%] w-[112%] -translate-x-1/2 rounded-b-lg bg-gradient-to-b from-neutral-700 to-neutral-900">
        <div className="absolute left-1/2 top-0 h-[35%] w-[14%] -translate-x-1/2 rounded-b-full bg-neutral-800" />
      </div>

      {/* Phone */}
      <div className="absolute bottom-0 right-0 w-[24%]">
        <div className="rounded-[14%/6.5%] border border-neutral-800 bg-neutral-900 p-[3.5%] shadow-[0_14px_30px_-12px_rgba(15,23,42,0.5)]">
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[11%/5%] bg-white">
            <Image
              src={mobileSrc}
              alt={`${name} website on a mobile screen`}
              fill
              sizes="(max-width: 640px) 24vw, 10vw"
              className="object-cover object-top"
              loading={eager ? "eager" : "lazy"}
            />
            {/* Notch */}
            <div className="absolute left-1/2 top-0 h-[3%] w-[38%] -translate-x-1/2 rounded-b-full bg-neutral-900" />
          </div>
        </div>
      </div>
    </div>
  );
}
