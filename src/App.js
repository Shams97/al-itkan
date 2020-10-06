import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Store, { Context } from "./store";

import PersonalDetails from "./form/personal details";
import Education from "./form/education";
import Admin_Skills from "./form/skills";
import { Technical_skills } from "./form/skills";
import { Sales_Skills } from "./form/skills";
import { Training } from "./form/skills";
import Employment_history from "./form/employment";
import { Additional_info } from "./form/employment";
import { Refrence } from "./form/employment";
import { Submited } from "./form/employment";
import Check from "./check";
import Jobs from "./jobs";
import Header from "./header";
import { Footer } from "./header";

function App() {
  return (
    <>
      <Header />

      <div className="App">
        {/* Itkan main nav bar goes here  */}
        <Store>
          <Router>
            <Switch>
              <Route exact path="/" component={Jobs} />
              <Route path="/personal" component={PersonalDetails} />
              <Route path="/education" component={Education} />
              <Route path="/check" component={Check} />
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
      <Footer />
    </>
  );
}

export default App;

export const FormInput = ({ placeholder, name, type, textarea, onFocus }) => {
  const [state, setState] = useContext(Context);
  const [val, setVal] = useState("");
  const [job, setjob] = useContext(Context);

  useEffect(() => {
    if (state["data"][name]) setVal(state["data"][name]);
  }, []);

  const handleChange = (e) => {
    let type = e.target.type;
    if (type === "file") {
      let file = e.target.files[0];
      if (file) {
        if (file.size > 10e6) {
          alert("file is too big, please upload file less than 10MB ");
          e.target.value=null
        } else {
          let reader = new FileReader();
          reader.onloadend = function () {
            let b64 = reader.result.replace(/^data:.+;base64,/, "");

            state["files"][name] = b64;
            state["files"]["original_" + name] = file;
          };
          reader.readAsDataURL(file);
        }
      }
    } else {
      let value = e.target.value;
      state["data"][name] = type == "number" ? Number(value) : value;
      setVal(value);
    }
    setState(state);
  };

  if (!!textarea) {
    return (
      <textarea
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        className="pb-4 border-b-2 border-black-400 focus:border-blue-500  outline-none p-2 "
        value={val}
      />
    );
  } else {
    return (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        onFocus={onFocus}
        className="border-b-2 border-black-400 focus:border-blue-500 outline-none p-2 "
        value={type == "file" ? undefined : val}
      />
    );
  }
};

// Here when button next and previous goes
export const Button = ({ onClick, value }) => {
  return (
    <button
      onClick={onClick}
      className="text-red-500 hover:bg-orange-500 hover:text-white focus:bg-orange-500 py-2 px-4 rounded "
    >
      {value}
    </button>
  );
};
