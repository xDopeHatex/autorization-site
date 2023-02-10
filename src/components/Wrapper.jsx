import React from "react";

function Wrapper(props) {
  return (
    <div className={`${props.classNameUp} w-full`}>
      <div className={`${props.className} mx-auto lg:w-[46.75rem] w-[80%]`}>
        {props.children}
      </div>
    </div>
  );
}

export default Wrapper;
