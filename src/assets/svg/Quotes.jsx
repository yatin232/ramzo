import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50" // ← adjust viewBox to match your SVG's dimensions
      {...props}
    >
      <path
        data-name="Path 131"
        d="M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z"
        fill="#f2b300"
      />
    </svg>
  );
}

export default SvgComponent;
