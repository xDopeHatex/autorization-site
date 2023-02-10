import React from "react";
import axios from "axios";
import { useState, useReducer } from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import TextBlackNormal from "../components/TextBlackNormal";
import ComponentWithPic from "../components/ComponentWithPic";
import Line from "../components/Line";

import img1 from "../images/1st-icon.png";
import img2 from "../images/2nd-icon.png";
import img3 from "../images/3rd-icon.png";
import Input from "../components/Input";

function Autorization() {
  const inputValueHandler = (event) => {
    console.log(event);
    dispatch({ type: event[0], value: event[1] });
    console.log(state);
  };

  const inputs = [
    {
      id: "email",
      type: "email",
      placeholder: "you@example.com",
      text: "Enter your email",
    },
    {
      id: "password",
      type: "text",
      placeholder: "password",
      text: " Create a password",
    },
    {
      id: "firstName",
      type: "text",
      placeholder: "first name",
      text: "Enter your first name",
    },

    {
      id: "lastName",
      type: "text",
      placeholder: "last name",
      text: "Enter your last name",
    },

    {
      id: "phoneNumber",
      type: "tel",
      placeholder: "8-999-9999",
      text: "Enter your mobile phone number",
    },

    {
      id: "birthDay",
      type: "date",
      placeholder: "26/09/1992",
      text: "Enter your birthday",
    },
  ];

  const ACTIONS = {
    EMAIL: "email",
    PASSWORD: "password",
    FIRSTNAME: "firstName",
    LASTNAME: "lastName",
    PHONENUMBER: "phoneNumber",
    BIRTHDAY: "birthDay",
  };

  const initialState = {
    email: "not null",
    firstName: "",
    lastName: "",
    phoneNumber: "not null",
    password: "not null",
    birthDay: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.EMAIL:
        return { ...state, email: action.value };
      case ACTIONS.PASSWORD:
        return { ...state, password: action.value };
      case ACTIONS.FIRSTNAME:
        return { ...state, firstName: action.value };
      case ACTIONS.LASTNAME:
        return { ...state, lastName: action.value };
      case ACTIONS.PHONENUMBER:
        return { ...state, phoneNumber: action.value };
      case ACTIONS.BIRTHDAY:
        return { ...state, birthDay: action.value };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      event.preventDefault();
      console.log(state);

      const x = await axios.post(
        "http://192.168.5.4:8080/user/register",
        {
          email: state.email,
          firstName: state.firstName,
          lastName: state.lastName,
          phoneNumber: state.phoneNumber,
          password: state.password,
          birthDay: state.birthDay,
        },
        customConfig
      );
      console.log(x);
    } catch (error) {}
  };

  return (
    <>
      <Header />
      <Wrapper className={"my-8"}>
        <h1 className="text-slate-800 font-light text-3xl md:text-center">
          Let’s create your account.
        </h1>
      </Wrapper>
      <Wrapper className={"my-8"}>
        <TextBlackNormal>
          Signing up for Square is fast and free — no commitments or long-term
          contracts.
        </TextBlackNormal>
      </Wrapper>
      <Wrapper
        className={
          "grid grid-cols-1 md:grid-cols-3 space-y-5 md:space-y-0 md:space-x-4"
        }
      >
        <ComponentWithPic bold={"Quick setup"} img={img1}>
          Fill out a few details and you’ll be on your way to taking payments in
          no time.
        </ComponentWithPic>
        <ComponentWithPic bold={"Get paid fast"} img={img2}>
          See funds in your bank account in as little as one to two business
          days.
        </ComponentWithPic>

        <ComponentWithPic bold={"Simple pricing"} img={img3}>
          What you see is what you get. No surprise fees or ongoing contracts,
          ever.
        </ComponentWithPic>
      </Wrapper>

      <Line />
      <Wrapper>
        <form
          onSubmit={submitHandler}
          className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 md:gap-3"
          id="myform"
        >
          {inputs.map(function (item, index) {
            return (
              <Input
                key={index}
                id={item.id}
                type={item.type}
                placeholder={item.placeholder}
                inputValue={inputValueHandler}
              >
                {item.text}
              </Input>
            );
          })}
        </form>
      </Wrapper>
      <Line />

      <Wrapper className="md:grid md:grid-cols-2 md:gap-4">
        <div className="text-stone-400 text-xs text-center h-full flex flex-col justify-center ">
          <div>
            By continuing, you agree to the
            <span className="text-blue-600 font-semibold">
              Seller Agreement
            </span>{" "}
            and{" "}
            <span className="text-blue-600 font-semibold">Privacy Policy</span>.
          </div>
        </div>
        <div className="md:flex md:justify-center">
          <button
            type="submit"
            form="myform"
            className="bg-blue-600 w-full rounded-sm my-8 text-white py-2 font-bold hover:bg-blue-700 active:bg-blue-800"
          >
            CONTINUE
          </button>
        </div>
      </Wrapper>

      <Wrapper>
        <div className="text-stone-400 text-xs">
          This site is protected by reCAPTCHA Enterprise and the Google{" "}
          <span className="text-blue-600 font-semibold">Provacy Policy</span>{" "}
          and{" "}
          <span className="text-blue-600 font-semibold">Terms of Srvice</span>{" "}
          apply.
        </div>
      </Wrapper>
      <Line />
      <div className="flex justify-center mb-10">
        <div className="text-stone-500 text-sm">
          Already have a Square account?{" "}
          <span className="text-blue-600 font-semibold">Sign in</span>
        </div>
      </div>
    </>
  );
}

export default Autorization;
