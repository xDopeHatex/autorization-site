import React from "react";

function TextBlackBold(props) {
  return (
    <div
      className={` ${props.className} text-slate-800 font-bold md:text-center`}
    >
      {props.children}
    </div>
  );
}

export default TextBlackBold;
