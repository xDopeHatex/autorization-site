import React from "react";
import Header from "../components/Header";
import ModalWindow from "../components/ModalWindow";

function Confirmation() {
  return (
    <div className="max-h-screen">
      <Header />
      <div className="h-[10rem]"></div>
      <ModalWindow />
    </div>
  );
}

export default Confirmation;
