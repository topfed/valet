import React from "react";

const Svg = ({ name = null, width = "auto", height = "auto" }) => {
  switch (name) {
    case "logo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 349 57.5"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            width: "130px",
            height: "auto",
          }}
        >
          <path
            fill="var(--c-1)"
            d="M47 41.4c-1.2 12.7-7.7 16-18.6 16H.1L3.8 31c1.3-8.9 6.6-13.2 13.8-13.2l.2-1.7H3L5.2 0h28.4c10.8 0 15.6 4.7 14 15.6-.8 6.2-5.4 12-14.7 12l-.2 1.6c11 0 15 3 14.3 12.2Zm-12.5-3.2c.3-1.7-.7-3.2-3.2-3.2H21l-.9 6.4h10.4c2.4 0 3.8-1.4 4-3.2ZM22.8 22.1h7.5c2.4 0 3.7-1.3 4-3 .3-1.7-.7-3-3.2-3h-7.4l-.9 6ZM119 27l8.4 30.5h-17.7L103 33l-3.5 24.4H81.8l3.7-26.6c1.2-8.8 6.6-13 13.8-13l.2-1.8H84.7L86.9 0h20.7l-3 21L116.4 0H134l-15 27ZM81.8 16.6h-8.4l-6.3 9.2L74.5.2H55.9l-7 31h14.5l-3.6 26.3 22-40.9z"
          />
          <path
            fill="#333333"
            d="M180.5 16h-14l-5.8 41.3H143l3.8-26.5c1.2-8.7 6.5-13 13.8-13l.2-1.8h-25.3l2.3-16h45l-2.3 16ZM219.1 38.3c.2 1.7 1.6 3 3.4 3h5.9l-2.3 16h-6.5c-9 0-15.2-7.3-13.9-16.2l.2-1.8h-3.5l-2.5 18h-17.7l3.7-26.4c1.3-8.8 6.6-13.1 13.8-13.1l.2-1.8h-14.8l2.2-16h31.2c10.8 0 15 8.8 13.4 19.6-1.2 8.6-5.6 16-12.8 18.7Zm-14.6-13.6h10.3c2.4 0 3.8-1.9 4.2-4.3.3-2.5-.6-4.4-3-4.4h-10.3l-1.2 8.7ZM285.3 28.7C283 44.6 269.8 57.4 256 57.4s-23.2-12.8-20.8-28.7C237.5 12.8 250.6 0 264.5 0s23.2 12.8 20.8 28.7Zm-17 .2c1.3-9.2-1.5-16.8-5.9-16.9-4.4 0-9.1 7.4-10.3 16.6-1.3 9.1 1.5 16.7 6 16.8 4.5 0 9.1-7.4 10.3-16.5ZM349 0l-8 57.3h-17.7l-8.8-25.8c-1-2.7-1.3-5.7-1-8.7l.3-1.2h-1.7l-5 35.6h-17.7l3.7-26.4c1.2-8.7 6.6-13 13.8-13l.2-1.8h-14.8l2.2-16H315l10.8 29.6h1.3L331.2 0H349Z"
          />
        </svg>
      );
    case "logoFooter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 349 57.5"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            width: "170px",
            height: "auto",
          }}
        >
          <path
            fill="var(--c-1)"
            d="M47 41.4c-1.2 12.7-7.7 16-18.6 16H.1L3.8 31c1.3-8.9 6.6-13.2 13.8-13.2l.2-1.7H3L5.2 0h28.4c10.8 0 15.6 4.7 14 15.6-.8 6.2-5.4 12-14.7 12l-.2 1.6c11 0 15 3 14.3 12.2Zm-12.5-3.2c.3-1.7-.7-3.2-3.2-3.2H21l-.9 6.4h10.4c2.4 0 3.8-1.4 4-3.2ZM22.8 22.1h7.5c2.4 0 3.7-1.3 4-3 .3-1.7-.7-3-3.2-3h-7.4l-.9 6ZM119 27l8.4 30.5h-17.7L103 33l-3.5 24.4H81.8l3.7-26.6c1.2-8.8 6.6-13 13.8-13l.2-1.8H84.7L86.9 0h20.7l-3 21L116.4 0H134l-15 27ZM81.8 16.6h-8.4l-6.3 9.2L74.5.2H55.9l-7 31h14.5l-3.6 26.3 22-40.9z"
          />
          <path
            fill="#ffffff"
            d="M180.5 16h-14l-5.8 41.3H143l3.8-26.5c1.2-8.7 6.5-13 13.8-13l.2-1.8h-25.3l2.3-16h45l-2.3 16ZM219.1 38.3c.2 1.7 1.6 3 3.4 3h5.9l-2.3 16h-6.5c-9 0-15.2-7.3-13.9-16.2l.2-1.8h-3.5l-2.5 18h-17.7l3.7-26.4c1.3-8.8 6.6-13.1 13.8-13.1l.2-1.8h-14.8l2.2-16h31.2c10.8 0 15 8.8 13.4 19.6-1.2 8.6-5.6 16-12.8 18.7Zm-14.6-13.6h10.3c2.4 0 3.8-1.9 4.2-4.3.3-2.5-.6-4.4-3-4.4h-10.3l-1.2 8.7ZM285.3 28.7C283 44.6 269.8 57.4 256 57.4s-23.2-12.8-20.8-28.7C237.5 12.8 250.6 0 264.5 0s23.2 12.8 20.8 28.7Zm-17 .2c1.3-9.2-1.5-16.8-5.9-16.9-4.4 0-9.1 7.4-10.3 16.6-1.3 9.1 1.5 16.7 6 16.8 4.5 0 9.1-7.4 10.3-16.5ZM349 0l-8 57.3h-17.7l-8.8-25.8c-1-2.7-1.3-5.7-1-8.7l.3-1.2h-1.7l-5 35.6h-17.7l3.7-26.4c1.2-8.7 6.6-13 13.8-13l.2-1.8h-14.8l2.2-16H315l10.8 29.6h1.3L331.2 0H349Z"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 153.7 153.7"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            x="-.5"
            y="115.3"
            width="61.8"
            height="16"
            rx="5"
            ry="5"
            transform="rotate(-45 30.4 123.2)"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m52.7 97.4 8.5-8.5 3.6 3.6-8.5 8.5z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="100.3"
            cy="53.4"
            r="48.4"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M72.5 36.8c3.1-5.3 7.8-9.6 13.2-12.4M90.6 22.4c3-1 6.3-1.4 9.7-1.4M106.9 21.6l4 1.1"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "cart":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 179.6 106.4"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M111.2 14.7H4l12.1 51.7H100M23.4 14.7l12.2 51.7M41.7 14.7l12.2 51.7M60.9 14.7 73 66.4M79.1 14.7l12.2 51.7"
            stroke="#32012f"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="29.5"
            cy="95.2"
            r="7.2"
            stroke="#32012f"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="94.8"
            cy="94.9"
            r="6.9"
            stroke="#32012f"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M22.3 78.1h75.6L114 4h18"
            stroke="#32012f"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M175 25.7h4.6M154.8 25.7h13M124.6 25.7h26.5M163.7 46.9h4M146.5 46.9h11.1M120.6 46.9h22.7M155.4 67.4h3.6M140.3 67.4h9.8M117.6 67.4h19.9"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "wishlist":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <g>
            <circle cx="178.41" cy="183.12" r="40.5" fill="#303a44" />
            <circle cx="245.59" cy="183.12" r="40.5" fill="#303a44" />
            <path
              d="M222,183.12l-10,74.25s-61.14-31.41-71.44-59.83,81.44-14.42,81.44-14.42Z"
              fill="#303a44"
            />
            <path
              d="M202,183.12l10,74.25s61.14-31.41,71.44-59.83c10.31-28.42-81.44-14.42-81.44-14.42Z"
              fill="#303a44"
            />
          </g>
          <polyline
            points="131.26 189.12 174.53 189.12 180.18 196.43 199.77 152.62 224.78 225.62 243.82 181.82 249.72 189.12 292.74 189.12"
            stroke="#ffce00"
            strokeWidth="10"
            strokeMiterlimit="10"
            fill="none"
          />
        </svg>
      );
    case "cart-white":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 179.6 106.4"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M111.2 14.7H4l12.1 51.7H100M23.4 14.7l12.2 51.7M41.7 14.7l12.2 51.7M60.9 14.7 73 66.4M79.1 14.7l12.2 51.7"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="29.5"
            cy="95.2"
            r="7.2"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="94.8"
            cy="94.9"
            r="6.9"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M22.3 78.1h75.6L114 4h18"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M175 25.7h4.6M154.8 25.7h13M124.6 25.7h26.5M163.7 46.9h4M146.5 46.9h11.1M120.6 46.9h22.7M155.4 67.4h3.6M140.3 67.4h9.8M117.6 67.4h19.9"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            width="122.5"
            height="122.5"
            x="18.8"
            y="18.8"
            rx="10"
            ry="10"
            fill="#ffffff"
          />
          <path
            fill="none"
            stroke="#ffffff"
            strokeWidth="4px"
            d="M149.2 143.5c2.4-3.5 3.8-7.7 3.8-12.3M106 153h25.2c2.5 0 4.8-.4 7-1.1M153 95.9V28.8c0-12-9.8-21.8-21.8-21.8H28.8C16.8 7 7 16.7 7 28.8v102.4c0 12 9.7 21.8 21.8 21.8H99"
          />
          <path
            fill="#32012f"
            d="M107.9 143.5H86.4V59.2c0-13.7 12.1-23 22.5-24.5 10.4-1.6 18 2 18 2V56h-16c-2.1 0-3 2-3 3.2v84.3Z"
          />
          <path fill="#32012f" d="M122.6 96.2H69.5V74.6h57.4l-4.3 21.6z" />
        </svg>
      );
    case "facebook2":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            width="122.5"
            height="122.5"
            x="18.8"
            y="18.8"
            rx="10"
            ry="10"
            fill="#32012f"
          />
          <path
            fill="none"
            stroke="#32012f"
            strokeWidth="4px"
            d="M149.2 143.5c2.4-3.5 3.8-7.7 3.8-12.3M106 153h25.2c2.5 0 4.8-.4 7-1.1M153 95.9V28.8c0-12-9.8-21.8-21.8-21.8H28.8C16.8 7 7 16.7 7 28.8v102.4c0 12 9.7 21.8 21.8 21.8H99"
          />
          <path
            fill="#fff"
            d="M107.9 143.5H86.4V59.2c0-13.7 12.1-23 22.5-24.5 10.4-1.6 18 2 18 2V56h-16c-2.1 0-3 2-3 3.2v84.3Z"
          />
          <path fill="#fff" d="M122.6 96.2H69.5V74.6h57.4l-4.3 21.6z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          {/* Background */}
          <rect
            width="122.5"
            height="122.5"
            x="18.8"
            y="18.8"
            rx="10"
            ry="10"
            fill="#ffffff"
          />

          {/* Frame strokes */}
          <path
            fill="none"
            stroke="#ffffff"
            strokeWidth="4px"
            d="M106 153h25.23c2.43 0 4.76-.4 6.94-1.13"
          />
          <path
            fill="none"
            stroke="#ffffff"
            strokeWidth="4px"
            d="M149.23 143.48c2.38-3.49 3.77-7.71 3.77-12.26"
          />
          <path
            fill="none"
            stroke="#ffffff"
            strokeWidth="4px"
            d="M153 95.87V28.77c0-12.02-9.75-21.77-21.77-21.77H28.77C16.75 7 7 16.75 7 28.77v102.46c0 12.02 9.75 21.77 21.77 21.77h70.35"
          />

          {/* LinkedIn icon */}
          <rect x="41" y="66.34" width="16.56" height="51.55" fill="#32012f" />
          <circle cx="49.28" cy="50.05" r="8.28" fill="#32012f" />

          <path
            fill="#32012f"
            d="M99.5 65.01c-8.2 0-13.16 4.35-15.49 7.11v-5.78H67.45v51.55h16.56v-33.7c1.44-3.07 4.08-6.37 8.82-6.37 8.82 0 8.82 8.28 8.82 8.28v31.79h17.36v-33.39c0-12.55-7.48-19.5-19.5-19.5Z"
          />
        </svg>
      );
    case "linkedin2":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          {/* Background */}
          <rect
            width="122.5"
            height="122.5"
            x="18.8"
            y="18.8"
            rx="10"
            ry="10"
            fill="#32012f"
          />

          {/* Frame strokes */}
          <path
            fill="none"
            stroke="#32012f"
            strokeWidth="6px"
            d="M106 153h25.23c2.43 0 4.76-.4 6.94-1.13"
          />
          <path
            fill="none"
            stroke="#32012f"
            strokeWidth="6px"
            d="M149.23 143.48c2.38-3.49 3.77-7.71 3.77-12.26"
          />
          <path
            fill="none"
            stroke="#32012f"
            strokeWidth="6px"
            d="M153 95.87V28.77c0-12.02-9.75-21.77-21.77-21.77H28.77C16.75 7 7 16.75 7 28.77v102.46c0 12.02 9.75 21.77 21.77 21.77h70.35"
          />

          {/* LinkedIn icon */}
          <rect x="41" y="66.34" width="16.56" height="51.55" fill="#ffffff" />
          <circle cx="49.28" cy="50.05" r="8.28" fill="#ffffff" />

          <path
            fill="#ffffff"
            d="M99.5 65.01c-8.2 0-13.16 4.35-15.49 7.11v-5.78H67.45v51.55h16.56v-33.7c1.44-3.07 4.08-6.37 8.82-6.37 8.82 0 8.82 8.28 8.82 8.28v31.79h17.36v-33.39c0-12.55-7.48-19.5-19.5-19.5Z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            width="122.5"
            height="122.5"
            x="18.8"
            y="18.8"
            rx="10"
            ry="10"
            fill="#ffffff"
          />
          <path
            fill="none"
            stroke="#ffffff"
            strokeWidth="4px"
            d="M149.2 143.5c2.4-3.5 3.8-7.7 3.8-12.3M106 153h25.2c2.5 0 4.8-.4 7-1.1M153 95.9V28.8c0-12-9.8-21.8-21.8-21.8H28.8C16.8 7 7 16.7 7 28.8v102.4c0 12 9.7 21.8 21.8 21.8H99"
          />
          <path
            fill="#32012f"
            d="M111.3 41.8h-63a7.8 7.8 0 0 0-7.8 7.8v61.1c0 4.4 3.5 7.9 7.8 7.9h63c4.3 0 7.8-3.5 7.8-7.9V49.6c0-4.3-3.5-7.8-7.8-7.8Zm-1.5 22.8H98.3c-1.3-1.6-2.9-3-4.6-4.2V51h16v13.5Zm-30 .7a14.8 14.8 0 1 1 0 29.7 14.8 14.8 0 0 1 0-29.7ZM50 109.2v-37H57a24.2 24.2 0 1 0 46.2 1.7h6.6v35.3H49.9Z"
          />
        </svg>
      );
    case "instagram2":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            width="122.5"
            height="122.5"
            x="18.8"
            y="18.8"
            rx="10"
            ry="10"
            fill="#32012f"
          />
          <path
            fill="none"
            stroke="#32012f"
            strokeWidth="4px"
            d="M149.2 143.5c2.4-3.5 3.8-7.7 3.8-12.3M106 153h25.2c2.5 0 4.8-.4 7-1.1M153 95.9V28.8c0-12-9.8-21.8-21.8-21.8H28.8C16.8 7 7 16.7 7 28.8v102.4c0 12 9.7 21.8 21.8 21.8H99"
          />
          <path
            fill="#ffffff"
            d="M111.3 41.8h-63a7.8 7.8 0 0 0-7.8 7.8v61.1c0 4.4 3.5 7.9 7.8 7.9h63c4.3 0 7.8-3.5 7.8-7.9V49.6c0-4.3-3.5-7.8-7.8-7.8Zm-1.5 22.8H98.3c-1.3-1.6-2.9-3-4.6-4.2V51h16v13.5Zm-30 .7a14.8 14.8 0 1 1 0 29.7 14.8 14.8 0 0 1 0-29.7ZM50 109.2v-37H57a24.2 24.2 0 1 0 46.2 1.7h6.6v35.3H49.9Z"
          />
        </svg>
      );
    case "phoneHeader":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 134.3 134.3"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: "24px",
            width: "24px",
          }}
          fill="none"
        >
          <path
            d="M36.8 102c30.1 30 58.7 27.2 58.7 27.2l8-8L81 98.8l-11.5 11.4s-12-7.8-24.5-20.4c-12.6-12.6-21-25-21-25l11.5-11.5-22.4-22.5-8 8S2.2 67.4 32.4 97.5l4.4 4.4Z"
            fill="#303a44"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M57.3 56a21 21 0 0 1 21 21M57.3 31.5A45.5 45.5 0 0 1 102.8 77M57.3 5a72 72 0 0 1 72 72"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
          />
        </svg>
      );
    case "phone":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 134.3 134.3"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: "24px",
            width: "24px",
          }}
          fill="none"
        >
          <path
            d="M36.8 102c30.1 30 58.7 27.2 58.7 27.2l8-8L81 98.8l-11.5 11.4s-12-7.8-24.5-20.4c-12.6-12.6-21-25-21-25l11.5-11.5-22.4-22.5-8 8S2.2 67.4 32.4 97.5l4.4 4.4Z"
            fill="var(--c-1)"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M57.3 56a21 21 0 0 1 21 21M57.3 31.5A45.5 45.5 0 0 1 102.8 77M57.3 5a72 72 0 0 1 72 72"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
          />
        </svg>
      );
    case "return":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 170.9 141"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <path
            d="M23.6 70.5a63.5 63.5 0 0 0 120.5 28.2"
            stroke="#303a44"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M23.6 60.1 7 78M23.6 60.1l17.9 16.7"
            stroke="#303a44"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#303a44"
          />
          <path
            d="M38 30.4c-3 3.7-5.7 7.7-7.8 12M78.6 7.6a63.1 63.1 0 0 0-27.8 10.8M150.6 70.5c0-35-28.4-63.5-63.5-63.5"
            stroke="var(--c-2)"
            strokeWidth="10"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="m131.2 55.8 19.4 14.7L165.3 51"
            stroke="var(--c-2)"
            strokeWidth="10"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "whatsapp":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -293.4 1172.9 1474.5"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: "40px",
            width: "40px",
            marginLeft: "-8px",
          }}
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          clipRule="evenodd"
          className="pb-2"
        >
          <path
            fill="#00E676"
            fillRule="nonzero"
            d="m308.7 1021.5 19.1 9.6a499.7 499.7 0 0 0 258.3 70.2c279.7-.6 509.5-231 509.5-510.8a511 511 0 0 0-149.1-360.7A507.8 507.8 0 0 0 585 78.7c-278.5 0-507.6 229-507.6 507.5v6.6a523.8 523.8 0 0 0 76.7 268.1l12.7 19.2-51 188.3 192.8-47z"
          />
          <path
            fill="#fff"
            fillRule="nonzero"
            d="M1003.3 172.4A574.8 574.8 0 0 0 590.3 0h-1C269.4 0 6.2 263.1 6.2 582.9v4.5A616.8 616.8 0 0 0 83 877.8L0 1181.1l309.3-79.8a569.2 569.2 0 0 0 279 70.2c321-1.7 584-266.4 583.9-587.3.7-154.2-60-302.6-169-411.8m-413 900.2a474 474 0 0 1-245.5-67l-19.1-9.6-184.2 47.8 47.9-182-12.8-19a484.2 484.2 0 0 1-72.5-255c0-265.7 218.6-484.3 484.2-484.3 265.7 0 484.3 218.6 484.3 484.3A484.7 484.7 0 0 1 843.7 999a464.8 464.8 0 0 1-251.9 73.5m280.6-354.4-35.1-16s-51-22.3-83-38.2c-3.2 0-6.4-3.2-9.6-3.2a46.3 46.3 0 0 0-22.3 6.4c-6.8 4-3.2 3.2-47.9 54.2-3 6-9.3 9.7-16 9.6h-3.2a24.3 24.3 0 0 1-12.7-6.4l-16-6.4a310 310 0 0 1-92.6-60.6c-6.3-6.4-16-12.8-22.3-19.2a357.1 357.1 0 0 1-60.7-76.6l-3.1-6.4a46.5 46.5 0 0 1-6.4-12.7 24 24 0 0 1 3.2-16c2.9-4.8 12.7-16 22.3-25.5 9.6-9.6 9.6-16 16-22.4a39.3 39.3 0 0 0 6.4-31.9 1246.4 1246.4 0 0 0-51.1-121.3 37.1 37.1 0 0 0-22.4-16h-35c-6.5 0-12.8 3.2-19.2 3.2l-3.2 3.2c-6.4 3.2-12.8 9.6-19.2 12.8-6.4 3.2-9.6 12.8-16 19.1a162.8 162.8 0 0 0-35 99 189 189 0 0 0 16 73.4l3.1 9.6a532.1 532.1 0 0 0 118.1 162.8l12.8 12.8a193 193 0 0 1 25.5 25.5 570 570 0 0 0 229.5 121.3c9.6 3.2 22.4 3.2 32 6.4h31.9a118.1 118.1 0 0 0 47.9-12.8c7.8-3.5 15.2-7.8 22.3-12.7l6.4-6.4c6.4-6.4 12.8-9.6 19.1-16a84.4 84.4 0 0 0 16-19.1 183 183 0 0 0 12.8-44.7v-22.4a40.1 40.1 0 0 0-9.6-6.4"
          />
        </svg>
      );
    case "whatsappF":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -293.4 1172.9 1474.5"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: "40px",
            width: "40px",
            marginLeft: "-8px",
          }}
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          clipRule="evenodd"
          className="pb-2"
        >
          <path
            fill="#ffffff"
            fillRule="nonzero"
            d="m308.7 1021.5 19.1 9.6a499.7 499.7 0 0 0 258.3 70.2c279.7-.6 509.5-231 509.5-510.8a511 511 0 0 0-149.1-360.7A507.8 507.8 0 0 0 585 78.7c-278.5 0-507.6 229-507.6 507.5v6.6a523.8 523.8 0 0 0 76.7 268.1l12.7 19.2-51 188.3 192.8-47z"
          />
          <path
            fill="#000000"
            fillRule="nonzero"
            d="M1003.3 172.4A574.8 574.8 0 0 0 590.3 0h-1C269.4 0 6.2 263.1 6.2 582.9v4.5A616.8 616.8 0 0 0 83 877.8L0 1181.1l309.3-79.8a569.2 569.2 0 0 0 279 70.2c321-1.7 584-266.4 583.9-587.3.7-154.2-60-302.6-169-411.8m-413 900.2a474 474 0 0 1-245.5-67l-19.1-9.6-184.2 47.8 47.9-182-12.8-19a484.2 484.2 0 0 1-72.5-255c0-265.7 218.6-484.3 484.2-484.3 265.7 0 484.3 218.6 484.3 484.3A484.7 484.7 0 0 1 843.7 999a464.8 464.8 0 0 1-251.9 73.5m280.6-354.4-35.1-16s-51-22.3-83-38.2c-3.2 0-6.4-3.2-9.6-3.2a46.3 46.3 0 0 0-22.3 6.4c-6.8 4-3.2 3.2-47.9 54.2-3 6-9.3 9.7-16 9.6h-3.2a24.3 24.3 0 0 1-12.7-6.4l-16-6.4a310 310 0 0 1-92.6-60.6c-6.3-6.4-16-12.8-22.3-19.2a357.1 357.1 0 0 1-60.7-76.6l-3.1-6.4a46.5 46.5 0 0 1-6.4-12.7 24 24 0 0 1 3.2-16c2.9-4.8 12.7-16 22.3-25.5 9.6-9.6 9.6-16 16-22.4a39.3 39.3 0 0 0 6.4-31.9 1246.4 1246.4 0 0 0-51.1-121.3 37.1 37.1 0 0 0-22.4-16h-35c-6.5 0-12.8 3.2-19.2 3.2l-3.2 3.2c-6.4 3.2-12.8 9.6-19.2 12.8-6.4 3.2-9.6 12.8-16 19.1a162.8 162.8 0 0 0-35 99 189 189 0 0 0 16 73.4l3.1 9.6a532.1 532.1 0 0 0 118.1 162.8l12.8 12.8a193 193 0 0 1 25.5 25.5 570 570 0 0 0 229.5 121.3c9.6 3.2 22.4 3.2 32 6.4h31.9a118.1 118.1 0 0 0 47.9-12.8c7.8-3.5 15.2-7.8 22.3-12.7l6.4-6.4c6.4-6.4 12.8-9.6 19.1-16a84.4 84.4 0 0 0 16-19.1 183 183 0 0 0 12.8-44.7v-22.4a40.1 40.1 0 0 0-9.6-6.4"
          />
        </svg>
      );
    case "warranty":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 141.6 159.5"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <path
            d="M15.1 90.9 69 37.1M22.2 108.9 69 62M31.3 124.7l37.1-37.1M46.5 134.5 71 110M133.7 47.3 97.4 11M132.8 71.4 74.7 13.3M127.3 90.9 73.5 37.1"
            stroke="var(--c-2)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="m76 152.9-6.3-1.8A88 88 0 0 1 5.5 70.7l-.2-5.3H76V153ZM16 75.4a78 78 0 0 0 50 64v-64H16Z"
            stroke="#fff"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M136.3 75.4H66V5h5c20.6 0 41.3 2 61.6 5.9l4 .7v59.1l-.3 4.8ZM76 65.4h50.6V20A317 317 0 0 0 76 15v50.4Z"
            stroke="#fff"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M71 71.4v74.9a83.2 83.2 0 0 0 60.5-74.9H71ZM10.4 14.9 71 10v60.4H10.4V14.9z"
            fill="#303a44"
          />
          <path
            d="M71 10c-20.7 0-41 2-60.6 5.8v50.4a83.2 83.2 0 0 0 60.6 80c35-9.8 60.6-41.9 60.6-80V15.8A321.1 321.1 0 0 0 71 10ZM71 10v136.3M10.4 70.4h121.2"
            stroke="var(--c-2)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "support":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 185 157.4"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <circle cx="92.5" cy="78.7" r="58.5" fill="#303a44" />
          <path
            d="M53.8 102.8v-7.1l6.5-5.9c11-9.8 16.3-15.4 16.4-21.3 0-4-2.4-7.3-8.2-7.3-4.3 0-8.1 2.2-10.8 4.2L54.4 57c3.8-2.9 9.7-5.2 16.5-5.2 11.3 0 17.6 6.6 17.6 15.7 0 8.5-6.1 15.2-13.4 21.7L70.5 93v.2h18.9v9.6H53.8ZM117.4 102.8v-12H95.2v-7.6l19-30.6h14.3V82h6v8.8h-6v12h-11.1Zm0-20.8V71c0-3 .1-6.2.4-9.4h-.3l-4.6 9.3-6.8 11v.1h11.3Z"
            fill="#fff"
          />
          <path
            d="M48.7 21.9a71.7 71.7 0 0 1 115.4 56.8M25.3 53.4c.8-2 1.6-4 2.6-6"
            stroke="var(--c-2)"
            strokeWidth="8"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="m179.4 60.2-14.5 19.3L145.6 65M5.6 100.7l15-19.9 20 15"
            stroke="var(--c-2)"
            strokeWidth="8"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M136.3 135.2a71.7 71.7 0 0 1-116-56.5M151 119.7c-3.3 4.7-7 9-11.3 12.7M159.2 104a69 69 0 0 1-3 7"
            stroke="var(--c-2)"
            strokeWidth="8"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case "global":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 142 167.3"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          {/* dark outline + stand */}
          <path
            d="M113.5 9.8A73.3 73.3 0 1 1 9.8 113.5M61.7 135v25.3M25 160.3h73.3"
            fill="none"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeMiterlimit="4"
          />
          {/* red rings */}
          <circle
            cx="61.7"
            cy="61.7"
            r="54.7"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <ellipse
            cx="61.7"
            cy="61.7"
            rx="54.7"
            ry="29"
            transform="rotate(-45 61.7 61.7)"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <path
            d="m23 23 77.3 77.3"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "supportHelp":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120.09 153.55"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <path
            d="M104.69 62.8v-13.48c0-24.65-19.99-44.64-44.64-44.64S15.41 24.66 15.41 49.32v13.48"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="10"
            strokeLinejoin="round"
          />
          <rect
            x="4.68"
            y="62.8"
            width="15.85"
            height="29.18"
            rx="1.87"
            ry="1.87"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="10"
            strokeLinejoin="round"
          />
          <rect
            x="99.57"
            y="62.8"
            width="15.85"
            height="29.18"
            rx="1.87"
            ry="1.87"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="9.36"
            strokeLinejoin="round"
          />
          <path
            d="M107.43 91.98s2.42 34.53-17.7 49.5"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="9.36"
            strokeLinejoin="round"
          />
          <line
            x1="93.99"
            y1="137.7"
            x2="80.91"
            y2="148.5"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="13.1"
            strokeLinejoin="round"
          />

          {/* dark outer shell */}
          <path
            d="M23.33 50.8v45.65c0 20.28 16.44 36.72 36.72 36.72s36.72-16.44 36.72-36.72V50.8H23.33Z"
            fill="none"
            stroke="#303a44"
            strokeWidth="9.36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* dark filled parts */}
          <path
            d="M110.25 68.54s-80.73-3.16-70.53-28.45c7.86-19.48 30.01-28.9 49.49-21.04 19.48 7.86 25.54 38.07 21.04 49.49Z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="9.36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.26 65.98s55.66-28.75 40.18-43.16c-11.92-11.1-30.57-10.43-41.67 1.49-11.1 11.92-5.43 35.13 1.49 41.67Z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="9.36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "satisfaction":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 162.7 141.3"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <path
            d="M84.5 141.2a43.1 43.1 0 1 0 0-86.2H43.3a4.7 4.7 0 0 0-4.7 4.7v76.7c0 2.7 2.1 4.8 4.7 4.8h41.2Z"
            fill="#303a44"
          />
          <rect
            x="10"
            y="121"
            width="52"
            height="20.3"
            rx="5"
            ry="5"
            fill="#303a44"
          />
          <rect
            x="5"
            y="99"
            width="57"
            height="20.3"
            rx="5"
            ry="5"
            fill="#303a44"
          />
          <rect
            x="0"
            y="77"
            width="62"
            height="20.3"
            rx="5"
            ry="5"
            fill="#303a44"
          />
          <rect
            x="5"
            y="55"
            width="57"
            height="20.3"
            rx="5"
            ry="5"
            fill="#303a44"
          />
          <rect
            x="78"
            y="27.4"
            width="27.3"
            height="55.3"
            rx="5.5"
            ry="5.5"
            transform="rotate(-41 91.7 55)"
            fill="#303a44"
          />
          <path
            d="M91.2 53.5a5.8 5.8 0 0 1-4.9 6.7L74 62a5.8 5.8 0 0 1-6.6-5l-4-26.8C60 8 74.3.5 77.5.1S83.5 1.8 84 5l7.1 48.5Z"
            fill="#303a44"
          />
          <path
            d="M136 111.7h13.3M162.7 64H123v67.3h21.7"
            stroke="var(--c-1)"
            strokeWidth="8"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "sale":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 73.08 163.25"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          {/* Dark body (cls-2) */}
          <path
            d="M4.3,79.69v47.01c0,17.81,14.43,32.24,32.24,32.24s32.24-14.43,32.24-32.24V54.31L4.3,79.69Z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="8.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.54,14.47c12.19,0,22.07,9.88,22.07,22.07h10.17c0-17.81-14.43-32.24-32.24-32.24S4.3,18.73,4.3,36.54h10.17c0-12.19,9.88-22.07,22.07-22.07Z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="8.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="58.61"
            y="36.54"
            width="10.17"
            height="35.53"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="8.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Yellow accents (cls-1) */}
          <line
            x1="53.95"
            y1="86.72"
            x2="18.27"
            y2="137.66"
            fill="none"
            stroke="#ffffff"
            strokeWidth="6.88"
            strokeLinejoin="round"
          />
          <path
            d="M24.29,86.72c-3.32,0-6.02,2.69-6.02,6.02v4.51c0,3.32,2.69,6.02,6.02,6.02s6.02-2.69,6.02-6.02v-4.51c0-3.32-2.69-6.02-6.02-6.02Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="6.88"
            strokeLinejoin="round"
          />
          <path
            d="M47.93,121.11c-3.32,0-6.02,2.69-6.02,6.02v4.51c0,3.32,2.69,6.02,6.02,6.02s6.02-2.69,6.02-6.02v-4.51c0-3.32-2.69-6.02-6.02-6.02Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="6.88"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "email":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 180 111"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <rect y="7" width="180" height="104" rx="5" ry="5" fill="#303a44" />
          <polygon points="0 12 90 88 180 12 180 7 0 7 0 12" fill="#fff" />
          <line
            x1="44"
            y1="66"
            x2="12.88"
            y2="100.12"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="14"
            strokeMiterlimit="10"
          />
          <line
            x1="136.5"
            y1="66"
            x2="167.62"
            y2="100.13"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="14"
            strokeMiterlimit="10"
          />
          <polygon
            points="7 16 90 89 173 16 173 7 7 7 7 16"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="14"
            strokeMiterlimit="10"
          />
        </svg>
      );
    case "emailf":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 180 111"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <rect y="7" width="180" height="104" rx="5" ry="5" fill="#303a44" />
          <polygon points="0 12 90 88 180 12 180 7 0 7 0 12" fill="#fff" />
          <line
            x1="44"
            y1="66"
            x2="12.88"
            y2="100.12"
            fill="none"
            stroke="#ffffff"
            strokeWidth="14"
            strokeMiterlimit="10"
          />
          <line
            x1="136.5"
            y1="66"
            x2="167.62"
            y2="100.13"
            fill="none"
            stroke="#ffffff"
            strokeWidth="14"
            strokeMiterlimit="10"
          />
          <polygon
            points="7 16 90 89 173 16 173 7 7 7 7 16"
            fill="none"
            stroke="#ffffff"
            strokeWidth="14"
            strokeMiterlimit="10"
          />
        </svg>
      );
    case "card":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 178.67 115.33"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          {/* Main dark rectangle (monitor body) */}
          <rect
            x="7"
            y="7"
            width="164.67"
            height="101.33"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Yellow accent lines */}
          <line
            x1="7"
            y1="84.92"
            x2="39.74"
            y2="84.92"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="14"
            strokeMiterlimit="10"
          />
          <line
            x1="50.98"
            y1="84.92"
            x2="83.71"
            y2="84.92"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="14"
            strokeMiterlimit="10"
          />
          <line
            x1="94.95"
            y1="84.92"
            x2="127.69"
            y2="84.92"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="14"
            strokeMiterlimit="10"
          />
          <line
            x1="138.93"
            y1="84.92"
            x2="171.67"
            y2="84.92"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="14"
            strokeMiterlimit="10"
          />
          <line
            x1="7"
            y1="26.42"
            x2="83.71"
            y2="26.42"
            fill="none"
            stroke="var(--c-2)"
            strokeWidth="14"
            strokeMiterlimit="10"
          />

          {/* White rectangle in the middle */}
          <rect
            x="7"
            y="48.67"
            width="25.33"
            height="18"
            rx="5"
            ry="5"
            fill="#fff"
          />

          {/* White base lines */}
          <line
            x1="10"
            y1="104.67"
            x2="64.83"
            y2="104.67"
            fill="none"
            stroke="#fff"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="81.9"
            y1="104.67"
            x2="116.83"
            y2="104.67"
            fill="none"
            stroke="#fff"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "checkout":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 145.97 119.84"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          {/* Dark shapes with stroke */}
          <rect
            x="66.39"
            y="38.99"
            width="62"
            height="35.15"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="13.42"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="76.62"
            y="6.71"
            width="53.69"
            height="14.7"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="13.42"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon
            points="66.39 38.99 53.13 38.83 53.13 52.41 29.08 62.64 29.08 74.14 66.39 74.14 66.39 38.99"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="13.42"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="6.71"
            y="91.08"
            width="132.54"
            height="22.05"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="13.42"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Solid dark fills (no stroke) */}
          <rect
            x="123.28"
            y="21.41"
            width="7.03"
            height="17.58"
            fill="#303a44"
          />
          <rect
            x="113.69"
            y="21.41"
            width="7.03"
            height="17.58"
            fill="#303a44"
          />

          {/* White strokes */}
          <polyline
            points="113.69 38.03 113.69 47.78 90.68 58.16 90.68 74.14"
            fill="none"
            stroke="#fff"
            strokeWidth="3.83"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="74.38"
            y1="89.16"
            x2="74.38"
            y2="115.69"
            fill="none"
            stroke="#fff"
            strokeWidth="3.83"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="26.68"
            y1="102.1"
            x2="44.42"
            y2="102.1"
            fill="none"
            stroke="#fff"
            strokeWidth="3.83"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="90.68"
            y1="58.16"
            x2="32.2"
            y2="58.16"
            fill="none"
            stroke="#fff"
            strokeWidth="3.83"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Yellow accent */}
          <line
            x1="76.62"
            y1="14.06"
            x2="130.31"
            y2="14.06"
            fill="none"
            stroke="#ffce00"
            strokeWidth="13.42"
            strokeMiterlimit="10"
          />
        </svg>
      );
    case "chat":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 163.64 119.96"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          {/* Dark stroke structure */}
          <polyline
            points="120.95 72.57 131.27 72.57 150.84 92.14 150.84 72.57 159.37 72.57 159.37 4.27 45.54 4.27 45.54 13.7"
            fill="none"
            stroke="#303a44"
            strokeWidth="8.54"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Yellow outline speech bubble */}
          <polygon
            points="108.5 25.61 5.34 25.61 5.34 86.8 14.23 86.8 14.23 107.08 34.51 86.8 108.5 86.8 108.5 25.61"
            fill="none"
            stroke="#ffce00"
            strokeWidth="10.67"
            strokeMiterlimit="10"
          />

          {/* Yellow message lines */}
          <line
            x1="56.92"
            y1="40.2"
            x2="56.92"
            y2="62.61"
            fill="none"
            stroke="#ffce00"
            strokeWidth="10.67"
            strokeMiterlimit="10"
          />
          <line
            x1="56.92"
            y1="67.41"
            x2="56.92"
            y2="73.46"
            fill="none"
            stroke="#ffce00"
            strokeWidth="10.67"
            strokeMiterlimit="10"
          />
        </svg>
      );
    case "bike":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 177.24 109.18"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          {/* Yellow wheels */}
          <circle
            cx="35.56"
            cy="73.62"
            r="30.45"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="10.21"
            strokeMiterlimit="10"
          />
          <circle
            cx="141.68"
            cy="73.62"
            r="30.45"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="10.21"
            strokeMiterlimit="10"
          />

          {/* Dark frame */}
          <path
            d="M35.56,73.62L54.05,13.44s2.36-8.34,8.88-8.34h12.69"
            fill="none"
            stroke="#303a44"
            strokeWidth="10.21"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M50.76,24.13h68.36l22.56,49.49h-42.86c-2.78,0-6.86-1.42-10.33-4.9-6.61-6.61-39.3-39.3-39.3-39.3"
            fill="none"
            stroke="#303a44"
            strokeWidth="10.21"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="97.55"
            y1="73.62"
            x2="122.32"
            y2="13.99"
            fill="none"
            stroke="#303a44"
            strokeWidth="10.21"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Yellow accents */}
          <path
            d="M134.54,20.63v-5.58c0-4.05-4.13-4.13-4.13-4.13h-25.86s-1.88,0-1.88,2.05v3.96"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="10.21"
            strokeMiterlimit="10"
          />
          <path
            d="M35.56,90.57c-9.36,0-16.94-7.59-16.94-16.94"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="10.21"
            strokeMiterlimit="10"
          />
          <path
            d="M158.63,73.62c0,9.36-7.59,16.94-16.94,16.94"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="10.21"
            strokeMiterlimit="10"
          />
        </svg>
      );
    case "home":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 198 166.5"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <path
            d="M68 159.5h62"
            fill="none"
            stroke="#ffce00"
            strokeMiterlimit="4"
            strokeWidth="4"
          />
          <path
            d="M5 99 95.5 8.5c2-2 5-2 7 0L193 99"
            fill="none"
            stroke="#ffce00"
            strokeMiterlimit="4"
            strokeWidth="4"
          />
          <path
            d="M163.8 69.8a5 5 0 0 0-1.5-1.5L98 6 35.6 68.3a5 5 0 0 0-2.3 4.2v82a5 5 0 0 0 5 5h121.4a5 5 0 0 0 5-5v-82c0-1-.3-2-.9-2.7ZM65.2 29.6V18.3a5 5 0 0 0-5-5H48.5a5 5 0 0 0-5 5v33.1l21.7-21.6Z"
            fill="#303a44"
          />
          <path
            d="M115 154.5v-40a5 5 0 0 0-5-5H88a5 5 0 0 0-5 5v40a5 5 0 0 1-5 5h42a5 5 0 0 1-5-5Z"
            fill="#fff"
          />
          <circle cx="99" cy="53" r="12" fill="#fff" />
        </svg>
      );
    case "accessories3":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <path
            d="M19 60 4 45a3.5 3.5 0 0 1-1-2.5A3.5 3.5 0 0 1 6.5 39 3.5 3.5 0 0 1 9 40l15 15a3.5 3.5 0 0 1 1 2.5 3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1-2.5-1Z"
            fill="#545454"
          />
          <path
            d="M8.9 31.8h38.2v8.5H8.9z"
            fill="#e8594a"
            transform="rotate(-45 28 36)"
          />
          <path
            d="M39.9 16.6h10.6v4.2H39.9z"
            fill="#d1d1cf"
            transform="rotate(-45 45.2 18.8)"
          />
          <path
            d="M47.2 13.6h2.1v4.2h-2.1z"
            fill="#bdbdbb"
            transform="rotate(-45 48.2 15.8)"
          />
          <path
            d="M48.3 1.2h5v24h-5z"
            fill="#545454"
            transform="rotate(-45 50.8 13.3)"
          />
          <path
            d="M18 40.8h2v8.5h-2z"
            fill="#c43d37"
            transform="rotate(-45 19 45)"
          />
          <path
            d="M6 41.6h2v2.8H6z"
            fill="#6b6b6b"
            transform="rotate(-45 7 43)"
          />
          <path
            d="M20 55.6h2v2.8h-2z"
            fill="#6b6b6b"
            transform="rotate(-45 21 57)"
          />
          <path
            d="M35.3 25.7h2v2h-2z"
            fill="#ed8074"
            transform="rotate(-45 36.3 26.7)"
          />
          <path
            d="M24.3 31.9h11.5v2H24.3z"
            fill="#ed8074"
            transform="rotate(-45 30 33)"
          />
          <path
            d="m36.7 52.7-1.4-1.4 19.5-19.5a2.5 2.5 0 0 0-3.6-3.6l-22 22a4.5 4.5 0 0 1-6.4 0l-1.5-1.5 1.4-1.4 1.5 1.5a2.5 2.5 0 0 0 3.6 0l22-22a4.5 4.5 0 0 1 6.4 6.4Z"
            fill="#545454"
          />
          <path
            d="m34 61-2.1-2.1a4 4 0 0 1 0-5.7l3.3-3.2 2.8 2.8-3 3.2 2 2Z"
            fill="#6b6b6b"
          />
        </svg>
      );
    case "bike-city":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <path
            d="M13 48a11 11 0 1 1 11-11 11 11 0 0 1-11 11Zm0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9ZM51 48a11 11 0 1 1 11-11 11 11 0 0 1-11 11Zm0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9ZM32 12a1 1 0 0 0 1 1h5v-2h-5a1 1 0 0 0-1 1Z"
            fill="#32012f"
          />
          <path
            d="M28 40c-6 0-15.8-2-16.2-2a1 1 0 0 1-.7-1.5A39.2 39.2 0 0 1 43 20v2a37.1 37.1 0 0 0-29.3 14.3A96.1 96.1 0 0 0 28 38c3.7 0 6-4 8.4-7.8 2.2-3.7 4.2-7.2 7.6-7.2v2c-2.2 0-4 3-6 6.2C35.7 35.3 33 40 28 40Z"
            fill="var(--c-1)"
          />
          <path
            d="M24.5 19.4h2v20.2h-2z"
            fill="var(--c-1)"
            transform="rotate(-20 25.5 29.5)"
          />
          <path
            d="m48.9 31.5-5.7-13.3 1.5-1.5a1 1 0 0 0 .3-1l-1-4a1 1 0 0 0-1-.7h-5v2h4.2l.7 2.7-1.6 1.6a1 1 0 0 0-.2 1l6 14a1 1 0 0 0 0 .2l3 5 1.8-1Z"
            fill="var(--c-1)"
          />
          <path
            d="M17 18.2a1.6 1.6 0 0 0 .7 1.3l1.2.7a3 3 0 0 0 2.4.4l4.9-1.4a1.1 1.1 0 0 0 .8-1 1.1 1.1 0 0 0-1.1-1.2H20l-1-.3a1.6 1.6 0 0 0-2 1.5Z"
            fill="#32012f"
          />
          <path
            d="M29 43a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z"
            fill="#e3dfcf"
          />
          <path
            d="M35 45h-4a1 1 0 0 1-1-.6l-2-5 2-.8 1.7 4.4H35Z"
            fill="#e3dfcf"
          />
        </svg>
      );
    case "bike-folding":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <path
            d="M12 35a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 14a5 5 0 1 1 5-5 5 5 0 0 1-5 5ZM52 35a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 14a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"
            fill="#32012f"
          />
          <path
            d="m25.3 39-.6-2 19.1-5.7-.5-2-20 5.7-.6-2 21-6a1 1 0 0 1 1.3.8l1 4a1 1 0 0 1-.7 1.2Z"
            fill="var(--c-1)"
          />
          <path
            d="M27 47a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z"
            fill="#e3dfcf"
          />
          <path
            d="M11 47a1 1 0 0 1-.9-.6l-1-2a1 1 0 0 1 .3-1.2l13-10 1.2 1.6-12.3 9.5.3.6L26.8 42l.4 2-16 3a1 1 0 0 1-.2 0Z"
            fill="var(--c-1)"
          />
          <path
            d="M33 50h-3a1 1 0 0 1-.9-.6l-3-6 1.8-.8 2.7 5.4H33Z"
            fill="#e3dfcf"
          />
          <path
            d="M21 17.4h2V44h-2z"
            fill="var(--c-1)"
            transform="rotate(-22 22 30.7)"
          />
          <path
            d="m32.3 40-.6-2 2-.7-1.7-6 2-.6 2 7a1 1 0 0 1-.7 1.2ZM27.9 43.4l-1.8-.8 2.7-6.4 2.1.2-3 7z"
            fill="var(--c-1)"
          />
          <path
            d="M13 40.8h2v5.4h-2z"
            fill="var(--c-1)"
            transform="rotate(-22 14 43.5)"
          />
          <path
            d="M41.3 12.8h2v15.4h-2z"
            fill="var(--c-1)"
            transform="rotate(-13 42.3 20.5)"
          />
          <path
            d="m39 26.2-1-4a1 1 0 0 1 .8-1.2l5.7-1.2.4 2-4.7 1 .8 3ZM51.2 44.5l-5-7.5a14.2 14.2 0 0 1-2.2-4.8l2-.4a12.2 12.2 0 0 0 1.8 4l5 7.6Z"
            fill="var(--c-1)"
          />
          <path
            d="M12 18a2.6 2.6 0 0 0 2 2.5l.9.2a4 4 0 0 0 2.2 0L19 20h2.5a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5H13a1 1 0 0 0-1 1Z"
            fill="#32012f"
          />
          <circle cx="40" cy="13" r="2" fill="#32012f" />
        </svg>
      );
    case "accessories2":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <path
            d="m61 41-22 3H25L3 41v4l21 4.6a6 6 0 0 0 2.2.4h11.6a6 6 0 0 0 2.3-.4L61 45Z"
            fill="#616161"
          />
          <path
            d="M46.9 43c-6.5 3.8-14.6 5.9-21.8 6.9a6 6 0 0 0 1 .1h11.7a6 6 0 0 0 2.3-.4L61 45v-4Z"
            fill="#545454"
          />
          <path
            d="m61 14-17.3 3.6a6 6 0 0 0-3 1.7 6 6 0 0 1-4.2 1.7h-9a6 6 0 0 1-4.2-1.7 6 6 0 0 0-3-1.7L3 14v4l13.9 3.5a7.8 7.8 0 0 1 3.6 2l1.2 1.2a7.8 7.8 0 0 0 5.5 2.3h10a7.8 7.8 0 0 0 6.2-3 7.8 7.8 0 0 1 4.2-2.6L61 18Z"
            fill="#616161"
          />
          <path
            d="m61 27-22 5H25L3 27v4l21 6.6a6 6 0 0 0 2.2.4h11.6a6 6 0 0 0 2.3-.4L61 31Z"
            fill="#616161"
          />
          <path
            d="M46.2 30.4c-7 4-16 6-23.3 6.8l1 .4a6 6 0 0 0 2.3.4h11.6a6 6 0 0 0 2.3-.4L61 31v-4Z"
            fill="#545454"
          />
          <path
            d="M27 21h2v2h-2zM27 25h2v2h-2zM35 21h2v2h-2zM35 25h2v2h-2zM31 21h2v2h-2zM31 25h2v2h-2zM27 32h2v2h-2zM27 36h2v2h-2zM35 32h2v2h-2zM35 36h2v2h-2zM31 32h2v2h-2zM31 36h2v2h-2zM27 44h2v2h-2zM27 48h2v2h-2zM35 44h2v2h-2zM35 48h2v2h-2zM31 44h2v2h-2zM31 48h2v2h-2z"
            fill="#b3b3b2"
          />
          <path
            d="M53.2 15.6c-8.3 6.7-21.3 9.1-30.5 10a7.8 7.8 0 0 0 4.5 1.4h10a7.8 7.8 0 0 0 6.2-3 7.8 7.8 0 0 1 4.2-2.6L61 18v-4Z"
            fill="#545454"
          />
        </svg>
      );
    case "accessories1":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <path
            d="M51.4 33.9 42 45h-2L28 32.4l-4.4 1.2L37 48l2 3v10h4V51l2-3 10-12-3.6-2.1z"
            fill="#e3dfcf"
          />
          <path d="m37 48 3-3h2l3 3-2 3h-4l-2-3z" fill="#32012f" />
          <path
            d="M4 35A32 32 0 0 1 33 3.2a34 34 0 0 1 5-.2h16l-1 4 .6.6A25.7 25.7 0 0 1 61 23l-4 8H37l-11 4Z"
            fill="var(--c-1)"
          />
          <path
            d="M4.4 30.1a32.3 32.3 0 0 0-.4 5h22l11-4h20l4-8.1a25.7 25.7 0 0 0-5.5-13.2C41.8 22.2 17.1 28 4.4 30.1Z"
            fill="var(--c-1)"
          />
          <path
            d="M43 27h3a10 10 0 0 0 8-4H38.7a11 11 0 0 0-8.4 4H43ZM40.8 7A33.4 33.4 0 0 0 13 22l-3.4 5h1.3a6.5 6.5 0 0 0 5.4-2.9 29.4 29.4 0 0 1 24.5-13h2.4a6 6 0 0 0 5.6-4h-8Z"
            fill="#32012f"
          />
          <path
            d="M39 15a21 21 0 0 0-17.3 9l-2 3h4a1.6 1.6 0 0 0 1.3-.7A17 17 0 0 1 39 19h8.8a6 6 0 0 0 5.6-4H39Z"
            fill="#32012f"
          />
          <path
            d="m33 24.6 3.3 2.4h6a48.2 48.2 0 0 0-4.5-4 10.9 10.9 0 0 0-4.7 1.6ZM20.4 14A33.3 33.3 0 0 0 17 17l4.3 1.5a29.5 29.5 0 0 1 3.7-2.9c-1.5-.7-3-1.2-4.5-1.7ZM29 17.6a21 21 0 0 0-3.9 2.6l4 2a17 17 0 0 1 4.2-2.2c-1.4-.9-2.9-1.7-4.3-2.4ZM43 23a44.2 44.2 0 0 1 2.7 4h.3a10 10 0 0 0 3.8-.7L48 23ZM37.6 11.2A65.8 65.8 0 0 0 33.4 8a33.5 33.5 0 0 0-5 1.5c1.3.8 2.7 1.8 4 2.9a29.4 29.4 0 0 1 5.2-1ZM36 15.3c1.3 1.1 2.6 2.4 3.8 3.7h5.3a54.6 54.6 0 0 0-3.5-4h-2.7a21 21 0 0 0-2.9.3Z"
            fill="var(--c-1)"
          />
          <path d="m42 31 8 4 4 5h3v-9H42z" fill="#32012f" />
          <path d="M57 33v-2H42l3.9 2H57z" fill="#32012f" />
        </svg>
      );
    case "bike-mountain":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <path
            d="M14 28a11 11 0 1 0 11 11 11 11 0 0 0-11-11Zm0 19a8 8 0 1 1 8-8 8 8 0 0 1-8 8ZM50 28a11 11 0 1 0 11 11 11 11 0 0 0-11-11Zm0 19a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"
            fill="#32012f"
          />
          <path
            d="M49.8 38.2 43.4 20H47v-2h-5a1 1 0 0 0-1 1.3l.7 1.8c-4.6.9-11.8 5.6-14.3 7.4l-3.5-8.9-1.8.8L26 31H24a1 1 0 0 0-.6.2l-10 8A1 1 0 0 0 14 41h15v-.2c2.7-.9 5.2-5.2 8.1-10.7a28.4 28.4 0 0 1 2.6-4.4 6.1 6.1 0 0 1 3-1.5l5.4 15.1a1 1 0 0 0 .6.6l3 1 .6-1.9Zm-33 .8 7.6-6h2.5l.1.2V39Zm18.6-9.8c-1.7 3-4.4 8-6.4 9.4V33a1 1 0 0 0 0-.4l-1-2.2a71.5 71.5 0 0 1 10.1-6 30 30 0 0 0-2.8 4.8Z"
            fill="var(--c-1)"
          />
          <path
            d="M28 43a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z"
            fill="#e3dfcf"
          />
          <path
            d="M34 48h-3a1 1 0 0 1-1-.6l-3-7 2-.8 2.7 6.4H34Z"
            fill="#e3dfcf"
          />
          <path
            d="m23.9 19.6-1.8.8.6 1.5 2-.3-.8-2zM44.3 20H47v-2h-2.7a3.2 3.2 0 0 0 0 2Z"
            fill="var(--c-1)"
          />
          <circle cx="47" cy="19" r="2" fill="#32012f" />
          <path
            d="M19 18v.5a2.4 2.4 0 0 0 1.3 2.2 2.4 2.4 0 0 0 1.4.2l5.4-.8a1 1 0 0 0 .9-1 1 1 0 0 0-1-1.1Z"
            fill="#32012f"
          />
        </svg>
      );
    case "bike-delivery":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <path d="m36.8 32.6-5.5 5.7 3 3.1 5.4-5.8-2.9-3z" fill="#e86702" />
          <path
            d="m34.3 35.2-1.4 1.5 3.2 2.8 1.3-1.4-3.1-2.9z"
            fill="#32012f"
          />
          <path
            d="M14 33a11 11 0 1 0 11 11 11 11 0 0 0-11-11Zm0 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7ZM50 33a11 11 0 1 0 11 11 11 11 0 0 0-11-11Zm0 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7Z"
            fill="#32012f"
          />
          <path
            d="M30 47a1 1 0 0 1-.1 0l-16-2a1 1 0 0 1-.6-1.7l12-13a1 1 0 0 1 .5-.3l18-4 .4 2-17.7 4-10.4 11.2L29.6 45l14.7-15.6 1.4 1.4-15 16a1 1 0 0 1-.7.3Z"
            fill="var(--c-1)"
          />
          <path
            d="M26 23.6h2v22.8h-2z"
            fill="var(--c-1)"
            transform="rotate(-15 27 35)"
          />
          <path
            d="M43 21a1 1 0 0 0-1 1.3l3 11 4 12 2-.6-4-12-2.7-9.7H47v-2Z"
            fill="var(--c-1)"
          />
          <path
            d="m49.6 26.6-1.8.4.4 2 2-.5a3.8 3.8 0 0 0-1-7.5H47v2h2.2a1.8 1.8 0 0 1 .4 3.6Z"
            fill="#32012f"
          />
          <path
            d="M16 46h-6a4 4 0 0 1-4-4V30h14v12a4 4 0 0 1-4 4Z"
            fill="var(--c-1)"
          />
          <path d="M10 35h6v2h-6zM3 31h3v2H3z" fill="#e3dfcf" />
          <path
            d="M30 50a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z"
            fill="#e3dfcf"
          />
          <path
            d="M37 53h-4a1 1 0 0 1-.9-.6l-3-6 1.8-.8 2.7 5.4H37Z"
            fill="#e3dfcf"
          />
          <path
            d="m19.7 23.3 2.4 1.3a2 2 0 0 0 1.8 0l4.3-1.3a1.1 1.1 0 0 0 .8-1.1 1.1 1.1 0 0 0-1.1-1.2h-7.7a1.2 1.2 0 0 0-1.2 1.2 1.2 1.2 0 0 0 .7 1.1Z"
            fill="#32012f"
          />
        </svg>
      );
    case "accessories4":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <path d="M29 3h6v8h-6z" fill="#cf5b00" />
          <path d="M26 2h12v2H26z" fill="#e86702" />
          <path
            d="M44 20a1 1 0 0 1-.4 0 1 1 0 0 1-.6-1V7.8A5.8 5.8 0 0 1 48.8 2h.4A5.8 5.8 0 0 1 53 12.2l-8.4 7.5a1 1 0 0 1-.7.3Zm4.8-16A3.8 3.8 0 0 0 45 7.8v9l6.7-6.1A3.8 3.8 0 0 0 49.2 4Z"
            fill="#cf5b00"
          />
          <path
            d="M43.4 14a4 4 0 0 0-3.5-3.4L35 10h-6l-5 .6a4 4 0 0 0-3.4 3.5L20 18v2h24v-2Z"
            fill="#e86702"
          />
          <path
            d="M40 61H24a4 4 0 0 1-4-4V38a4.8 4.8 0 0 0 0-8V19h24v11a4.8 4.8 0 0 0 0 8v19a4 4 0 0 1-4 4Z"
            fill="#e86702"
          />
          <path d="M23 22h2v2h-2z" fill="#f59951" />
          <path
            d="M31 14h2v5h-2zM35 14h2v5h-2zM39 14h2v5h-2zM27 14h2v5h-2zM23 14h2v5h-2z"
            fill="#cf5b00"
          />
          <path d="M23 26h2v3h-2z" fill="#f59951" />
          <path d="M20 18h24v2H20z" fill="#cf5b00" />
          <path d="M29 4h6v2h-6z" fill="#bf5400" />
          <path
            d="M44 30v-6.4A68.3 68.3 0 0 1 20 53V57a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V38a4.8 4.8 0 0 1 0-8Z"
            fill="#de6302"
          />
        </svg>
      );
    case "scooter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-15 -15 130 130"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height,
            width,
          }}
        >
          <path
            fill="var(--c-1)"
            d="m80 70 2.4.3-9.5-53.7-6.5 1.1L75.7 71a10 10 0 0 1 4.3-1z"
          />
          <path
            fill="var(--c-1)"
            d="M73.7 59.3a21.7 21.7 0 0 0-15 17.4H29.3a10 10 0 0 1 0 6.6H65V80a15 15 0 0 1 9.9-14l-1.2-6.7z"
          />
          <path
            fill="var(--c-1)"
            d="M71.1 68c1.2-.9 2.4-1.5 3.8-2l-1.2-6.7c-1.3.4-2.6 1-3.8 1.6l1.2 7z"
          />
          <path fill="#32012f" d="m71.8 10 1.2 6.6-19.7 3.5-1.2-6.6z" />
          <path
            fill="var(--c-1)"
            d="M41.4 76.7A21.7 21.7 0 0 0 20 58.3V65c7.1 0 13 5 14.6 11.7h6.8z"
          />
          <path
            fill="#e3dfcf"
            d="M34.6 76.7h6.8c-.2-1.4-.6-2.8-1-4H33a15 15 0 0 1 1.6 4zM66.3 17.7l6.6-1.1.7 3.9-6.6 1.2zM75 67l.7 4a10 10 0 0 1 6.7-.7l-.7-4.2a14 14 0 0 0-6.7.8z"
          />
          <path
            fill="#ffffff"
            d="M76.7 80a3.3 3.3 0 1 0 6.6 0 3.3 3.3 0 0 0-6.6 0z"
          />
          <path
            fill="#32012f"
            d="M80 70a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 13.3a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6z"
          />
          <path
            fill="#ffffff"
            d="M79 82.3a3.3 3.3 0 0 1 4.2-3.2 3.3 3.3 0 1 0-4.1 4l-.2-.8z"
          />
          <path
            fill="var(--c-1)"
            d="M33.6 83.3a13.9 13.9 0 0 0 0-6.6h-4.2a10 10 0 0 1 0 6.6h4.2z"
          />
          <path
            fill="#ffffff"
            d="M16.7 80a3.3 3.3 0 1 0 6.6 0 3.3 3.3 0 0 0-6.6 0z"
          />
          <path
            fill="#32012f"
            d="M20 70a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 13.3a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6z"
          />
          <path
            fill="#ffffff"
            d="M19 82.3a3.3 3.3 0 0 1 4.2-3.2 3.3 3.3 0 1 0-4.1 4l-.2-.8z"
          />
        </svg>
      );

    // Non useful Icons
    case "business":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144 139.1"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M15.5 52.4h10v42h-10"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
          />
          <path
            d="M7 111.8h130v15.9H7zM137 35.9H7V27L72 7l65 20v8.9z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M128 52.4h-10v42h10M118 45.4v56M88 45.4v56M55.5 45.4v56"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
          />
          <circle cx="72" cy="23.4" r="9.2" fill="#fff" strokeWidth="0" />
          <path
            d="M41 123.2h61.5M25.5 132.1H118"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
          />
        </svg>
      );
    case "entertainment":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 166.3 182.6"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="m70.1 111.8-.6-1-.6-1-.2-.3c-12.2-19.3-28-22.8-32.5-31.6-4.9-9.6-2-15.7-8.2-28-4.6-9-12.8-13.9-18.3-11S3.4 51.2 8 60c6.3 12.4 13 13.5 17.9 23 4.5 8.9-2 23.7 6.5 44.9l.2.4.4 1 .5 1.1c0 .3.2.5.3.8a57.7 57.7 0 0 0 1.6 3.1c6.7 12.5 16.7 21 25.5 22.4a69 69 0 0 0 14.5-7.4c3.9-8 3-21-3.2-33.8l-.6-1.1-1-2-.5-.7Z"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M149.9 126.3a42.3 42.3 0 0 0 .4-2.2l.1-.4c4-22.5-5.4-35.7-2.8-45.3 2.8-10.3 9-12.8 12.7-26.2 2.6-9.7-.1-18.8-6-20.4s-13 4.8-15.7 14.5c-3.6 13.4.6 18.8-2.2 29.1C133.8 85 119 91.6 111 113l-.2.4c0 .4-.2.7-.3 1.1l-.4 1c0 .4-.2.6-.3 1a62.5 62.5 0 0 0-.9 3.3c-3.4 13.7-1.7 26.7 3.8 33.7a66 66 0 0 0 15.7 4.2c8.3-3.2 16.3-13.5 20.3-27.1l.4-1.3.5-2.1.2-.9Z"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M104.3 94.2l-.2-1.1-.2-1.2-.1-.4c-5-22.3-18.6-31-19.9-40.7-1.3-10.7 3.6-15.4 1.8-29.2-1.2-10-7.2-17.3-13.4-16.5-6.1.7-10.1 9.4-8.9 19.3 1.8 13.8 7.7 17.2 9 27.8 1.3 9.8-9.8 21.6-9 44.4v1.6l.1 1.1v1l.3 2 .2 1.4c2 14 8.6 25.3 16.3 29.7a67.5 67.5 0 0 0 16.2-2c6.4-6.2 9.9-18.8 8.4-32.9l-.1-1.3-.3-2.2-.2-.8Z"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M25.3 79.6l10.1-5.2M30.3 90.8l10-5.2M72.1 46.3l11.2-1.7M73.1 58.5l11.2-1.6M138.9 70l11.8 3.6M133.4 80.9l13.9 4.4"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <circle
            cx="92.6"
            cy="136.2"
            r="43.9"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "featured":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 85 144"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            x="10"
            y="5"
            width="65"
            height="13"
            rx="2"
            ry="2"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="m34 82 8.5 57L51 82"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M66.5 18h-48l-5 63h58l-5-63z"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M0 81h85"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M17.4 32.1h25.1M17.4 49h25.1M17.4 66h25.1"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "evaluating":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 135.6 150.9"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <circle cx="69" cy="75.5" r="27.3" fill="#303a44" strokeWidth="0" />
          <path
            d="M83 41.5C80.3 19.7 75 5 69 5c-8.8 0-16 31.5-16 70.5s7.2 70.4 16 70.4c6 0 11.3-14.7 14-36.5"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M46.6 46.4C26.4 37.8 11 35 8 40.1c-4.4 7.7 19.4 29.6 53 49 33.7 19.5 64.6 29.1 69 21.5 3-5.2-7-17.1-24.6-30.4"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M32.6 80.3C15.1 93.6 5 105.5 8 110.7c4.4 7.6 35.3-2 69-21.4 33.7-19.5 57.4-41.4 53-49-3-5.3-18.4-2.5-38.5 6"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <circle cx="13.2" cy="53" r="13.2" fill="#303a44" strokeWidth="0" />
          <circle
            cx="59.4"
            cy="131.3"
            r="13.2"
            fill="#303a44"
            strokeWidth="0"
          />
          <circle
            cx="109.5"
            cy="39.9"
            r="13.2"
            fill="#303a44"
            strokeWidth="0"
          />
        </svg>
      );
    case "finance":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 152.9 158"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M130.9 96v50.7M118.7 142.3l24.5 8.7M34.3 142.3 9.7 151M22 96v50.7"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M7 7h138.9v88H7z"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M39.5 64.9 62 42.4l21.7 21.7 23.9-23.9"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M85.9 39.2h22.7v22.9"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case "focus":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 167.3 142"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M94.7 34.3h67.6V137H5V34.3h67.7"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M30.4 122c-6.3 0-8.7-4.6-8.7-4.6v-7.2c0-6.2 5-11.3 11.2-11.3l7.9-.8c0 5.8 10.4 9.4 10.4 9.4s10.4-3.6 10.4-9.4l7.9.8c6.2 0 11.2 5 11.2 11.3v7.2s-1.8 4.5-8.7 4.5H30.4Z"
            stroke="var(--c-1)"
            strokeWidth="6"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M93.3 56.1h35M93.3 76.1h55.4M93.3 96.1h35M93.3 116.1h55.4"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M38.5 61.7v15.7a12.7 12.7 0 1 0 25.3 0V61.7H38.5Z"
            stroke="#303a44"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M68.5 67.8s-27.9-1-24.4-9.8c2.7-6.8 10.4-10 17.1-7.3 6.8 2.7 8.9 13.1 7.3 17Z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <path
            d="M37.8 67S57 57 51.5 52a10.2 10.2 0 0 0-14.4.5c-3.8 4.1-1.8 12.1.5 14.4Z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <path
            d="M72.7 5h22v37.3h-22zM60.3 29h12.4M94.7 29H107"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case "food-drink":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 174 134.9"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="m45 121.5 44-44 8.5 8.3L53.3 130z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m107.5 60.7 13.9-13.9 41-41c8.8 8.7 8.8 23 0 31.7l-25 25-13.9 14-11.5-7.2-6.2 6-6.5-6.5"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="43.9"
            cy="24"
            r="2.9"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M118.1 71.4 106.5 59.7 89 42.4 57.4 10.6a19 19 0 0 0-26.8 0L5 36l62.6 62.6 30.7-30.8L110 79.5l8.1-8.1Z"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M78.2 88 22 31.8"
            fill="none"
            stroke="var(--c-1)"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <path
            d="m119.4 70.1-11.7 11.7c1.5-1.5 5-.5 7.7 2.2s3.6 6.1 2.1 7.7l2.9 2.8c1.5-1.5 5-.5 7.7 2.2s3.7 6.1 2.1 7.7l2.9 2.8c1.5-1.5 5-.5 7.7 2.2s3.7 6.1 2.1 7.7l2.9 2.8c1.5-1.5 5-.5 7.7 2.2s3.7 6.1 2.1 7.7l11.7-11.7-47.9-48Z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "health-wellness":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 161.5 118.4"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <circle cx="47.1" cy="44.1" r="40.5" fill="#303a44" strokeWidth="0" />
          <circle
            cx="114.3"
            cy="44.1"
            r="40.5"
            fill="#303a44"
            strokeWidth="0"
          />
          <path
            d="m90.7 44.1-10 74.3S19.6 87 9.3 58.5C-1 30.1 90.7 44.1 90.7 44.1Z"
            fill="#303a44"
            strokeWidth="0"
          />
          <path
            d="m70.7 44.1 10 74.3S142 87 152.2 58.5c10.3-28.4-81.5-14.4-81.5-14.4Z"
            fill="#303a44"
            strokeWidth="0"
          />
          <path
            d="M0 50.1h43.3l5.6 7.3 19.6-43.8 25 73 19.1-43.8 5.9 7.3h43"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "home-improvement":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 198 166.5"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M68 159.5h62"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M163.8 69.8a5 5 0 0 0-1.5-1.5L98 6 35.6 68.3a5 5 0 0 0-2.3 4.2v82a5 5 0 0 0 5 5h121.4a5 5 0 0 0 5-5v-82c0-1-.3-2-.9-2.7ZM65.2 29.6V18.3a5 5 0 0 0-5-5H48.5a5 5 0 0 0-5 5v33.1l21.7-21.6Z"
            fill="#303a44"
            strokeWidth="0"
          />
          <path
            d="M115 154.5v-40a5 5 0 0 0-5-5H88a5 5 0 0 0-5 5v40a5 5 0 0 1-5 5h42a5 5 0 0 1-5-5Z"
            fill="#fff"
            strokeWidth="0"
          />
          <circle cx="99" cy="53" r="12" fill="#fff" strokeWidth="0" />
          <path
            d="M78 149.5h42M5 99 95.5 8.5c2-2 5-2 7 0L193 99"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "reputation":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 138.1 138"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <circle
            cx="66"
            cy="72"
            r="5.3"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M69.2 39.2 66 39a33 33 0 1 0 32.8 29.8"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M80 12.6A61 61 0 1 0 125.3 58"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M66 72 106.1 31.9"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M82.3 55.7V28.3L105.6 5v27.4M82.4 55.7h27.4l23.3-23.2h-27.5"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case "freeDelivery":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 198 166.5"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M68 159.5h62"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M163.8 69.8a5 5 0 0 0-1.5-1.5L98 6 35.6 68.3a5 5 0 0 0-2.3 4.2v82a5 5 0 0 0 5 5h121.4a5 5 0 0 0 5-5v-82c0-1-.3-2-.9-2.7ZM65.2 29.6V18.3a5 5 0 0 0-5-5H48.5a5 5 0 0 0-5 5v33.1l21.7-21.6Z"
            fill="#303a44"
            strokeWidth="0"
          />
          <path
            d="M115 154.5v-40a5 5 0 0 0-5-5H88a5 5 0 0 0-5 5v40a5 5 0 0 1-5 5h42a5 5 0 0 1-5-5Z"
            fill="#fff"
            strokeWidth="0"
          />
          <circle cx="99" cy="53" r="12" fill="#fff" strokeWidth="0" />
          <path
            d="M78 149.5h42M5 99 95.5 8.5c2-2 5-2 7 0L193 99"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "legal":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 188.7 151.3"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            x="87.3"
            width="14"
            height="141.9"
            rx="5"
            ry="5"
            fill="#303a44"
            strokeWidth="0"
          />
          <path
            d="M123.8 144.3h-59"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M156.3 34.8s-30.8-16.6-62-16.6-62 16.6-62 16.6"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M88.7 119.6H100v24.7H88.7z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.3 46.3v16.5M156.3 46.3v16.5M5 74.6l27.3-11.8 27.4 11.8M129 74.6l27.3-11.8 27.4 11.8"
            stroke="#303a44"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M59.7 79.3a27.3 27.3 0 1 1-54.7 0M183.7 79.3a27.3 27.3 0 1 1-54.7 0"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "legal2":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 188.7 151.3"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            x="87.3"
            width="14"
            height="141.9"
            rx="5"
            ry="5"
            fill="#ffffff"
            strokeWidth="0"
          />
          <path
            d="M123.8 144.3h-59"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M156.3 34.8s-30.8-16.6-62-16.6-62 16.6-62 16.6"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M88.7 119.6H100v24.7H88.7z"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.3 46.3v16.5M156.3 46.3v16.5M5 74.6l27.3-11.8 27.4 11.8M129 74.6l27.3-11.8 27.4 11.8"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M59.7 79.3a27.3 27.3 0 1 1-54.7 0M183.7 79.3a27.3 27.3 0 1 1-54.7 0"
            stroke="#ffffff"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "lifestyle":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 181 114.9"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M84.4 70l23.6 39.9h53.8M28.7 69.9 5 109.9h88M147.6 62.1l28.4 47.8"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M82.3 66.4 56.5 22.9 30.8 66.4l13.9 5.8 13.5-5.8 8.7 4.5 15.4-4.5zM145.1 57.8 117 10.4l-11.2 22-5.5-3-16.8 28.4 16.6 6.9 16.2-6.9 10.5 5.4 18.3-5.4z"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "other-business":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 124.2 148.5"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M61.7 14a9 9 0 0 1 18 0M88.7 25.6h30.5v117.9h-94v-23.2M25.2 73.9V25.6h27.5"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M86.7 31.1h20V131h-76v-11.7M30.7 31.1h24"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M86.7 31h20s0 55.8-25.7 88.3H5C30.7 88.8 30.7 31 30.7 31h24"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="52.7"
            y="17.1"
            width="36"
            height="16.9"
            rx="2"
            ry="2"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case "pinterest":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            x="18.8"
            y="18.8"
            width="122.5"
            height="122.5"
            rx="10"
            ry="10"
            fill="var(--c-1)"
            strokeWidth="0"
          />
          <path
            d="M149.2 143.5c2.4-3.5 3.8-7.7 3.8-12.3M106 153h25.2c2.5 0 4.8-.4 7-1.1M153 95.9V28.8c0-12-9.8-21.8-21.8-21.8H28.8C16.8 7 7 16.7 7 28.8v102.4c0 12 9.7 21.8 21.8 21.8H99"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M58.2 79.4c.1 1.5-1 8-2.6 8S43 83.1 43 65.8s15.5-33.7 39-33.7 35 17.1 35 32-8.4 36.3-28.6 36.3C78 100.4 74.1 94 74.1 94s-3.5 12.8-4.4 15.6c-.9 2.8-10 19.3-11.3 18.4s-.8-15.9.2-21c1-5.2 6.5-27.9 7-29.7.6-1.8-3.3-9 .2-17.5C69.3 51 81 51.4 82 58.9s-10.7 28.3.4 31.5 21.2-9.9 21.2-27.8-18.3-24.3-30.9-20c-12.6 4.2-19 14.8-19 24.5s4.4 11 4.4 12.3Z"
            fill="#fff"
            strokeWidth="0"
          />
        </svg>
      );
    case "moneyback":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 138.1 138"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <circle
            cx="66"
            cy="72"
            r="5.3"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M69.2 39.2 66 39a33 33 0 1 0 32.8 29.8"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M80 12.6A61 61 0 1 0 125.3 58"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M66 72 106.1 31.9"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M82.3 55.7V28.3L105.6 5v27.4M82.4 55.7h27.4l23.3-23.2h-27.5"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case "twitter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            x="18.8"
            y="18.8"
            width="122.5"
            height="122.5"
            rx="10"
            ry="10"
            fill="var(--c-1)"
            strokeWidth="0"
          />
          <path
            d="M149.2 143.5c2.4-3.5 3.8-7.7 3.8-12.3M106 153h25.2c2.5 0 4.8-.4 7-1.1M153 95.9V28.8c0-12-9.8-21.8-21.8-21.8H28.8C16.8 7 7 16.7 7 28.8v102.4c0 12 9.7 21.8 21.8 21.8H99"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M120.6 54.3a25 25 0 0 1-5.5 1.6c1.6-2.4 2.9-5.2 3.6-8.1-3 2-6.3 3.2-10 3.8-3.2-3-7.5-4.9-12.2-4.9-10 0-18 8.1-18 18l-.1 3a54.7 54.7 0 0 1-35.5-18.6 20.8 20.8 0 0 0 4.4 22.5 60 60 0 0 1-7.8-2.3 22.8 22.8 0 0 0 12.5 18c-2 .2-3.9.4-5.8.4A22.9 22.9 0 0 0 61 99.3a42.6 42.6 0 0 1-17.6 7.5 48 48 0 0 0 71-44.1c2.6-2.3 4.8-5.1 6.2-8.4Z"
            fill="#fff"
            strokeWidth="0"
          />
        </svg>
      );
    case "verification":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 166.7 127.4"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M35.7 38v72c0 9.6 21.3 17.4 47.6 17.4S131 119.6 131 110V38H35.7Z"
            fill="#303a44"
          />
          <circle cx="159.7" cy="82.7" r="6.7" fill="#303a44" />
          <circle cx="159.7" cy="73.5" r="6.9" fill="#303a44" />
          <path d="M153 82.7h13.3v16.2H153z" fill="#303a44" />
          <path
            d="M159.7 38v44.7"
            stroke="#303a44"
            strokeWidth="6"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M83.3 69.1 7 38 83.3 7l76.4 31-76.4 31.1z"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="M83.3 69.1 7 38 83.3 7l76.4 31-76.4 31.1z"
            fill="none"
            stroke="var(--c-1)"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </svg>
      );
    case "youTube":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M106 153h25.2c2.5 0 4.8-.4 7-1.1"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
          />
          <rect
            width="122.5"
            height="122.5"
            x="18.8"
            y="18.8"
            rx="10"
            ry="10"
            fill="var(--c-1)"
          />
          <path
            d="M149.2 143.5c2.4-3.5 3.8-7.7 3.8-12.3M153 95.9V28.8c0-12-9.8-21.8-21.8-21.8H28.8C16.8 7 7 16.7 7 28.8v102.4c0 12 9.7 21.8 21.8 21.8H99"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeMiterlimit="4"
          />
          <path
            d="M108.6 49.6H51.4c-8 0-14.5 6.5-14.5 14.5v31.8c0 8 6.5 14.5 14.5 14.5h57.2c8 0 14.5-6.5 14.5-14.5V64.1c0-8-6.5-14.5-14.5-14.5ZM71 91.8V67.3l23.5 12.2L71 91.8Z"
            fill="#fff"
          />
        </svg>
      );
    case "website":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 142 167.3"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M113.5 9.8A73.3 73.3 0 1 1 9.8 113.5M61.7 135v25.3M25 160.3h73.3"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeMiterlimit="4"
          />
          <circle
            cx="61.7"
            cy="61.7"
            r="54.7"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <ellipse
            cx="61.7"
            cy="61.7"
            rx="54.7"
            ry="29"
            transform="rotate(-45 61.7 61.7)"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="m23 23 77.3 77.3"
            stroke="var(--c-1)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case "location":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120.6 188.3"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M42 69.2a20.4 20.4 0 1 0 0-17.8"
            stroke="#ffffff"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M113.2 54a53.3 53.3 0 1 0-99.1 32.8l46.2 86.7 38.3-71.9"
            stroke="#ffffff"
            strokeWidth="10"
            strokeMiterlimit="10"
            fill="none"
          />
          <path
            d="M112 72.9c1-4 1.6-8.3 1.6-12.6"
            stroke="#ffffff"
            strokeWidth="10"
            strokeMiterlimit="10"
            fill="none"
          />
          <path
            d="M106.5 86.9c1.1-2 2.1-4 3-6.1"
            stroke="#ffffff"
            strokeWidth="10"
            strokeMiterlimit="10"
            fill="none"
          />
        </svg>
      );
    case "location2":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120.6 188.3"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M42 69.2a20.4 20.4 0 1 0 0-17.8"
            stroke="var(--c-1)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M113.2 54a53.3 53.3 0 1 0-99.1 32.8l46.2 86.7 38.3-71.9"
            stroke="#333333"
            strokeWidth="10"
            strokeMiterlimit="10"
            fill="none"
          />
          <path
            d="M112 72.9c1-4 1.6-8.3 1.6-12.6"
            stroke="#333333"
            strokeWidth="10"
            strokeMiterlimit="10"
            fill="none"
          />
          <path
            d="M106.5 86.9c1.1-2 2.1-4 3-6.1"
            stroke="#333333"
            strokeWidth="10"
            strokeMiterlimit="10"
            fill="none"
          />
        </svg>
      );

    case "source1":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 345.7 443.2"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M313.5 122.5h49.9a27 27 0 0 0 27.1-27.1V45.5a27 27 0 0 0-27.1-27.1h-49.9a27 27 0 0 0-27.1 27.1v49.9c.4 15.1 12 27.1 27.1 27.1Z"
            fill="#426da9"
            transform="translate(-147.1 -18.4)"
          />
          <path
            d="M264.6 148.3a30.8 30.8 0 0 0-30.7-30.7h-56a30.8 30.8 0 0 0-30.8 30.7v56.5a30.7 30.7 0 0 0 30.7 30.3H234a30.4 30.4 0 0 0 30.7-30.3Z"
            fill="#6d2077"
            transform="translate(-147.1 -18.4)"
          />
          <path
            d="M228.6 280.5h-34.8a18.8 18.8 0 0 0-18.6 18.7v34.7a18.8 18.8 0 0 0 18.6 18.7h34.8a18.8 18.8 0 0 0 18.6-18.7v-34.7a18.8 18.8 0 0 0-18.6-18.7Z"
            fill="#af1685"
            transform="translate(-147.1 -18.4)"
          />
          <path
            d="M323.5 66.3H295A15 15 0 0 0 280 81.4V110A15 15 0 0 0 295 125h28.5c8.5 0 15.6-7 15.1-15V81.3c-.4-8.4-6.6-15.1-15.1-15.1ZM174 358.2h-40.5a22.3 22.3 0 0 0-22.3 22.3v40.9c0 12 10.3 21.8 22.3 21.8h41a22.3 22.3 0 0 0 22.2-22.2v-40.5a23 23 0 0 0-22.7-22.3Z"
            fill="#e63888"
          />
          <path
            d="M234.5 162a81 81 0 0 0-81.4 81 81 81 0 0 0 80.5 81.4h.9c21.8 0 42.3-8.5 56-23.1a15 15 0 0 0 5-10.3 14.2 14.2 0 0 0-13.8-13.8c-4 0-8 2.7-10.7 5.4a50 50 0 0 1-37 14.2 54.1 54.1 0 0 1-53.8-44.5h123.3a1.6 1.6 0 0 0 1.3-.4 14.2 14.2 0 0 0 10.7-13.8c-.5-40.5-37.8-76.1-81-76.1Zm-52 64.5a54.8 54.8 0 0 1 52-37.8c24.5 0 45 15.5 51.6 37.8Z"
            fill="#1d4f91"
          />
          <path
            d="M316 322.6a2 2 0 0 1-1.8-1.8v-17.3h-3.6a2 2 0 0 1-1.8-1.8 2 2 0 0 1 1.8-1.8h11.1a1.8 1.8 0 0 1 0 3.6h-4v17.3a1.6 1.6 0 0 1-1.8 1.8Zm20.4 0c-.9 0-1.3-.9-1.8-1.3l-4.9-14.3v14.3a2 2 0 0 1-1.7 1.8 2 2 0 0 1-1.8-1.8v-18.7a2.9 2.9 0 0 1 2.6-2.7 2.4 2.4 0 0 1 2.3 2.2l4.9 14.3 4.9-14.3a5.4 5.4 0 0 1 2.2-2.2 2.9 2.9 0 0 1 2.6 2.7v18.7a2 2 0 0 1-1.7 1.8 2 2 0 0 1-1.8-1.8V307l-2.7 8.5-1.3 5.8c-.5.9-1 1.3-1.8 1.3Z"
            fill="#1d4f91"
          />
        </svg>
      );
    case "source2":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="126.4 2.3 589 589"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <circle cx="420.9" cy="296.8" r="294.5" fill="#3c5a9a" />
          <path
            className="bg"
            d="M517 93h-66c-38 0-81 16-81 72v59h-45v72h46v205h85V294h56l5-70h-63v-40c0-22 24-21 25-21h38V93z"
          />
        </svg>
      );
    case "source3":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="1 1 22 22"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.07 5.07 0 0 1-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77A6.55 6.55 0 0 1 12 18.63a6.57 6.57 0 0 1-6.16-4.53H2.18v2.84A10.99 10.99 0 0 0 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09a6.6 6.6 0 0 1 0-4.18V7.07H2.18a10.86 10.86 0 0 0 0 9.86l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38a6 6 0 0 1 4.21 1.64l3.15-3.15A10.55 10.55 0 0 0 12 1C7.7 1 3.99 3.47 2.18 7.07l3.66 2.84A6.57 6.57 0 0 1 12 5.38z"
          />
          <path className="none" d="M1 1h22v22H1z" />
        </svg>
      );
    case "source4":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2499.9 2500"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <defs>
            <radialGradient
              id="a"
              cx="332.1"
              cy="2511.8"
              r="3263.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.1" stopColor="#fa8f21" />
              <stop offset="0.8" stopColor="#d82d7e" />
            </radialGradient>
            <radialGradient
              id="b"
              cx="1516.1"
              cy="2623.8"
              r="2572.1"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.6" stopColor="#8c3aaa" stopOpacity="0" />
              <stop offset="1" stopColor="#8c3aaa" />
            </radialGradient>
          </defs>

          <path
            fill="url(#a)"
            d="M833.4 1250a416.6 416.6 0 1 1 833.3-.1 416.6 416.6 0 0 1-833.3.1m-225.3 0a641.8 641.8 0 1 0 1283.7 0 641.8 641.8 0 0 0-1283.7 0m1159.2-667.3a150 150 0 1 0 150-150 150 150 0 0 0-150 150M745 2267.5c-121.9-5.6-188.1-25.9-232.1-43-58.4-22.8-100-49.8-143.8-93.5s-70.9-85.4-93.5-143.7c-17.2-44-37.5-110.3-43-232.1-6-131.8-7.3-171.4-7.3-505.2s1.3-373.3 7.3-505.1c5.5-122 26-188 43-232.2 22.7-58.3 49.8-100 93.5-143.8s85.3-70.8 143.8-93.5c44-17.1 110.2-37.4 232.1-43 131.8-6 171.3-7.2 505-7.2s373.3 1.3 505.1 7.2c122 5.6 188 26 232.2 43 58.3 22.7 100 49.8 143.8 93.5s70.7 85.5 93.5 143.8c17.1 44 37.4 110.3 43 232.2 6 131.8 7.2 171.3 7.2 505.1s-1.2 373.3-7.2 505.2c-5.6 121.8-26 188-43 232-22.8 58.4-49.8 100-93.5 143.8s-85.5 70.7-143.8 93.5c-44 17.1-110.3 37.4-232.1 43-131.8 6-171.4 7.2-505.2 7.2s-373.3-1.2-505-7.2"
          />
          <path
            fill="url(#b)"
            d="M833.4 1250a416.6 416.6 0 1 1 833.3-.1 416.6 416.6 0 0 1-833.3.1m-225.3 0a641.8 641.8 0 1 0 1283.7 0 641.8 641.8 0 0 0-1283.7 0m1159.2-667.3a150 150 0 1 0 150-150 150 150 0 0 0-150 150M745 2267.5c-121.9-5.6-188.1-25.9-232.1-43-58.4-22.8-100-49.8-143.8-93.5s-70.9-85.4-93.5-143.7c-17.2-44-37.5-110.3-43-232.1-6-131.8-7.3-171.4-7.3-505.2s1.3-373.3 7.3-505.1c5.5-122 26-188 43-232.2 22.7-58.3 49.8-100 93.5-143.8s85.3-70.8 143.8-93.5c44-17.1 110.2-37.4 232.1-43 131.8-6 171.3-7.2 505-7.2s373.3 1.3 505.1 7.2c122 5.6 188 26 232.2 43 58.3 22.7 100 49.8 143.8 93.5s70.7 85.5 93.5 143.8c17.1 44 37.4 110.3 43 232.2 6 131.8 7.2 171.3 7.2 505.1s-1.2 373.3-7.2 505.2c-5.6 121.8-26 188-43 232-22.8 58.4-49.8 100-93.5 143.8s-85.5 70.7-143.8 93.5c-44 17.1-110.3 37.4-232.1 43-131.8 6-171.4 7.2-505.2 7.2s-373.3-1.2-505-7.2"
          />
        </svg>
      );
    case "source5":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="7 7 498 497.9"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <defs>
            <linearGradient
              id="a"
              x1="-974.5"
              x2="-622.4"
              y1="1306.8"
              y2="1658.9"
              gradientTransform="translate(1054.4 -1226.8)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#2489be" />
              <stop offset="1" stopColor="#0575b3" />
            </linearGradient>
          </defs>
          <path
            fill="url(#a)"
            d="M256 7a249 249 0 1 0 0 498 249 249 0 0 0 0-498zm-66.4 369.4h-54.7V199.8h54.7v176.6zM162 176.6a32.5 32.5 0 0 1-32.3-32.6c0-18 14.4-32.5 32.3-32.5s32.3 14.5 32.3 32.5-14.5 32.6-32.3 32.6zm232.4 199.8H340v-92.7c0-25.5-9.6-39.7-29.7-39.7-22 0-33.3 14.8-33.3 39.7v92.7h-52.5V199.8H277v23.7s15.7-29.1 53.2-29.1c37.4 0 64.2 22.8 64.2 70.1v111.9z"
          />
        </svg>
      );
    case "source6":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 799.9 761"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            fill="#00b67a"
            d="M799.9 290.8H494.4L400.1 0l-94.7 290.8L0 290.5l247.4 180L152.7 761l247.4-179.6L647 761l-94.3-290.5z"
          />
          <path fill="#005128" d="m574 536.2-21.2-65.7-152.7 110.9z" />
        </svg>
      );
    case "source7":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0.3 0.3 500 452"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            fill="#000"
            d="M394 .3h76.7L303.2 191.7l197 260.5H346L225 294.2l-138.3 158H10.1l179.2-204.8L.3.2h158.2l109.2 144.5zm-26.9 406h42.5L135.4 43.7H89.8z"
          />
        </svg>
      );
    case "source8":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 926.7 1220"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            fill="#bf2519"
            d="M23.6 587.4C3.8 619.1-4.5 718.8 2.4 784.9c2.4 21.8 6.4 40 12.1 50.9 7.9 15 21.2 24 36.3 24.5 9.7.5 15.8-1.2 198.3-59.9l81.5-26.1c20.2-5.2 33.9-23.8 35.2-47.5 1.3-24.4-11.2-45.9-32-53.6l-57.3-23.3C80.3 569 71.5 565.8 61.6 565.7c-15.2-.5-28.6 7.1-38 21.7m438.8 602.9c3.2-9.2 3.6-15.5 4.1-207.3l.5-85.6c1.3-20.8-12.1-39.7-34.1-48.2-22.7-8.7-47.1-3.3-60.8 13.7 0 0-40 47.5-40.2 47.5-137.4 161.4-143.2 168.9-146.5 178.4a39 39 0 0 0-2.2 17.6c.8 8.6 4.7 17 11.1 24.9 31.9 37.9 184.7 94.1 233.5 85.7 17.1-2.9 29.4-12.4 34.6-26.7m310.1-66.7c46.1-18.4 146.6-146.2 153.7-195.5a42.9 42.9 0 0 0-14.7-41.3c-7.7-5.8-13.6-8.1-196.1-68 0 0-80-26.4-81.1-26.9-19.4-7.5-41.5-.5-56.3 17.8-15.5 18.8-17.8 43.7-5.4 62.4l32.2 52.4c108.3 175.9 116.6 188.3 124.4 194.4 12 9.5 27.3 11.1 43.3 4.7m-94.3-452.8c207.3-50.2 215.4-52.9 223.5-58.3 12.6-8.5 18.9-22.6 17.8-39.8V571C914.2 520 825 387.6 781 366.1c-15.6-7.5-31.2-7-44.1 1.7-8 5.2-13.9 13.1-124.9 165l-50.7 69c-13.2 16.1-13.4 39.1-.5 58.9 13.4 20.5 36 30.4 56.7 24.7l-1 1.7a618 618 0 0 1 61.7-16.3M470.1 499.6c-3.6-82.2-28.3-448.1-31.2-465a43.7 43.7 0 0 0-33.4-30.7c-53-13.1-255.3 43.6-292.8 82.2-12.1 12.6-16.5 28-12.9 41.7 5.9 12.1 256.6 406.5 256.6 406.5 37 60.1 67.3 50.7 77.2 47.6 9.8-2.9 39.9-12.3 36.5-82.3"
          />
        </svg>
      );
    case "source9":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="5.24 13.43 54.05 37.95"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            fill="#fff"
            className="bg"
            d="M41.27 31.81c-4.94-2.64-9.67-5.07-14.5-7.6v15.16c5.08-2.77 10.45-5.3 14.52-7.56z"
          />
          <path
            fill="#e8e0e0"
            d="M41.27 31.81a1838.9 1838.9 0 0 0-14.5-7.6l12.75 8.57 1.75-.97z"
          />
          <path
            fill="#cd201f"
            d="M27.7 51.24c-10.27-.19-13.78-.36-15.94-.8a7 7 0 0 1-3.65-1.9 7.7 7.7 0 0 1-1.73-3.34c-.38-1.27-.53-2.32-.74-4.9a116.4 116.4 0 0 1 0-15.88c.33-2.94.49-6.42 2.68-8.45a7.2 7.2 0 0 1 3.6-1.82c2.1-.4 11.1-.72 20.42-.72 9.3 0 18.31.32 20.42.72a7.03 7.03 0 0 1 4.2 2.5c2 3.14 2.04 7.05 2.24 10.11.09 1.46.09 9.74 0 11.2-.31 4.83-.57 6.54-1.28 8.32a6.13 6.13 0 0 1-1.48 2.36 7.08 7.08 0 0 1-3.76 1.93c-8.88.66-16.43.8-24.99.67zm13.6-19.43c-4.95-2.64-9.68-5.09-14.52-7.63v15.17c5.1-2.77 10.46-5.3 14.53-7.56z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Svg;
