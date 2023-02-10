import React from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { useState, useReducer } from "react";
import axios from "axios";

function Login() {
  const inputs = [
    {
      id: "email",
      type: "email",
      placeholder: "email adress",
    },
    {
      id: "password",
      type: "password",
      placeholder: "password",
    },
  ];

  const inputValueHandler = (event) => {
    dispatch({ type: event[0], value: event[1] });
    console.log(event);
  };

  const ACTIONS = {
    EMAIL: "email",
    PASSWORD: "password",
  };

  const initialState = {
    email: "not null",

    password: "not null",
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.EMAIL:
        return { ...state, email: action.value };
      case ACTIONS.PASSWORD:
        return { ...state, password: action.value };

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
        "http://192.168.5.4:8080/user/login",
        {
          email: state.email,

          password: state.password,
        },
        customConfig
      );
      console.log(x);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Wrapper className={"space-y-10 max-w-[35rem] lg:mt-[15rem] mt-[8rem]"}>
        <h1 className="text-slate-800 font-extrabold text-4xl">Sign in</h1>
        <div className="space-y-4 ">
          <h3 className="text-slate-800 font-extrabold text-lg">
            New to DBD?{" "}
            <Link to={"/"} className="text-blue-600 font-extrabold text-lg">
              Sign up
            </Link>
          </h3>

          <form
            onSubmit={submitHandler}
            className="grid grid-cols-1 space-y-4 "
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
                ></Input>
              );
            })}
          </form>
          <h3 className="text-blue-600 font-extrabold text-lg">
            Forgot password?
          </h3>
        </div>
        <Button type={"submit"} form={"myform"} className={"w-[5rem]"}>
          Sign in
        </Button>
      </Wrapper>
    </>
  );
}

export default Login;
