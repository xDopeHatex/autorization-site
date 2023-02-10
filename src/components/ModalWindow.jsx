import React from "react";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";

function ModalWindow() {
  return (
    <Wrapper
      className={"flex justify-center h-full items-center"}
      classNameUp={"h-full"}
    >
      <div className=" shadow-2xl  rounded-md border-slate-800 w-[85%] h-[25rem] p-4 flex flex-col justify-between">
        <div className="space-y-14 ">
          <div className="text-center text-slate-800 font-extrabold text-2xl">
            Thank you for registering with DBD!
          </div>
          <div className="text-center text-slate-800 font-extrabold text-lg">
            This email is to confirm that your registration has been received
            and processed successfully.
          </div>
        </div>
        <Button>CONTINUE</Button>
      </div>
    </Wrapper>
  );
}

export default ModalWindow;
