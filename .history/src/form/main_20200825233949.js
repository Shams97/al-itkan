// Main navigator between form steps
import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import PersonalDetails from './personal details';
import FamilyInfo from './family info';
import Health from './health';
import Language from './lang';
import Education from './education';



// The 15 steps
const steps = [
  { id: "personal details" },
  { id: "family info" },
  { id: "health" },
  { id: "language" },
  { id: "education" },

  { id: "names" },
  { id: "address" },
  { id: "contact" },
  { id: "review" },
  { id: "review" },
  
  { id: "names" },
  { id: "address" },
  { id: "contact" },
  { id: "review" },
  { id: "review" },
];


const defaultData = {something : 'something',something1 : 'something' }


export const Switch = ()=>{

  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };
  
  
  switch (id) {
    case "personal details":
      return <PersonalDetails {...props} />;
    case "family info":
      return <FamilyInfo {...props} />;
    case "health":
      return <Health {...props} />;
    case "language":
      return <Language {...props} />;
    case "education":
      return <Education {...props} />;
    default:
      return null;
    }
}



// const ButtonContainer =({navigation}) =>{
//     const { previous, next } = navigation;
//     return <div className="flex  justify-around flex-row">
//     <Button value="Previous" onClick={previous} />
//     <Button value="Next" onClick={next} />
//     </div>

// }


export default function Main() {
  
  return (
  <div>
  <form action="POST">  
      {/* <Switch/> */}
      {/* <PersonalDetails/> */}
    </form>

{/* 
    {  steps =='personal details'?
    <div className="flex  justify-around flex-row">
         <Button value="" onClick={""} />
         <Button value="Next" onClick={next} />
         </div>
         :
         <div className="flex  justify-around flex-row">
         <Button value="Previous" onClick={previous} />
         <Button value="Next" onClick={next} />
         </div>
      } */}

   </div>
    ) 
}


// Here when default input goes 

export const FormInput = ({placeholder, name, value, type})=>{
return <input type={type}  placeholder={placeholder}  name={name}  className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2" value={value}/>
}

// Here when button next and previous goes 

export const Button = ({onClick, value}) =>{
return  <button onClick={onClick} className="text-red-500 hover:bg-orange-500 hover:text-white focus:bg-orange-500 py-2 px-4 rounded">{value}</button>
}

// Here when the down arrow for see more goes 

export const SeeMore = () =>{
  return <button>see more </button>
}