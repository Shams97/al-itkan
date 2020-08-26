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
    <div className="form ">
      <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
        <h3 className="my-8"> Family information </h3>
        <div className="flex  flex-col m-2">
          <FormInput placeholder="Father's profession " name="phone" />
          <FormInput placeholder="Mother's professtion" name="email" />
          <p className="text-center my-2">Do you have any sister or brothers ?</p>
          <FormInput
            placeholder="Brother/sister first name "
            name="first_name"
          />
          <FormInput placeholder="Profession" name="profession" />

          {show.map((input, index) => {
            let n = index;
            return (
              <div className="flex flex-col " key={index}>
                <FormInput
                  placeholder="Borther/sister first name"
                  name={"first_name_" + n++}
                />
                <FormInput
                  placeholder={"Profession"}
                  name={"profession_" + n++}
                />
              </div>
            );
          })}

          <div className="flex  justify-around flex-row mt-4">
            <button
              onClick={() => {
                setShow([...show, {}]), setHide(!hide)   }}
             className="px-4 hover:bg-gray-500 focus:bg-gray-600 rounded"
           >
              +
            </button>
           { hide ?  <button onClick={(index) => setShow(show.slice(index, 1))} className="px-4  hover:bg-gray-500 focus:bg-gray-600 rounded">
              -
            </button>:null
           } 
          </div>
        </div>
      </div>
      <div className="flex  justify-around flex-row">
        <Link to="/">
          <Button value="Previous" />
        </Link>
        <Link to="/health">
          <Button value="Next" />
        </Link>
      </div>
    </div>
  );
}
