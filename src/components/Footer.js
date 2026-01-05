import React from "react";
import { useGlobal } from "../data/useContext";
import { withPrefix } from "gatsby";
import Image from "./Sections/Image";
import Svg from "./Svg";

const Footer = () => {
  const { settings } = useGlobal();
  const footerOptions = settings["footer"] || {};
  const headerOptions = settings["header"] || {};
  const options = [];
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
              {/* <p id="searchMeta" className="text-12 mt-2 mb-1 text-center"></p> */}
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
                {/* <input
                  type="text"
                  placeholder="Search by service, profession, or location…"
                  id="searchInput"
                  className="w-100 round-8 shadow-input"
                  autoComplete="off"
                /> */}

                <div className="bg-white">
                  {/* Steps controller (CSS-only) */}
                  <input
                    className="d-none"
                    type="radio"
                    name="step"
                    id="step-1"
                    defaultChecked
                  />
                  <input
                    className="d-none"
                    type="radio"
                    name="step"
                    id="step-2"
                  />
                  <input
                    className="d-none"
                    type="radio"
                    name="step"
                    id="step-3"
                  />
                  <input
                    className="d-none"
                    type="radio"
                    name="step"
                    id="step-4"
                  />
                  <input
                    className="d-none"
                    type="radio"
                    name="step"
                    id="step-5"
                  />
                  <input
                    className="d-none"
                    type="radio"
                    name="step"
                    id="step-6"
                  />{" "}
                  {/* final */}
                  {/* PANEL 1 */}
                  <div id="panel-1" className="d-none">
                    <h3 className="mb-2 text-center mt-5">
                      What do you need help with?
                    </h3>
                    <p className="text-center mb-3 mt-4">
                      Pick one option so we can match you with the right
                      professional.
                    </p>

                    <div className="d-flex justify-center flex-wrap gap-3 mt-5">
                      <label className="btx-no max-w-350 w-100">
                        <input
                          type="radio"
                          name="q1_service"
                          value="quote"
                          className="mr-3"
                        />
                        Get a quote
                      </label>
                      <label className="btx-no max-w-350 w-100">
                        <input
                          type="radio"
                          name="q1_service"
                          value="call-back"
                          className="mr-3"
                        />
                        Request a call-back
                      </label>
                      <label className="btx-no max-w-350 w-100">
                        <input
                          type="radio"
                          name="q1_service"
                          value="advice"
                          className="mr-3"
                        />
                        Ask for advice first
                      </label>
                    </div>

                    <div className="d-flex justify-center gap-3 mt-5 pb-5 border-b">
                      <label
                        htmlFor="step-1"
                        className="border bg-grey p-2 rounded-full w-150 text-center"
                      >
                        Back
                      </label>
                      <label
                        htmlFor="step-2"
                        className="bg-color p-2 rounded-full w-150 text-center"
                      >
                        Next
                      </label>
                    </div>
                    <p className="text-center mb-3 mt-4">Step 1 / 5</p>
                  </div>
                  {/* PANEL 2 */}
                  <div id="panel-2" className="d-none">
                    <h3 className="mb-2 text-center mt-5">
                      How soon do you need it?
                    </h3>
                    <p className="text-center mb-3 mt-4">
                      This helps us prioritize your request.
                    </p>

                    <div className="d-flex justify-center flex-wrap gap-3 mt-5">
                      <label className="btx-no max-w-350 w-100">
                        <input
                          type="radio"
                          name="q2_timing"
                          value="asap"
                          className="mr-3"
                        />
                        ASAP (today / tomorrow)
                      </label>
                      <label className="btx-no max-w-350 w-100">
                        <input
                          type="radio"
                          name="q2_timing"
                          value="this-week"
                          className="mr-3"
                        />
                        This week
                      </label>
                      <label className="btx-no max-w-350 w-100">
                        <input
                          type="radio"
                          name="q2_timing"
                          value="flexible"
                          className="mr-3"
                        />
                        Flexible
                      </label>
                    </div>

                    <div className="d-flex justify-center gap-3 mt-5 pb-5 border-b">
                      <label
                        htmlFor="step-1"
                        className="border bg-grey p-2 rounded-full w-150 text-center"
                      >
                        Back
                      </label>
                      <label
                        htmlFor="step-3"
                        className="bg-color p-2 rounded-full w-150 text-center"
                      >
                        Next
                      </label>
                    </div>
                    <p className="text-center mb-3 mt-4">Step 2 / 5</p>
                  </div>
                  {/* PANEL 3 */}
                  <div id="panel-3" className="d-none">
                    <h3 className="mb-2 text-center mt-5">
                      What’s your budget range?
                    </h3>
                    <p className="text-center mb-3 mt-4">
                      Totally optional — but it helps us recommend the right
                      fit.
                    </p>

                    <div className="d-flex justify-center flex-wrap gap-3 mt-5">
                      <label className="btx-no max-w-350 w-100">
                        <input
                          type="radio"
                          name="q3_budget"
                          value="low"
                          className="mr-3"
                        />
                        Best value option
                      </label>
                      <label className="btx-no max-w-350 w-100">
                        <input
                          type="radio"
                          name="q3_budget"
                          value="mid"
                          className="mr-3"
                        />
                        Mid-range
                      </label>
                      <label className="btx-no max-w-350 w-100">
                        <input
                          type="radio"
                          name="q3_budget"
                          value="premium"
                          className="mr-3"
                        />
                        Premium / top-rated
                      </label>
                    </div>

                    <div className="d-flex justify-center gap-3 mt-5 pb-5 border-b">
                      <label
                        htmlFor="step-2"
                        className="border bg-grey p-2 rounded-full w-150 text-center"
                      >
                        Back
                      </label>
                      {/* After step 3, go to DETAILS FORM */}
                      <label
                        htmlFor="step-4"
                        className="bg-color p-2 rounded-full w-150 text-center"
                      >
                        Next
                      </label>
                    </div>
                    <p className="text-center mb-3 mt-4">Step 3 / 5</p>
                  </div>
                  {/* PANEL 4 (DETAILS + EMAIL FORM) */}
                  <div id="panel-4" className="d-none">
                    <h3 className="mb-2 text-center mt-5">
                      Share a few details
                    </h3>
                    <p className="text-center mb-3 mt-4">
                      Tell us what you need and where — we’ll send your request
                      to suitable pros.
                    </p>

                    <div className="w-100 mx-auto mt-5">
                      <div className="d-grid grid-1 gap-3">
                        <label className="text-14 fw-600">
                          Your location (town/city)
                        </label>
                        <input
                          className="border p-2 rounded-8 w-100"
                          name="details_location"
                          placeholder="e.g. Manchester"
                          type="text"
                        />

                        <label className="text-14 fw-600 mt-3">
                          Brief description
                        </label>
                        <textarea
                          className="border p-2 rounded-8 w-100"
                          name="details_message"
                          rows={4}
                          placeholder="What do you need done? Any key requirements?"
                        />

                        <label className="text-14 fw-600 mt-3">
                          Email to receive your quote
                        </label>
                        <input
                          className="border p-2 rounded-8 w-100"
                          name="details_email"
                          placeholder="you@example.com"
                          type="email"
                        />

                        <label className="d-flex items-center justify-center items-start gap-2 mt-3 text-14">
                          <input
                            type="checkbox"
                            name="details_consent"
                            value="yes"
                            className="mt-1"
                          />
                          I agree to be contacted about this request.
                        </label>
                      </div>
                    </div>

                    <div className="d-flex justify-center gap-3 mt-5 pb-5 border-b">
                      <label
                        htmlFor="step-3"
                        className="border bg-grey p-2 rounded-full w-150 text-center"
                      >
                        Back
                      </label>
                      <label
                        htmlFor="step-5"
                        className="bg-color p-2 rounded-full w-150 text-center"
                      >
                        Next
                      </label>
                    </div>
                    <p className="text-center mb-3 mt-4">Step 4 / 5</p>
                  </div>
                  {/* PANEL 5 */}
                  <div id="panel-5" className="d-none">
                    <h3 className="mb-2 text-center mt-5">
                      How would you like to be contacted?
                    </h3>
                    <p className="text-center mb-3 mt-4">
                      Choose one preference.
                    </p>

                    <div className="d-flex justify-center flex-wrap gap-3 mt-5">
                      <label className="btx-no max-w-350 w-100">
                        <input
                          type="radio"
                          name="q5_contact"
                          value="email"
                          className="mr-3"
                        />
                        Email is best
                      </label>
                      <label className="btx-no max-w-350 w-100">
                        <input
                          type="radio"
                          name="q5_contact"
                          value="phone"
                          className="mr-3"
                        />
                        Phone call (if needed)
                      </label>
                      <label className="btx-no max-w-350 w-100">
                        <input
                          type="radio"
                          name="q5_contact"
                          value="either"
                          className="mr-3"
                        />
                        Either is fine
                      </label>
                    </div>

                    <div className="d-flex justify-center gap-3 mt-5 pb-5 border-b">
                      <label
                        htmlFor="step-4"
                        className="border bg-grey p-2 rounded-full w-150 text-center"
                      >
                        Back
                      </label>
                      <label
                        htmlFor="step-6"
                        className="bg-color p-2 rounded-full w-150 text-center"
                      >
                        Finish
                      </label>
                    </div>
                    <p className="text-center mb-3 mt-4">Step 5 / 5</p>
                  </div>
                  {/* PANEL 6 (FINAL) */}
                  <div id="panel-6" className="d-none">
                    <h3 className="mb-2 text-center mt-5">Request sent ✅</h3>
                    <p className="text-center mb-3 mt-4 max-w-600 mx-auto">
                      Thanks — we’ll review your answers and match you with
                      suitable professionals. Keep an eye on your inbox for your
                      quote and next steps.
                    </p>

                    <div className="d-flex justify-center mt-5 pb-5">
                      <label
                        htmlFor="step-1"
                        className="border bg-grey p-2 rounded-full w-200 text-center"
                      >
                        Start again
                      </label>
                    </div>
                  </div>
                  <style>{`
    /* Show panels based on step */
    #step-1:checked ~ #panel-1 { display:block; }
    #step-2:checked ~ #panel-2 { display:block; }
    #step-3:checked ~ #panel-3 { display:block; }
    #step-4:checked ~ #panel-4 { display:block; }
    #step-5:checked ~ #panel-5 { display:block; }
    #step-6:checked ~ #panel-6 { display:block; }

    /* Your custom checkbox/radio icons (keep as-is) */
    input[type="checkbox"] {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 28px;
      height: 28px;
      background: url("/icons/checked.svg") no-repeat center center / contain;
      cursor: pointer;
      border: none;
      outline: none;
      transition: 0.2s ease-in-out;
    }
    input[type="checkbox"]:checked {
      background: url("/icons/checked1.svg") no-repeat center center / contain;
    }
    input[type="radio"] {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 28px;
      height: 28px;
      background: url("/icons/radio.svg") no-repeat center center / contain;
      cursor: pointer;
      border: none;
      outline: none;
      transition: 0.2s ease-in-out;
    }
    input[type="radio"]:checked {
      background: url("/icons/radio1.svg") no-repeat center center / contain;
    }
  `}</style>
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
