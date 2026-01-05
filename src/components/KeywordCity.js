import React from "react";
import { useGlobal } from "../data/useContext";
import Image from "./Sections/Image";
import { withPrefix } from "gatsby";
import { splitParagraph, slugToTitle } from "../data/functions";

const KeywordCity = () => {
  const { settings, context, slugData } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "KeywordCity"
  );
  const single = slugData?.find(
    (e) => e?.slug === context?.slug && e?.type === "keyword"
  );
  const list = slugData?.filter((e) => e?.type === "city");

  const content = single.content.replace("###", single.name.toLowerCase());

  const [first, second] = splitParagraph(content);
  // console.log(single);
  return (
    <>
      <section className="relative w-100 h-600 overflow-hidden">
        <Image
          data={{
            src: withPrefix(`/keywords/${single?.slug}-landscape.webp`),
            srcm: withPrefix(`/keywords/${single?.slug}-square-min.webp`),
            alt: `${options?.imgAlt}`,
            loading: "eager",
            fetchpriority: "high",
            local: true,
            className: "object-cover absolute h-100 w-100",
          }}
        />
        <div className="h-600 absolute w-100 bg-dark opacity-60"></div>
        <div className="d-flex relative flex-col justify-center items-center h-600 w-90 text-center m-c">
          <h1
            className="light p-0 fade-in"
            dangerouslySetInnerHTML={{
              __html: single?.title,
            }}
          />
          <p className="light font-300 mb-5 fade-in delay-500">
            {single?.shortContent}
          </p>

          {/* <label
            htmlFor="request-toggle"
            role="button"
            aria-label="Request a Quote"
            className="btx d-flex items-center gap-2 cursor-link fade-in delay-750"
          >
            Request a Quote
          </label> */}
        </div>
      </section>

      <section className="bg-light">
        <div className="container cont-space">
          <div className="d-flex text-12 mb-4 gap-2 italic">
            <div className="d-flex flex-wrap gap-2">
              <span>
                <a href={`/`} className="underline">
                  Home
                </a>
              </span>
              <span>/</span>
              <span>
                <a href={`/${single?.category}/`} className="underline">
                  {slugToTitle(single?.category)}
                </a>
              </span>
              <span>/</span>
              <span>{single?.name}</span>
            </div>
          </div>
          <h2>{options?.title?.replace("###", single?.name)}</h2>
          {first && <p>{first}</p>}
          {second && <p>{second}</p>}
          <div className="d-flex flex-wrap mt-5 gap-2">
            {list
              ?.sort((a, b) => a.volume - b.volume)
              ?.map((e, i) => {
                if (!settings?.groupedByCity[e?.slug].includes(single?.slug))
                  return null;
                return (
                  <a
                    className="btx-no"
                    key={i}
                    href={`/${single?.slug}/${e?.slug}/`}
                  >
                    {e?.name}
                  </a>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default KeywordCity;
