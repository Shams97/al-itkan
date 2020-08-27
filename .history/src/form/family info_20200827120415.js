import React, { useState } from "react";
import { FormInput } from "./main";
import { Button } from "./main";
import Health from "./health";
import { Link } from "react-router-dom";

export default function FamilyInfo({ formData, navigation }) {
  // const { phone, email } = formData;
  // const { previous, next } = navigation;

  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);
  return (
          <form action="POST">      

      <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
        <h3 className="my-8 text-2xl" > Family information </h3>
        <div className="flex  flex-col m-2">
          <FormInput placeholder="Father's profession " name="phone" />
          <FormInput placeholder="Mother's professtion" name="email" />
          <p className="text-center my-2">Do you have any sisters or brothers ?</p>
          <FormInput
            placeholder="Brother/sister first name "
            name="first_name"
          />
          <FormInput placeholder="Profession" name="profession" />

          {show.map((input, index) => {
            let n = 1;
            return (
              <div className="flex flex-col mt-8" key={index}>
                <FormInput
                  placeholder="Borther/sister first name"
                  name="first_name_"
                />
                <FormInput
                  placeholder="Profession"
                  name="profession_"
                />
              </div>
            );
          })}

          <div className="flex  justify-around flex-row mt-4 ">
            <button
              onClick={() => {
                setShow([...show, {}]); setHide(true) }}
             className="px-4 hover:bg-gray-500 focus:bg-gray-600  hover:text-white focus:text-white rounded " >
              +
            </button>

           { hide ?
            <button onClick={
              () =>   setShow(show.slice(0, show.length - 1)
               )} className="px-4  hover:bg-gray-500 focus:bg-gray-600 rounded"> - </button>:null}
          </div>
        </div>
        <div className="flex justify-around flex-row mt-10">
        <Link to="/">
          <Button value="Previous" />
        </Link>
        <Link to="/health">
          <Button value="Next" />
        </Link>
      </div>
      </div>

    </form>
  );
}
