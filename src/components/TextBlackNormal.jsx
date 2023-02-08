import React from "react";

function TextBlackBold(props) {
  return (
    <div className={` ${props.className} text-slate-800 font-extralight`}>
      {props.children}
    </div>
  );
}

export default TextBlackBold;
