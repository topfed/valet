import React from "react";
import { useGlobal } from "../data/useContext";
import { withPrefix } from "gatsby";
import Image from "./Sections/Image";
import Svg from "./Svg";

const Header = () => {
  const { settings, context } = useGlobal();
  const options = settings["header"] || {};
  return (
    <>
      <section className="sticky top-0 z-4">
        <div className="bg-dark d-flex items-center justify-center h-40 cursor-link">
          <div
            className="d-flex gap-1 d-flex"
            aria-label={options?.locationTitle}
          >
            <Svg name={options?.deliveryIcon} width="16px" height="16px" />
            <p
              className="text-12 m-0"
              dangerouslySetInnerHTML={{
                __html: options?.delivery || "",
              }}
            />
          </div>
        </div>
      </section>
      <header className="sticky top-0 z-3 bg-white shadow-bottom">
        <div className="rotator bg-grey items-center justify-center h-40">
          {options?.promoTop?.map((e, i) => {
            return (
              <div className="gap-2 d-flex item" key={i}>
                {e?.icon && <Svg name={e?.icon} width="16px" height="16px" />}
                <p
                  className="text-12 m-0 w-100"
                  dangerouslySetInnerHTML={{
                    __html: e?.title || "",
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="container relative d-flex justify-between items-center h-60">
          <input
            type="radio"
            id="modal-none"
            name="modal-toggle"
            className="d-none"
            defaultChecked
          />
          <input
            type="radio"
            id="menu-toggle"
            name="modal-toggle"
            className="d-none"
          />
          <input
            type="radio"
            id="search-toggle"
            name="modal-toggle"
            className="d-none"
          />
          <div className="d-flex items-center opart1">
            <label
              htmlFor="menu-toggle"
              className="hamburgIcon"
              id="hamburgMenu"
              aria-label={options?.labelMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <a href="/" aria-label={options?.labelLogo}>
            <Image
              data={{
                src: withPrefix(`/${options?.logoData}`),
                alt: options?.labelLogo,
                width: `150px`,
                height: `30`,
                loading: "lazy",
                fetchpriority: "low",
                local: true,
              }}
            />
          </a>
          <div className="d-flex items-center gap-3">
            <label
              className="searchIcon cursor-link"
              htmlFor="search-toggle"
              aria-label={options?.labelSearch}
            >
              <Svg name="search" width="24px" height="24px" />
            </label>
          </div>
          <nav className="flex-col modal h-100-m z-3">
            <div className="shadow-bottom w-100 w-max p-3 relative sticky top-0 bg-white z-2">
              <a href="/" aria-label={options?.labelLogo}>
                <Svg name="home" width="28px" height="28px" />
              </a>
              <label
                htmlFor="modal-none"
                aria-label={options?.labelClose}
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

            <ul className="w-100 w-max m-c p-3 pb-0">
              {options?.nav?.map((e, i) => {
                return (
                  <li key={i}>
                    {!e?.submenu && (
                      <a
                        href={e?.url}
                        className={`d-flex items-center gap-2 border-b ${
                          context.slug === e ? "active" : ""
                        }`}
                      >
                        <Svg name={e?.icon} width="28px" height="28px" />
                        {e?.name}
                      </a>
                    )}
                    {e?.submenu?.length > 0 && (
                      <div className="d-flex flex-col border-b w-100">
                        <input
                          type="checkbox"
                          id={`toggle-${i}-menu`}
                          className="d-none"
                        />
                        <label
                          htmlFor={`toggle-${i}-menu`}
                          className="d-flex justify-between font-500 items-center cursor-link p-3 w-100"
                        >
                          {e?.name}
                          <svg width="24px" height="24px" className="arrow">
                            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
                          </svg>
                        </label>
                        <div className="accordion pl-3 pr-3">
                          <div className="gap-2 d-grid grid-4 mb-3">
                            {e?.submenu?.map((e, i) => {
                              return (
                                <div className="p-0" key={i}>
                                  <a
                                    href={e?.buttonTextLink}
                                    className={`relative d-flex flex-col justify-center items-center text-12 font-500 text-center text-black font-f`}
                                  >
                                    {e?.src && (
                                      <Image
                                        data={{
                                          src: `/img/${e?.src}.png`,
                                          width: "380",
                                          height: "250",
                                          alt: ``,
                                          loading: "lazy",
                                          fetchpriority: "low",
                                          local: true,
                                          className: "round-8",
                                        }}
                                      />
                                    )}
                                    <div className="absolute text-white bottom-32 bg-color ph-3 d-flex items-center left-0 rounded-full-right opacity-90">
                                      {e?.title}
                                    </div>
                                  </a>
                                </div>
                              );
                            })}
                          </div>
                          <div className="d-flex justify-center mt-2 mb-2">
                            <a
                              className="bg-color text-black h-40 d-flex items-center ph-4 mb-3 rounded-full"
                              href={e?.viewAllLink}
                            >
                              {e?.viewAll}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            {/* {options?.socialActivate && (
              <div className="d-flex pl-4 flex-col w-max m-c w-100 mb-4 mt-4">
                <div className="uppercase mb-2 font-600">
                  {options?.socialTitle}
                </div>
                <ul className="d-flex gap-2">
                  {options?.socialList?.map((e, i) => {
                    return (
                      <li key={i}>
                        <a
                          href={e?.link}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          referrerPolicy="no-referrer"
                          aria-label={e?.name}
                          className="p-0"
                        >
                          <Svg name={e?.name} width="28px" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )} */}
          </nav>

          <label
            htmlFor="modal-none"
            className="w-100 h-100 bg-dark fixed z-0 top-0 left-0 opacity-50 d-none round-8"
            id="bg"
            aria-label={"overlay"}
          ></label>
        </div>
      </header>
    </>
  );
};

export default Header;
