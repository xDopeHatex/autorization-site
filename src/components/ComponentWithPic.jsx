import React from "react";
import TextBlackNormal from "./TextBlackNormal";
import TextBlackBold from "./TextBlackBold";

function ComponentWithPic(props) {
  return (
    <div className="flex flex-row md:flex-col md:space-y-5   md:items-center ">
      <div className=" mr-4 min-w-[2.5rem] min-h-[2.5rem] ">
        <img className="w-[2.5rem] h-[2.5rem] " src={props.img} />
      </div>
      <div className="flex flex-col space-y-2   ">
        <TextBlackBold>{props.bold}</TextBlackBold>
        <TextBlackNormal>{props.children}</TextBlackNormal>
      </div>
    </div>
  );
}

export default ComponentWithPic;
