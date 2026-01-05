import React from "react";

export default function HTML(props) {
  const isDev = process.env.NODE_ENV === "development";
  return (
    <html lang="en-GB">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {isDev ? (
          <>
            {props.preBodyComponents}
            {props.postBodyComponents}
          </>
        ) : (
          <script
            dangerouslySetInnerHTML={{
              __html: `
             document.addEventListener("DOMContentLoaded",(()=>{let e=[],t=!1,n=document.getElementById("searchInput"),a=document.getElementById("searchResults"),d=document.getElementById("menu");n&&a&&d&&(n.addEventListener("focus",(()=>{t||fetch("/search-index.json").then((e=>e.json())).then((n=>{e=n,t=!0}))})),n.addEventListener("input",(n=>{if(!t)return;const o=n.target.value.toLowerCase();a.innerHTML="";const s=e.filter((e=>e.name.toLowerCase().includes(o)));d.style.display=o&&s.length?"none":"",a.style.display=o&&s.length?"":"none",s.slice(0,10).forEach((e=>{const t=document.createElement("li"),n=document.createElement("a");n.href="/"+e.slug+"/",n.textContent=e.name,t.appendChild(n),a.appendChild(t)}))})))})),document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".img-wrap img").forEach((e=>{e.onerror=()=>!e._fb&&e.dataset.fb?(e._fb=1,e.src=e.dataset.fb):!e._main&&e.dataset.main?(e._main=1,e.src=e.dataset.main):!e._def&&e.dataset.default?(e._def=1,e.src=e.dataset.default):void e.closest(".img-wrap")?.remove(),e.onerror()}))}));
          `,
            }}
          />
        )}
      </body>
    </html>
  );
}
