import React,{useState} from "react";
import { FormInput } from "../App";
import { Button } from "./main";
import { Link } from "react-router-dom";

// const Section = ({ school, input_placeholder }) => {
//   return (
//     <div>
//       <p className="text-center">{school}</p>
//       <FormInput placeholder={input_placeholder} />
//     </div>
//   );
// };

export default function Education() {
  // const { phone, email } = formData;
  // const { previous ,next } = navigation;


  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);
  return (
    <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl"> Education</h3>
      <div className="flex flex-col m-2">
        <div>
          <p className="text-center">Primary</p>
          <FormInput placeholder="name of school" />
          <FormInput placeholder="years" />
          <FormInput placeholder="average %" />
        </div>

        <div>
          <p className="text-center">Intermediate</p>
          <FormInput placeholder="name of school" />
          <FormInput placeholder="years" />
          <FormInput placeholder="average %" />
        </div>

        <div>
          <p className="text-center">College or institute</p>
          <FormInput placeholder="name of school" />
          <FormInput placeholder="years" />
          <FormInput placeholder="average %" />
        </div>

        {show.map((input, index) => {
            let n = index;
            return (<div>
        <p className="text-center">Intermediate</p>
        <FormInput placeholder="name of school" />
        <FormInput placeholder="years" />
        <FormInput placeholder="average %" />
      </div>
            );
          })}

          <div className="flex  justify-around flex-row mt-4 ">
            <button
              onClick={() => {
                setShow([...show, {}]); setHide(true) }}
             className="px-4 hover:bg-gray-500 focus:bg-gray-600 rounded"
           >
              +
            </button>

           { hide ? <button onClick={() => setShow(show.slice(0, show.length - 1) )} className="px-4  hover:bg-gray-500 focus:bg-gray-600 rounded"> - </button>:null}
          
        </div>
      
      <div className="flex justify-around flex-row">
        <Link to="/">
          <Button value="Previous" />
        </Link>
        <Link to="/health">
          <Button value="Next" />
        </Link>
      </div>

      </div>
    </div>

  );
}
