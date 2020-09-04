import React,{useContext} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Store,{Context} from './store'

import PersonalDetails from "./form/personal details";
import FamilyInfo from "./form/family info";
import Health from "./form/health";
import Language from "./form/lang";
import Education from "./form/education";
import Admin_Skills from "./form/skills";
import {Technical_skills} from './form/skills';
import {Sales_Skills} from './form/skills';
import {Training} from './form/skills';
import Employment_history from './form/employment';
import {Additional_info} from './form/employment';
import {Refrence} from './form/employment';
import {Submited} from './form/employment';
import Jobs from './jobs';


function App() {
  return (
    <div className="App">
      {/* Itkan main nav bar goes here  */}
        <Store>
        <Router>
          <Switch>

            <Route exact path="/" component={Jobs} />
            <Route  path="/personal" component={PersonalDetails} />
            <Route path="/family" component={FamilyInfo} />
            <Route path="/health" component={Health} />
            <Route path="/language" component={Language} />
            <Route path="/education" component={Education} />
           
            <Route path="/technical" component={Technical_skills} />
            <Route path="/admin_skills" component={Admin_Skills} />
            <Route path="/sales_skills" component={Sales_Skills} />
            <Route path="/training" component={Training} />
            <Route path="/emploment" component={Employment_history} />
            
            <Route path="/additional" component={Additional_info} />
            <Route path="/refrence" component={Refrence} />
             <Route path="/submited" component={Submited} />
          </Switch>
        </Router>
        </Store>
    </div>
  );
}

export default App;

// steps indecator
// const Dot = ({ value }) => {
//   return (
//     <div className="rounded-full w-25 justify-center bg-gray-500 ">{value}</div>
//   );
// };

// Here when default input goes
// export const FormInput = ({ placeholder, name, value, type, onChange }) => {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       name={name}
//       className="border-b-2 border-black-400 focus:border-blue-500 outline-none p-2"
//       onChange={onChange}

//     />
//   );
// };


export const FormInput = ({placeholder, name, type, textarea,value})=>{
  // state.data 
  const [state, setState] = useContext(Context)

  const handleChange = (e) => {
    let type = e.target.type
    if (type === 'file') {
      let file = e.target.files[0]
      if(file){   
      let reader = new FileReader();
      reader.onloadend = function () {
        let b64 = reader.result.replace(/^data:.+;base64,/, '');
        state['files'][name] = b64
      }
      reader.readAsDataURL(file);
   }


     } else {  
      //  value = state.data[name]
       value = e.target.value
      // state['data'][name] = value
      let value = setState(['data'][name])
      console.log("all value == ", value)

    }
    setState(val=>[val][state])
    console.log(state)

  }


  if (!!textarea){
    return (
      <textarea type={type} placeholder={placeholder} name={name} onChange={handleChange}   value={value}
      className="pb-4 border-b-2 border-black-400 focus:border-blue-500  outline-none p-2" />
    )
  } else {
    return (
      <input type={type} placeholder={placeholder} name={name} onChange={handleChange}  value={value}
      className="border-b-2 border-black-400 focus:border-blue-500 outline-none p-2"  />
    )
  }
}

// Here when button next and previous goes
export const Button = ({ onClick, value }) => {
  return (
    <button
      onClick={onClick}
      className="text-red-500 hover:bg-orange-500 hover:text-white focus:bg-orange-500 py-2 px-4 rounded"
    >
      {value}
    </button>
  );
};

// Here when the down arrow for see more goes
export const SeeMore = () => {
  return <button>see more </button>;
};
