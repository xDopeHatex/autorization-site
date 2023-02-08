import React from "react";
import Wrapper from "../components/Wrapper";

function Line(props) {
  return (
    <Wrapper>
      <div
        className={`${props.className} border-b-[1px] border-stone-300 my-8`}
      ></div>
    </Wrapper>
  );
}

export default Line;
