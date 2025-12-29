import React from "react";
import { useGlobal } from "../data/useContext";
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
    <section className="bg-light">
      <div className="container no-space">
        <div className="d-flex text-12 mb-4 gap-2 italic">
          <ul className="d-flex gap-2">
            <li>
              <a href={`/`}>Home</a>
            </li>
            <li>/</li>
            <li>
              <a href={`/${single?.category}/`}>
                {slugToTitle(single?.category)}
              </a>
            </li>
            <li>/</li>
            <li>{single?.name}</li>
          </ul>
        </div>
        {/* <p className="subtitle">{options?.subTitle}</p> */}
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
  );
};

export default KeywordCity;
