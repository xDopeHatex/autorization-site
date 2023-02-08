import React from "react";
import TextBlackNormal from "./TextBlackNormal";
import TextBlackBold from "./TextBlackBold";

function ComponentWithPic(props) {
  return (
    <div className="flex flex-row lg:flex-col space-y-5">
      <div>
        <img src={props.img} />
      </div>
      <div className="flex flex-col space-y-4">
        <TextBlackBold>{props.bold}</TextBlackBold>
        <TextBlackNormal>{props.children}</TextBlackNormal>
      </div>
    </div>
  );
}

export default ComponentWithPic;
