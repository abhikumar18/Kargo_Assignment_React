import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="currentColor"
    {...props}
  >
    <g clipPath="url(#arrow-a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 13.034c-.003-.385.14-.756.4-1.039L7.652 7.5 3.4 3.006a1.531 1.531 0 0 1 0-2.075 1.332 1.332 0 0 1 1.961 0l5.232 5.532a1.523 1.523 0 0 1 0 2.073L5.366 14.07a1.33 1.33 0 0 1-1.961 0 1.514 1.514 0 0 1-.4-1.036"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="arrow-a">
        <path fill="#fff" d="M14 .5v14H0V.5z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
