import React from "react";
import { useGlobal } from "../data/useContext";
import Image from "./Sections/Image";
import { withPrefix } from "gatsby";

const Hero = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Hero"
  );

  return (
    <section className="relative w-100 h-600 overflow-hidden">
      {/* <div className="container cont-space"> */}
      {/* ==== VIDEO BACKGROUND (DESKTOP) ==== */}
      {options?.videoMp4 && (
        <video
          className="absolute w-100 h-100 object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src={withPrefix(`/${options.videoMp4}`)}
        />
      )}

      {/* ==== FALLBACK IMAGE FOR MOBILE / NO VIDEO ==== */}
      {!options?.videoMp4 && (
        <Image
          data={{
            src: withPrefix(`/${options?.imgDesktop}`),
            srcm: withPrefix(`/${options?.imgMobile}`),
            alt: `${options?.imgAlt}`,
            loading: "eager",
            fetchpriority: "high",
            local: true,
            className: "object-cover absolute h-100 w-100",
          }}
        />
      )}

      {/* DARK OVERLAY */}
      <div className="h-600 absolute w-100 bg-dark opacity-60"></div>

      {/* CONTENT */}
      <div className="d-flex relative flex-col justify-center items-center h-600 w-80 text-center m-c">
        <h1
          className="light fade-in delay-500"
          dangerouslySetInnerHTML={{
            __html: options?.title,
          }}
        />
        <p className="light font-300 mb-5 fade-in delay-750">
          {options?.shortContent}
        </p>

        {options?.displayButton && (
          <a
            className="btx d-flex items-center gap-2 fade-in delay-1000"
            href={options?.buttonTextLink}
            aria-label={options?.buttonText}
          >
            {options?.buttonText}
            {/* <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="#ffffff"
            >
              <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
            </svg> */}
          </a>
        )}
      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;
