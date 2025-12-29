import React from "react";

const Image = ({ data }) => {
  const imgProps = {
    src: data?.src,
    alt: typeof data?.alt === "string" ? data.alt : "",
    loading: data?.loading || "lazy",
    decoding: data?.decoding || "async",
    fetchpriority: data?.fetchpriority || "low",
  };
  if (data?.width) imgProps.width = data.width;
  if (data?.height) imgProps.height = data.height;
  if (data?.className) imgProps.className = data.className;

  const imgElement = <img alt={imgProps.alt} {...imgProps} />;

  if (data?.srcm) {
    return (
      <picture>
        <source srcSet={data.srcm} media="(max-width: 768px)" />
        {imgElement}
      </picture>
    );
  }

  return imgElement;
};

export default Image;
