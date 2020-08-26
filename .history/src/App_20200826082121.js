import React from "react";
import "./App.css";
import MulitpleStepForm from "./form/main";
import { BrowserRouter, Switch, Route, Link ,withRouter } from "react-router-dom";
 import {Button} from './form/main';

import PersonalDetails from "./form/personal details";
import FamilyInfo from "./form/family info";
import Health from "./form/health";
import Language from "./form/lang";
import Education from "./form/education";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Itkan main nav bar goes here  */}
        <div className="flex flex-row">
        <Link exact to="/">
            <Button value="next" />
          </Link>
          <Link to="/family">
            <Button value="next" />
          </Link>
          <Link to="/health">
            <Button value="2" />
          </Link>
          <Link to="/language">
            <Button value="3" />
          </Link>
          <Link to="/education">
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



        <nav className="flex-row">
          {/* <button type="submit" className="px-4 max-w-md justify-start ">login</button> */}

          <ul className="flex justify-evenly max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl	">
            <li>
              <Link to="/">
              {/* <Button value="next" /> */}
idk
              </Link>
            </li>
            <li>
            <Link to="/family">
            {/* <Button value="next" /> */}
         famil
          </Link>
                      </li>
            <li>
            <Link to="/health">
            <Button value="2" />
          </Link>
                      </li>
            <li>
            <Link to="/language">
            <Button value="3" />
          </Link>            </li>
          </ul>
        </nav>

<Switch>
<Route path="/" component={PersonalDetails}/>
<Route path="/family" component={FamilyInfo}/>
<Route path="/health" component={Health}/>
  <Route path="/language" component={Language}/>

</Switch>
       {/* <Switch>
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
          <Route path="/education" >
            <Education />
          </Route>
          <Route path="/health" component={Health}/>
             <Health />
          </Route> 
        </Switch>*/}
      </div>
    </BrowserRouter>
  );
}

export default withRouter(App);


const Dot =({value})=>{
return <div className="rounded-full w-25 justify-center bg-gray-500 ">{value}</div>
}