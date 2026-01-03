import React from "react";
import { useGlobal } from "../data/useContext";

const Content = () => {
  const { settings, pages, context } = useGlobal();
  const data = pages?.find((e) => e?.slug === context?.slug);
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Content"
  );
  return (
    <section className="bg-white">
      <div
        className={`container ${
          context?.slug === "faq" ? "no-space-b" : "cont-space"
        }`}
      >
        <div className="d-flex text-12 mb-4 gap-2 italic">
          <ul className="d-flex gap-2">
            <li>
              <a href={`/`} className="underline">
                Home
              </a>
            </li>
            <li>/</li>
            <li>{data?.name}</li>
          </ul>
        </div>
        <h2>{data?.name}</h2>
        <div
          className="text"
          dangerouslySetInnerHTML={{ __html: data?.content }}
        />
      </div>
    </section>
  );
};

export default Content;
