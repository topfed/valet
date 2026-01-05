import React from "react";
import { useGlobal } from "../data/useContext";

const CityCities = () => {
  const { settings, context, slugData } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "CityCities"
  );
  const single = slugData?.find(
    (e) => e?.slug === context?.slug && e?.type === "city"
  );
  const list = slugData?.filter(
    (e) => e?.slug !== context?.slug && e?.type === "city"
  );
  console.log(single);
  return (
    <section className="bg-light">
      <div className="container cont-space">
        <h2>{options?.title?.replace("###", single?.name)}</h2>
        {options?.content && (
          <p>{options?.content.replace("###", single?.name)}</p>
        )}
        <div className="d-flex flex-wrap mt-5 gap-2">
          {list
            ?.sort((a, b) => a.volume - b.volume)
            ?.map((e, i) => {
              return (
                <a className="btx-no" key={i} href={`/${e?.slug}/`}>
                  {e?.name}
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default CityCities;
