import React, { useState, useContext } from "react";
import { FormInput } from "./main";
import { Button } from "./main";
import { Link } from "react-router-dom";
import { Operations } from "./family info";
import { Context } from "../store"
import Radio from './radio'

export const Technical_skills = () => {
  const [state, setState] = useContext(Context)
  const [show, setShow] = useState([1,1]);
  const [hide, setHide] = useState(false);

  return (
    <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl"> Technical Skills</h3>
      <div className="flex  flex-col my-4">
        <p> write down what you good at and how much </p>

        {show.map((input, index) => {
         let n = index;
          return (
            <div className="flex flex-col mt-8" key={index}>
              <FormInput placeholder="your technical skills" name={"tech_skills_name_"+n}/>
              <div className="flex flex-row jusitfy-between mx-auto my-4">
                <Radio name={"tech_skills_level_"+n} ops={['Intermediate', 'Advance', 'Expert']}/>
              </div>
            </div>
          );
        })}

        <div className="flex justify-around flex-row mt-4 ">
          <Operations
            onClick={() => {
              setShow([...show, {}]);
              setHide(true);
            }}
            operation="+"
          />
          {hide ? (
            <Operations
              onClick={() => {
                setShow(show.slice(0, show.length - 1));
                setHide(show.length == 3 ? false : true)
                let last_index = show.length
                delete state['data']['tech_skills_name_' + last_index]
                delete state['data']['tech_skills_level_' + last_index]
                setState(state)
              }}
              operation="-"
            />
          ) : null}
        </div>
      </div>

      <div className="flex justify-around flex-row mt-8">
        <Link to="/education">
          <Button value="Previous" />
        </Link>
        <Link to="/admin_skills">
          <Button value="Next" />
        </Link>
      </div>
      <div className="mb-4" />
    </div>
  );
};

export default function Admin_Skills() {
  
  return (
    <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl">Adminstration skills</h3>
      <div className="flex  flex-col m-2">

        <OptionField name="Business Correspondence"/>

        <OptionField name="Effective Communication"/>

        <OptionField name="Customer Service"/>

        <OptionField name="Team Work"/>

        <OptionField name="Internet and Research"/>

        <OptionField name="Microsoft Office and Outlook"/>

        <OptionField name="Office Machines and Equipment"/>

        <OptionField name="Typing"/>

        <OptionField name="Time Management And Prioritizing"/>

        <OptionField name="Attention to Details"/>

        <OptionField name="Multi Tasking"/>

        <OptionField name="Follow Up"/>

        <OptionField name="Employee Relations"/>

        <OptionField name="Supervision"/>

      </div>
      <div className="flex justify-around flex-row mt-10">
        <Link to="/technical">
          <Button value="Previous" />
        </Link>
        <Link to="/sales_skills">
          <Button value="Next" />
        </Link>
      </div>

      <div className="mb-4" />
    </div>
  );
}

export const Sales_Skills = () => {
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);

  return (
    <form action="POST">
      <div className="max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
        <h3 className="my-8 text-2xl">Sales Sales</h3>
        <div className="flex  flex-col m-2">

          <p className="text-center mt-4">Relationship building</p>
          <div className="flex flex-row jusitfy-between mx-auto my-4">
            <Radio name="business_Correspondence" ops={['Not Familiar', 'Beginner', 'Intermediate',
            'Advance', 'Expert']}/>
          </div>

          <OptionField
            name="Relationship building"
            htmlFor="relationship_and_building"
          />

          <OptionField name="Time management" htmlFor="time_managment" />
          <OptionField
            name="Research / Information gathering"
            htmlFor="research_and_information_gathareing"
          />
          <OptionField
            name="Medical product knowledge"
            htmlFor="medical_prodcuct_knowledge"
          />
          <OptionField
            name="Business communication"
            htmlFor="buisness_communication"
          />
          <OptionField name="client engagement" htmlFor="client_engagement" />
          <OptionField
            name="Sales presentations / Demos"
            htmlFor="sales_presenatitinos_and_demos"
          />
          <OptionField
            name="Contract negotiation"
            htmlFor="contract_negotiotaion"
          />
          <OptionField name="Closing skills" htmlFor="closing_skills" />
          <OptionField
            name="Self-motivated / ambitious"
            htmlFor="Self_motivted_and_ambitious"
          />
          <OptionField name="Adaptability" htmlFor="adaptability" />
          <OptionField name="Responsibility" htmlFor="responsibility" />
          <OptionField name="Goal-oriented" htmlFor="goal_oriented" />
          <OptionField
            name="Passionate about selling"
            htmlFor="passionate_about_selling"
          />
        </div>
        <div className="flex justify-around flex-row mt-10">
          <Link to="/admin_skills">
            <Button value="Previous" />
          </Link>
          <Link to="/training">
            <Button value="Next" />
          </Link>
        </div>
        <div className="mb-4" />
      </div>
    </form>
  );
};

export const Training = () => {
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);
  return (
      <div className=" w-3/4	rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8 ">
        <h3 className="my-8 text-2xl"> Training and Certification </h3>
       
        <div className="flex flex-col my-4">
          <FormInput placeholder="training name" name="t1"/>
          <FormInput placeholder="year" name="t1_year"/>
          <FormInput placeholder="awarded by" name="t1_awarded_by"/>
          <FormInput placeholder="country/city" name="t1_country_city"/>
        
        </div>
       


        {show.map((input, index) => {
          let n = show.length-1;
          return (
            <div className="flex flex-col my-8" key={index} >
          <FormInput placeholder="training name " name={"t"+n} value={input}/>
          <FormInput placeholder="year" name={"t"+n +"_year"} value={input}/>
          <FormInput placeholder="awarded by" name={"t"+n +"_awarded_by"} value={input}/>
          <FormInput placeholder="country/city" name={"t"+ n +"_country_city"} value={input}/>
            </div>

);
        })}

        <div className="flex  justify-around flex-row mt-4 ">
          <Operations
            onClick={() => {
              setShow([...show, {}]);
              setHide(true);

            }}
            operation="+"
          />
          {hide ? (
            <Operations
              onClick={() => {
                setShow(show.slice(0, show.length - 1));
              }}
              operation="-"
            />
          ) : null}
       </div>
        <div className="flex justify-around flex-row mt-8">
          <Link to="/sales_skills">
            <Button value="Previous" />
          </Link>
          <Link to="/emploment">
            <Button value="Next" />
          </Link>
        </div>
        <div className="mb-4" />
      </div>
  );
};

const OptionField = ({name, logic_name}) => {
  logic_name = logic_name == undefined ? name.toLowerCase().split(' ').join('_') : logic_name
  return (
    <div>
      <p className="text-center mt-4">{name}</p>
      <div className="flex flex-row jusitfy-between mx-auto my-4">
        <Radio name={logic_name} ops={['Not Familiar', 'Beginner', 'Intermediate',
        'Advance', 'Expert']}/>
      </div>
    </div>      
  );
};
