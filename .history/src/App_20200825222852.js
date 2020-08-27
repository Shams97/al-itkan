import React from "react";
import "./App.css";
import MulitpleStepForm from "./form/main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 import {Button} from './form/main';

import PersonalDetails from "./form/personal details";
import FamilyInfo from "./form/family info";
import Health from "./form/health";
import Language from "./form/lang";
import Education from "./form/education";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Itkan main nav bar goes here  */}
        <div className="flex flex-row">
          <Link to="/family">
            <Dot value="next" />
          </Link>
          <Link to="/health">
            <Dot value="2" />
          </Link>
          <Link to="/language">
            <Button value="3" />
          </Link>
          <Link to="/">
            <Button value="4" />
          </Link>
          <Link to="/family">
            <Button value="5" />
          </Link>
          <Link to="/family">
            <Button value="Next" />
          </Link>
          <Link to="/family">
            <Button value="Next" />
          </Link>

        </div>


{/* 
        <form action="POST">  
        <PersonalDetails/>
    </form> */}

        <Switch>
          <Route path="/">
            <PersonalDetails />
          </Route>
          <Route path="/family">
            <FamilyInfo />
          </Route>
          <Route path="/health">
            <Health />
          </Route>
          <Route path="/language">
            <Language />
          </Route>
          <Route path="/health">
            <Health />
          </Route>
          <Route path="/health">
            <Health />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


const Dot =({value})=>{
return <div className="rounded-full w-25 justify-center bg-gray-500 ">{value}</div>
}