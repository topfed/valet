import React from "react";
import { useGlobal } from "../data/useContext";
import Svg from "./Svg";

const Selection = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Selection"
  );
  return (
    <section className="bg-white">
      <div
        className={`container ${
          context?.slug === "selection-process" ? "no-space" : "cont-space"
        }`}
      >
        {context?.slug === "selection-process" && (
          <div className="d-flex text-12 mb-4 gap-2 italic">
            <ul className="d-flex gap-2">
              <li>
                <a href={`/`} className="underline">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>{options?.title}</li>
            </ul>
          </div>
        )}
        {context?.slug !== "selection-process" && (
          <p className="subtitle">{options?.subTitle}</p>
        )}
        <h2>{options?.title}</h2>
        {options?.content?.split("###")[0] && (
          <p>{options?.content?.split("###")[0]}</p>
        )}
        {options?.content?.split("###")[1] && (
          <p>{options?.content?.split("###")[1]}</p>
        )}
        <div className="d-grid grid-2 gap-4 mt-5 content">
          {options?.list?.map((e, i) => {
            return (
              <div className="d-flex items-start" key={i}>
                <div>
                  <Svg
                    name={e?.icon?.src}
                    width={e?.icon?.width}
                    height={e?.icon?.height}
                  />
                </div>
                <div className="d-flex flex-col pl-4">
                  <h3>{e?.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: e?.content }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Selection;
