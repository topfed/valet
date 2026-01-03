import React from "react";
import { useGlobal } from "../data/useContext";
import { withPrefix } from "gatsby";
import Image from "./Sections/Image";
import Svg from "./Svg";

const Footer = () => {
  const { settings } = useGlobal();
  const footerOptions = settings["footer"] || {};
  const headerOptions = settings["header"] || {};
  return (
    <>
      <footer className="bg-dark">
        <div className="container cont-space d-flex gap-6 f-f-d">
          <div className="f-w-100 mb-3">
            <a href="/" aria-label={footerOptions?.labelLogo}>
              <Image
                data={{
                  src: withPrefix(`/${footerOptions?.logoData}`),
                  alt: footerOptions?.labelLogo,
                  width: `200px`,
                  height: `33px`,
                  loading: "lazy",
                  fetchpriority: "low",
                  local: true,
                }}
              />
            </a>
            <p className="mt-4 mb-4">{footerOptions?.text}</p>
            <div className="uppercase text-white mb-3">
              {footerOptions?.phoneTitle}
            </div>
            <div className="d-flex items-center mb-2 gap-3 pl-1">
              <Svg name="location" width="20px" className="pl-2" />
              <p className="m-0">{footerOptions?.addresCompany}</p>
            </div>
            <div className="d-flex items-center mb-2 gap-2">
              <Svg name="whatsappF" />
              <a
                href={footerOptions?.phoneNumberLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="m-0">{footerOptions?.phoneNumber}</p>
              </a>
            </div>
            <div className="d-flex items-center mb-5 gap-3">
              <Svg name="emailf" width="24px" />
              <p className="m-0">{footerOptions?.emailData}</p>
            </div>
            {footerOptions?.socialActivate && (
              <div className="d-flex flex-col w-max w-100 mb-4">
                <div className="uppercase text-white mb-3">
                  {footerOptions?.socialTitle}
                </div>
                <p>{footerOptions?.socialContent}</p>
                <ul className="d-flex gap-2">
                  {footerOptions?.socialList?.map((e, i) => {
                    return (
                      <li key={i}>
                        <a
                          href={e?.link}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          referrerPolicy="no-referrer"
                          aria-label={e?.name}
                        >
                          <Svg name={e?.name} width="28px" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <div className="f-w-100 d-flex flex-col gap-5">
            <div className="w-100">
              <div className="d-flex gap-5">
                <nav className="w-50">
                  <div className="uppercase text-white mb-3">
                    {footerOptions?.nav1Title}
                  </div>
                  <ul>
                    {footerOptions?.nav1?.map((e, i) => {
                      return (
                        <li key={i}>
                          <a href={`${e?.url}`}>{e?.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <nav className="w-50">
                  <div className="uppercase text-white mb-3">
                    {footerOptions?.nav2Title}
                  </div>
                  <ul>
                    {footerOptions?.nav2?.map((e, i) => {
                      return (
                        <li key={i}>
                          <a href={`${e?.url}`}>{e?.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
            {footerOptions?.activatePartners && (
              <div>
                <div className="uppercase text-white mb-3">
                  {footerOptions?.partnersTitle}
                </div>
                <p className="mb-4">{footerOptions?.partnersContent}</p>

                <div className="relative d-flex items-center justify-start flex-wrap gap-4">
                  {footerOptions?.partners?.map((e, i) => {
                    return (
                      <Image
                        key={i}
                        data={{
                          src: withPrefix(`/svg/icon/${e?.src}`),
                          width: `20px`,
                          height: "20px",
                          alt: `${e?.name}`,
                          loading: "lazy",
                          fetchpriority: "low",
                          local: true,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="d-flex justify-center p-3 bg-dark-c text-center">
          {footerOptions?.copyright}
        </div>
      </footer>

      <div className="modal search">
        <div className="w-100">
          <div className="shadow-bottom w-100 w-max p-3 relative sticky top-0 bg-white z-3">
            <div className="d-flex items-center gap-2 uppercase text-14 font-700">
              <Svg name="search" width="24px" height="24px" />{" "}
              {headerOptions?.searchTitle}
            </div>

            <label
              htmlFor="modal-none"
              aria-label={headerOptions?.labelClose}
              className="absolute cursor-link top-0 right-0 p-3"
            >
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CloseIcon"
                width="28"
                height="28"
                fill="#333333"
              >
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </label>
          </div>

          <div className="mt-3 w-100">
            <div className="w-100">
              <div className="relative p-3">
                <input
                  type="text"
                  placeholder="Search by service, profession, or location…"
                  id="searchInput"
                  className="w-100 round-8 shadow-input"
                  autoComplete="off"
                />

                <div
                  className="absolute top-4n right-16 d-none p-3 cursor-link"
                  id="searchClear"
                >
                  <svg
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="#333333"
                  >
                    <path
                      d="M19 6.41 17.59 5 12 10.59 6.41 5
                5 6.41 10.59 12 5 17.59 6.41 19
                12 13.41 17.59 19 19 17.59 13.41 12z"
                    />
                  </svg>
                </div>
              </div>
              <p id="searchMeta" className="text-12 mt-2 mb-1 text-center"></p>
              <div id="menu" className="p-3"></div>
              <ul
                id="searchResults"
                className="p-3 m-0 overflow-scrollY"
                style={{ listStyle: "none", display: "none" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="modal request">
        <div className="w-100">
          <div className="shadow-bottom w-100 w-max p-3 relative sticky top-0 bg-white z-3">
            <div className="d-flex items-center gap-2 uppercase text-14 font-700">
              <Svg name="search" width="24px" height="24px" /> Request a Quote
            </div>

            <label
              htmlFor="modal-none"
              aria-label={headerOptions?.labelClose}
              className="absolute cursor-link top-0 right-0 p-3"
            >
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CloseIcon"
                width="28"
                height="28"
                fill="#333333"
              >
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </label>
          </div>

          <div className="mt-3 w-100">
            <div className="w-100">
              <div className="relative p-3">
                <input
                  type="text"
                  placeholder="Search by service, profession, or location…"
                  id="searchInput"
                  className="w-100 round-8 shadow-input"
                  autoComplete="off"
                />

                <div
                  className="absolute top-4n right-16 d-none p-3 cursor-link"
                  id="searchClear"
                >
                  <svg
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="#333333"
                  >
                    <path
                      d="M19 6.41 17.59 5 12 10.59 6.41 5
                5 6.41 10.59 12 5 17.59 6.41 19
                12 13.41 17.59 19 19 17.59 13.41 12z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <label
        htmlFor="modal-none"
        className="w-100 h-100 bg-dark fixed z-0 top-0 left-0 opacity-50 d-none round-8"
        id="bg"
        aria-label={"overlay"}
      ></label>
    </>
  );
};

export default Footer;
