import React from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import TextBlackNormal from "../components/TextBlackNormal";
import ComponentWithPic from "../components/ComponentWithPic";
// import TextBlackBold from "./components/TextBlackBold";
import img1 from "../images/1st-icon.png";

function Autorization() {
  return (
    <>
      <Header />
      <Wrapper className={"my-8"}>
        <h1 className="text-slate-800 font-light text-3xl">
          Let’s create your account.
        </h1>
      </Wrapper>
      <Wrapper className={"my-8"}>
        <TextBlackNormal>
          Signing up for Square is fast and free — no commitments or long-term
          contracts.
        </TextBlackNormal>
      </Wrapper>
      <Wrapper className={"grid grid-cols-1 lg:grid-cols-3 space-y-5"}>
        <ComponentWithPic bold={"Quick setup"} img={img1}>
          Fill out a few details and you’ll be on your way to taking payments in
          no time.
        </ComponentWithPic>
      </Wrapper>
    </>
  );
}

export default Autorization;
