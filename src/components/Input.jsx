import React from "react";

function Input(props) {
  const inputValue = (event) => {
    props.inputValue([event.target.id, event.target.value]);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor={props.id}
        className=" text-stone-600 font-semibold text-xs mb-[2px] "
      >
        {props.children}
      </label>
      <input
        onChange={inputValue}
        type={props.type}
        id={props.id}
        className="input-color border-[1px] rounded-sm border-stone-300 p-2"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
