import React from "react";

function Button(props) {
  return (
    <button
      type={props.type}
      form={props.form}
      className={`${props.className} bg-blue-600 w-full rounded-sm my-8 text-white py-2 font-bold hover:bg-blue-700 active:bg-blue-800 `}
    >
      {props.children}
    </button>
  );
}

export default Button;
