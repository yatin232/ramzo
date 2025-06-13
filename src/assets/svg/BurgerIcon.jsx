import * as React from "react";
const BurgerIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26" height="22" viewBox="0 0 28 22"
    {...props}
  >
    <path fill="none" stroke="#0b093b" strokeLinecap="round" strokeWidth={2} d="M1 1h26" />
    <path fill="none" stroke="#0b093b" strokeLinecap="round" strokeWidth={2} d="M1 11h26" />
    <path fill="none" stroke="#0b093b" strokeLinecap="round" strokeWidth={2} d="M1 21h26" />
  </svg>
);
export default BurgerIcon;
