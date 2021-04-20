import * as React from "react"
function ArrowIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="91"
      height="96"
      fill="none"
      viewBox="0 0 91 96"
    >
      <g filter="url(#filter0_d1)">
        <circle cx="44" cy="47.666" r="40" fill="#43D4DD"></circle>
        <g filter="url(#filter1_d0)">
          <path
            fill="#fff"
            d="M31.76 32.438l8.398-7.93L63.712 49 39.611 71.656l-7.774-8.672 15.938-14.453-16.016-16.093z"
          ></path>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d1"
          width="88"
          height="88"
          x="0"
          y="7.666"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d0"
          width="39.953"
          height="55.148"
          x="27.758"
          y="24.508"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  )
}
export default ArrowIcon