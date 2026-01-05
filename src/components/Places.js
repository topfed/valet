import React from "react";
import { useGlobal } from "../data/useContext";
import {
  productDescription,
  formatUpdatedDate,
  facebookImage,
} from "../data/functions";
import Image from "./Sections/Image";
import { withPrefix } from "gatsby";
import Svg from "./Svg";

const Places = () => {
  const { settings, context, slugData } = useGlobal();
  const option = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Places"
  );
  const keyword = slugData?.find(
    (e) => e?.slug === context?.keyword && e?.type === `keyword`
  );
  const city = slugData?.find(
    (e) => e?.slug === context?.city && e?.type === `city`
  );
  const category = slugData?.find(
    (e) => e?.slug === keyword?.category && e?.type === `category`
  );
  const searchWord = `${keyword?.slug?.replace("-", "+")}+${city?.slug}+uk`;

  const optionsPlace = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Places"
  );

  const type = context?.type || "index";
  const placeData = {};
  const categoryPlaceData = {};

  if (type === "place") {
    placeData.keyword = slugData?.find((e) => e?.slug === context?.keyword);
    placeData.city = slugData?.find((e) => e?.slug === context?.city);
    placeData.category = slugData?.find(
      (e) => e?.slug === placeData?.keyword?.category
    );
    placeData.title = optionsPlace?.titleHero
      ?.replace("###", placeData?.keyword?.name)
      ?.replace("##", placeData?.city?.name);
  }

  // console.log(context);

  return (
    <>
      <section className="relative w-100 h-600 overflow-hidden">
        <Image
          data={{
            src: withPrefix(`/keywords/${keyword?.slug}-landscape.webp`),
            srcm: withPrefix(`/keywords/${keyword?.slug}-square-min.webp`),
            alt: `${option?.imgAlt}`,
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
              __html: placeData?.title,
            }}
          />
          {/* <label
            htmlFor="request-toggle"
            role="button"
            aria-label="Request a Quote"
            className="btx d-flex items-center gap-2 cursor-link mt-1 fade-in delay-500"
          >
            Request a Quote
          </label> */}
          <div className="italic mt-2 text-white text-14 fade-in">
            {formatUpdatedDate(context?.update)}
          </div>
        </div>
      </section>

      <section className="bg-white2">
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
                <a href={`/${category?.slug}/`} className="underline">
                  {category?.name}
                </a>
              </span>
              <span>/</span>
              <span>
                <a href={`/${city?.slug}/`} className="underline">
                  {city?.name}
                </a>
              </span>
              <span>/</span>
              <span>{keyword?.name}</span>
            </div>
          </div>
          <h2>
            {option?.title
              ?.replace("###", keyword?.name)
              ?.replace("##", context?.places?.length)}
          </h2>
          <div className="d-flex items-center mt-4 mb-2 icon">
            <a
              href="https://www.experian.co.uk/business/"
              title="Experian"
              aria-label="Visit Experian Business"
              className="m-2 black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Svg name="source1" width="19px" height="24px" />
            </a>
            <a
              href={`https://www.trustpilot.com/search?claimed=true&query=${searchWord}`}
              title="Trustpilot"
              aria-label="Visit Trustpilot"
              className="m-2 black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Svg name="source6" width="24px" height="23px" />
            </a>
            <a
              href={`https://www.yelp.com/search?find_desc=${keyword?.slug?.replace(
                "-",
                "+"
              )}&amp;find_loc=${city?.slug}+uk`}
              title="Yelp"
              aria-label="Visit Yelp"
              className="m-2 black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Svg name="source8" width="18px" height="24px" />
            </a>
            <a
              href={`https://www.google.co.uk/search?q=${searchWord}`}
              title="Google"
              className="m-2 black"
              aria-label="Visit Google"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Svg name="source3" width="24px" height="24px" />
            </a>
            <a
              href={`https://www.facebook.com/search_results/?q=${searchWord}`}
              title="Facebook"
              aria-label="Visit Facebook"
              className="m-2 black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Svg name="source2" width="24px" height="24px" />
            </a>

            <a
              href={`https://www.linkedin.com/search/results/companies/?keywords=${searchWord}`}
              title="Linkedin"
              className="m-2 black"
              aria-label="Visit Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Svg name="source5" width="24px" height="24px" />
            </a>
            <a
              href={`https://m.youtube.com/results?sp=mAEA&search_query=${searchWord}`}
              title="Youtube"
              aria-label="Visit Youtube"
              className="m-2 black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Svg name="source9" width="24px" height="17px" />
            </a>
          </div>
          <ul className="d-flex flex-wrap gap-2 pv-3">
            <li className="d-flex gap-1">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="20px">
                <path
                  className="fill-red"
                  d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
                ></path>
              </svg>
              {option?.checkTitle1}
            </li>
            <li className="d-flex gap-1">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="20px">
                <path
                  className="fill-red"
                  d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
                ></path>
              </svg>
              {option?.checkTitle2}
            </li>
            <li className="d-flex gap-1">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="20px">
                <path
                  className="fill-red"
                  d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
                ></path>
              </svg>
              {option?.checkTitle3}
            </li>
            <li className="d-flex gap-1">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="20px">
                <path
                  className="fill-red"
                  d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
                ></path>
              </svg>
              {option?.checkTitle4}
            </li>
            <li className="d-flex gap-1">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="20px">
                <path
                  className="fill-red"
                  d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
                ></path>
              </svg>
              {option?.checkTitle5}
            </li>
          </ul>
          <p className="mb-2">
            {option?.content
              ?.replace("###", keyword?.name?.toLowerCase())
              ?.replace("###", keyword?.name?.toLowerCase())
              ?.replace("##", city?.name)
              ?.replace("##", city?.name)}
          </p>
          <div className="d-flex italic pv-2 mb-3">
            {option?.lernText}
            <a href={option?.lernLink} className="mb-2 pl-1 inColor underline">
              {option?.lernLinkText}
            </a>
          </div>
          {context?.places?.map((e, i) => {
            const uniqueLinks = Array.from(
              new Map(
                (e?.social || []).map((link) => {
                  let domain = "source";
                  try {
                    domain = new URL(link).hostname.replace(/^www\./, "");
                  } catch {}
                  return [domain, link];
                })
              ).values()
            );

            const accId = `acc-${i}`;
            const placeDesc = productDescription(e?.content);

            const fbImage = facebookImage(e?.social);

            return (
              <div className="box-border mb-4" key={i}>
                <div className="d-flex gap-3 mb-3">
                  <div className="w-60 h-60 overflow-hidden rounded-full border-dash img-wrap">
                    <img
                      src={fbImage || e?.image || "/default.jpg"}
                      alt={e?.title || ""}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="object-cover w-100 h-100"
                      data-fb={fbImage || ""}
                      data-main={e?.image || ""}
                      data-default="/default.jpg"
                    />
                  </div>
                  <div className="d-flex items-center">
                    <h3>{e?.title}</h3>
                  </div>
                </div>

                <div className="d-flex">
                  <ul className="d-flex gap-3">
                    <li className="d-flex items-center gap-2 mt-2">
                      <Svg name="location2" width="24px" height="24px" />
                      <a
                        href={(e?.social || []).find((link) =>
                          link.includes("google")
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {option?.metaTitle1}
                      </a>
                    </li>

                    <li className="d-flex items-center gap-2 mt-2">
                      <Svg name="website" width="24px" height="24px" />
                      <a
                        href={`https://${e?.domain}`}
                        target="_blank"
                        rel={`noopener noreferrer ${
                          e?.status === 1 ? "sponsored" : "nofollow"
                        }`}
                      >
                        {option?.metaTitle2}
                      </a>
                    </li>
                  </ul>
                </div>

                <h4 className="mb-3 mt-3">
                  {option?.whyChoose?.replace(
                    "###",
                    keyword?.single?.toLowerCase()
                  )}
                </h4>

                <div className="d-flex gap-2 mb-3">
                  <strong>{option?.clientSay}</strong>
                  {e?.clientsSay}
                </div>

                <input type="checkbox" id={accId} className="d-none acc" />

                {placeDesc[0] && <p>{placeDesc[0]} </p>}

                <label
                  htmlFor={accId}
                  className="cursor-link show-more underline"
                >
                  Show More
                </label>

                <div className="pag mb-2">
                  {placeDesc[1] && <p>{placeDesc[1]}</p>}
                  {placeDesc[2] && <p>{placeDesc[2]}</p>}

                  <div className="d-flex gap-2 mb-2 items-center flex-wrap text-14">
                    {option?.sourceTitle}
                    {uniqueLinks.map((link, ii) => {
                      let domain = "Source";
                      try {
                        domain = new URL(link).hostname
                          .replace(/^www\./, "")
                          .split(".")[0];
                      } catch {}

                      const label =
                        domain.charAt(0).toUpperCase() + domain.slice(1);

                      return (
                        <a
                          key={ii}
                          href={link}
                          title={label}
                          className="mr8 italic inColor underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {label}
                          {ii < uniqueLinks.length - 1 ? "," : ""}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="d-flex justify-center italic pv-2 mb-3">
            {option?.lernText}
            <a href={option?.lernLink} className="mb-2 pl-1 inColor underline">
              {option?.lernLinkText}
            </a>
          </div>
        </div>
      </section>
      {/* <section className="bg-dark">
        <div className="container cont-space">
          <div className="d-flex flex-col justify-center items-center text-center">
            <h2 className="text-white">Request a Quote with Confidence</h2>
            <p>
              Share a few details about your project and we’ll help connect your
              request with trusted professionals. No pressure, no obligation,
              just a simple way to get accurate, relevant quotes.
            </p>
            <label
              htmlFor="request-toggle"
              role="button"
              aria-label="Request a Quote"
              className="btx d-flex items-center gap-2 cursor-link mt-3"
            >
              Request a Quote
            </label>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Places;
