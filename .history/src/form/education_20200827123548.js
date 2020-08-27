import React, { useState } from "react";
import { FormInput } from "./main";
import { Link } from "react-router-dom";
import { Button } from "./main";

export default function Education() {
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);

  return (
    <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl"> Education </h3>
      <div className="flex flex-col my-4">
        <div className="flex flex-col my-4">
          <p className="text-center">Primary</p>
          <FormInput placeholder="name of school" />
          <FormInput placeholder="years" />
          <FormInput placeholder="average %" />
        </div>

        <div className="flex flex-col my-4">
          <p className="text-center">Intermediate</p>
          <FormInput placeholder="name of school" />
          <FormInput placeholder="years" />
          <FormInput placeholder="average %" />
        </div>

        <div className="flex flex-col my-4">
          <p className="text-center">College or institute</p>
          <FormInput placeholder="name of school" />
          <FormInput placeholder="years" />
          <FormInput placeholder="average %" />
        </div>

        {show.map((input, index) => {
          let n = index;
          return (
            <div className="flex flex-col my-4">
              <FormInput placeholder="name of school" />
              <FormInput placeholder="years" />
              <FormInput placeholder="average %" />
            </div>
          );
        })}
      </div>

      <div className="flex  justify-around flex-row mt-4">
        <p className="text-xs">Add more education</p>
        <button
          onClick={() => {
            setShow([...show, {}]);
            setHide(true);
          }}
          className="px-4 hover:bg-gray-500 focus:bg-gray-600 rounded"
        >
          +
        </button>
        {hide ? (
          <button
            onClick={() => setShow(show.slice(-1, 1))}
            className="px-4  hover:bg-gray-500 focus:bg-gray-600 rounded"
          >
            -
          </button>
        ) : null}
      </div>

      <div className="flex justify-around flex-row mt-8">
        <Link to="/language">
          <Button value="Previous" />
        </Link>
        <Link to="/technical">
          <Button value="Next" />
        </Link>
      </div>
    </div>
  );
}
