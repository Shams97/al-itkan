import React from "react";
import "./App.css";
import MulitpleStepForm from "./form/main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PersonalDetails from "./form/personal details";
import FamilyInfo from "./form/family info";
import Health from "./form/health";
import Language from "./form/lang";
import Education from "./form/education";
import Admin_Skills from "./form/skills";
import {Technical_skills} from './form/skills';
import {Sales_skills} from './form/skills';

// here when you should put the basic form

function App() {
  return (
    <div className="App">
      {/* Itkan main nav bar goes here  */}
        <Router>
          <Switch>
            <Route exact path="/" component={PersonalDetails} />
            <Route path="/family" component={FamilyInfo} />
            <Route path="/health" component={Health} />
            <Route path="/language" component={Language} />
            <Route path="/education" component={Education} />
            <Route path="/technical" component={Technical_skills} />
            <Route path="/admin_skills" component={Admin_Skills} />
            <Route path="/sales_skills" component={Sales_skills} />
            <Route path="/technical" component={Techinical_skills} />
            <Route path="/language" component={Language} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;

// steps indecator
const Dot = ({ value }) => {
  return (
    <div className="rounded-full w-25 justify-center bg-gray-500 ">{value}</div>
  );
};

// Here when default input goes
export const FormInput = ({ placeholder, name, value, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="border-b-2 border-black-400 focus:border-blue-500  outline-none  p-2"
      value={value}
    />
  );
};

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
