import React from "react";
import { useGlobal } from "../data/useContext";
import Image from "./Sections/Image";
import { withPrefix } from "gatsby";
import Svg from "./Svg";

const CategoryKeywords = () => {
  const { settings, context, slugData } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "CategoryKeywords"
  );
  const single = slugData?.find(
    (e) => e?.slug === context?.slug && e?.type === "category"
  );
  const list = slugData?.filter(
    (e) => e?.category === context?.slug && e?.type === "keyword"
  );
  // console.log(single);
  return (
    <>
      <section className="relative w-100 h-600 overflow-hidden">
        <Image
          data={{
            src: withPrefix(`/keywords/${list[0]?.slug}-landscape.webp`),
            srcm: withPrefix(`/keywords/${list[0]?.slug}-square-min.webp`),
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
      <section className="bg-white">
        <div className="container cont-space">
          <div className="d-flex text-12 mb-4 gap-2 italic">
            <ul className="d-flex gap-2">
              <li>
                <a href={`/`} className="underline">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>{single?.name}</li>
            </ul>
          </div>
          <h2>{options?.title?.replace("###", single?.name)}</h2>
          {single?.content?.split("###")[0] && (
            <p>{single?.content?.split("###")[0]}</p>
          )}
          {single?.content?.split("###")[1] && (
            <p>{single?.content?.split("###")[1]}</p>
          )}
          <div className="d-grid gap-4 mt-5">
            <div className="box-border p-0">
              <div className="d-flex justify-between items-center gap-3 p-3">
                <div className="d-flex items-center gap-3">
                  <Svg name={single?.slug} width="40px" height="40px" />
                  <h3 className="m-0 pr-3">{single?.name}</h3>
                </div>
              </div>
              <div className="ph-3 mb-3">
                <ul className="d-grid grid-3-1">
                  {list
                    ?.sort((a, b) => b.volume - a.volume)
                    ?.map((h, u) => {
                      return (
                        <li key={u}>
                          <a href={`/${h?.slug}/`} className="pv-1 block">
                            {h?.name}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryKeywords;
