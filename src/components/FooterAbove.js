import React from "react";
import { useGlobal } from "../data/useContext";

const FooterAbove = () => {
  const { settings, context } = useGlobal();
  const options = settings["footerAbove"] || {};
  if (context?.slug === "selection-process") return null;
  if (context?.type === "content" || context?.type === "form") return null;
  return (
    <section className="bg-white" id="subscribed">
      <div className="container cont-space">
        <h2 className="text-center">{options?.title}</h2>
        {options?.content && <p className="text-center">{options?.content}</p>}

        <form
          id="subscribe-form"
          className="text-center"
          noValidate
          data-endpoint="/.netlify/functions/brevo-subscribe"
        >
          {/* honeypot (bots) */}
          <div className="d-none">
            <label>
              {options?.thankMessage3 || "Leave empty"}
              <input
                type="text"
                name="bot-field"
                tabIndex="-1"
                autoComplete="off"
              />
            </label>
          </div>

          <input
            type="email"
            id="subscribe-email"
            name="email"
            className="w-100 rounded-full max-w-350 border"
            placeholder={options?.inputPlaceholder}
            required
            aria-label={options?.inputLabel}
          />

          <button
            type="submit"
            id="subscribe-btn"
            className="btx d-flex items-center gap-3 m-c mt-5"
          >
            {options?.buttonText}
          </button>

          {/* message box (hidden by default) */}
          <div
            id="subscribe-msg"
            className="bg-light mb-3 d-none"
            style={{ marginTop: 16 }}
          >
            <h4 id="subscribe-msg-title" className="m-0 mb-2"></h4>
            <p id="subscribe-msg-text" className="m-0 text-14 opacity-80"></p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FooterAbove;
