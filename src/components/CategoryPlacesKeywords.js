import React from "react";
import { useGlobal } from "../data/useContext";
import Image from "./Sections/Image";
import { withPrefix } from "gatsby";
import Svg from "./Svg";

const CategoryPlacesKeywords = () => {
  const { settings, context, slugData } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "CategoryPlacesKeywords"
  );
  const category = slugData?.find(
    (e) => e?.slug === context?.category && e?.type === "category"
  );
  const city = slugData?.find(
    (e) => e?.slug === context?.city && e?.type === "city"
  );
  const keywords = slugData?.filter(
    (e) => e?.category === context?.category && e?.type === "keyword"
  );
  // console.log(settings, context?.type);
  const optionsCategoryPlace = (settings[context?.type] || [])?.find(
    (e) => e?.id === "CategoryPlace"
  );
  // console.log(optionsCategoryPlace);
  const type = context?.type || "index";
  const slug = context?.slug || "/";
  const categoryPlaceData = {};

  if (type === "categoryPlace") {
    categoryPlaceData.city = slugData?.find((e) => e?.slug === context?.city);
    categoryPlaceData.category = slugData?.find(
      (e) => e?.slug === context?.category
    );
    categoryPlaceData.title = optionsCategoryPlace?.titleHero
      ?.replace("###", categoryPlaceData?.category?.name)
      ?.replace("##", categoryPlaceData?.city?.name);
    categoryPlaceData.subTitle = optionsCategoryPlace?.subtitleHero
      ?.replace("###", categoryPlaceData?.category?.name)
      ?.replace("##", categoryPlaceData?.city?.name);
  }
  // console.log(categoryPlaceData);
  return (
    <>
      <section className="relative w-100 h-600 overflow-hidden">
        <Image
          data={{
            src: withPrefix(`/cities/${city?.slug}-landscape.webp`),
            srcm: withPrefix(`/cities/${city?.slug}-square-min.webp`),
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
              __html: categoryPlaceData?.title,
            }}
          />
          <p className="light font-300 mb-5 fade-in delay-500">
            {categoryPlaceData?.subTitle}
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
              <li>
                <a href={`/${category?.slug}/`} className="underline">
                  {category?.name}
                </a>
              </li>
              <li>/</li>
              <li>{city?.name}</li>
            </ul>
          </div>
          <h2>
            {options?.title
              ?.replace("###", category?.name)
              ?.replace("##", city?.name)}
          </h2>
          <p>
            {options?.shortDescription
              ?.replace("###", category?.name?.toLowerCase())
              ?.replace("##", city?.name)}
          </p>
          <div className="d-grid gap-4 mt-5">
            <div className="box-border p-0">
              <div className="d-flex justify-between items-center gap-3 p-3">
                <div className="d-flex items-center gap-3">
                  <Svg name={category?.slug} width="40px" height="40px" />
                  <h3 className="m-0 pr-3">{category?.name}</h3>
                </div>
              </div>
              <div className="ph-3 mb-3">
                <ul className="d-grid grid-3-1">
                  {keywords
                    ?.sort((a, b) => b.volume - a.volume)
                    ?.map((h, u) => {
                      if (
                        !settings?.groupedByCity[city?.slug].includes(h?.slug)
                      )
                        return null;
                      return (
                        <li key={u}>
                          <a
                            href={`/${h?.slug}/${city?.slug}/`}
                            className="pv-1 block"
                          >
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

export default CategoryPlacesKeywords;
