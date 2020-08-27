import React, { useState } from "react";
import { FormInput } from "./main";
import { Button } from "./main";
import Health from "./health";
import { Link } from "react-router-dom";

export default function FamilyInfo({ formData, navigation }) {
  // const { phone, email } = formData;

  // const { previous, next } = navigation;
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(true);

//   addInput=()=>{
//    return setShow({show:[...show,""]})
// }


  return <div className="form ">
      <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
        <h3> Family information </h3>
        <div className="flex  flex-col mx-4 mb-4 ">
          <FormInput placeholder="Father's profession " name="phone" />
          <FormInput placeholder="Mother's professtion" name="email" />
          <p className="text-center">Do you have any sister or brothers ?</p>
          <FormInput
            placeholder="Brother/sister first name "
            name="first_name"
          />
          <FormInput
            placeholder="Profession"
            name="profession"
          />

       {show.map((input,index)=>{
            return <div className="flex  flex-col " key={index}>
            <FormInput
              placeholder="Brother/sister first name "
              name="first_name"
              value={input}
            />
            <FormInput placeholder="profession" name="profession" value={input} />
          </div>
       })}
      

{/* 
          {show ? (
            <div className="flex  flex-col mx-4 mb-4">
              {" "}
              <FormInput
                placeholder="Brother/sister first name "
                name="first_name"
              />
              <FormInput placeholder="Profession" name="profession" />
            </div>
          ) : (
            <p>Thanks for your patience , we don't need more.</p>
          )} */}

          <div className="flex  justify-around flex-row">
            <button onClick={() =>  {setShow([...show, {}]); console.log("show =", show)} }> + </button>
            <button onClick={() => setShow(!show)}> - </button>
          </div>
        </div>
      </div>
      <div className="flex  justify-around flex-row">
      <Link to="/health">
        <Button value="Previous" />
        </Link>
        <Link to="/health">
          <Button value="Next" />
        </Link>
      </div>
    </div>
  
}