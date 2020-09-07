import React, { useState, useContext } from "react";
import { FormInput, Button } from "../App";
import { Link } from "react-router-dom";
import { Operations } from "./family info";
import Radio from './radio'
import Selector from './selection'
import {Context} from '../store'


export default function Employment() {
  const [state, setState] = useContext(Context)
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);

  
  return (
    <div className=" w-5/6 rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <h3 className="my-8 text-2xl font-serif"> Employment history </h3>
      <div className="flex flex-row justify-center ">
      <p className="mt-4 text-center font-serif" name="contact_disclaimer">
        Can we contact your previous employer(s) ? provide them here{" "}
      </p>
      <div className="flex flex-col m-2 jusitfy-between mx-auto w-32">
        <Radio name="contact_disclaimer" ops={['Yes','No']}/>
      </div>
      </div>

      <div className="flex flex-col m-2 px-4">
        <FormInput placeholder="Employer Name" name="employer_name" />
        <FormInput placeholder="Job Title" name="job_title" />
        <FormInput placeholder="Employer Address" name="employer_address" />
        <FormInput placeholder="Employer Province" name="employer_province" />

        {/* EMPLOYEMENT DATE */}
        <span className="text-center mt-4">Date of employment </span>
        <div className="flex flex-row  my-2">
          <span className="text-sm mx-4 mt-5">from</span>
          <FormInput placeholder="from" name="from_date" type="date" />
          <span className="text-sm mx-4 mt-5">to</span>
          <FormInput
            placeholder="to"
            name="to_date"
            type="date"
            className="placeholder:none"
          />
        </div>

        {/*SALARY */}
        <span className="text-center mt-10 text-lg">salary </span>
        <div className="flex flex-row mb-8">
          <span className="text-sm mx-4 mt-5">start</span>
          <FormInput name="starting_slry" type="number"/>
          <span className="text-sm mx-4 mt-5">end</span>
          <FormInput name="ending_slry" type="number"/>
        </div>

        <FormInput placeholder="supervisor" name="supervisor" />
        <FormInput placeholder="supervisor phone No." name="super_phone" />

        <FormInput
          placeholder="Reason of Leaving"
          name="reason_for_leaving"
          type="text"
          textarea={true}
        />


      </div>

      <p className="mt-10 font-serif">Want to provide more than one employer ? </p>
      {show.map((input, index, m) => {
        let n = index;
        return (
          <div className="flex flex-col my-10" key={index}>

            <FormInput placeholder="Employer Name" name={"employer_name_" + n} />
            <FormInput placeholder="Job Title" name={"job_title_" + n}/>
            <FormInput placeholder="Employer Address" name={"employer_address_" + n} />
            <FormInput placeholder="Employer Province" name={"employer_province_" + n}/>

            {/* EMPLOYEMENT DATE */}
            <span className="text-center mt-4">Date of employment </span>
            <div className="flex flex-row  my-2">
              <span className="text-sm mx-4 mt-5">from</span>
              <FormInput
                placeholder="from"
                name={"from_date_" + n}
                type="date"
              />
              <span className="text-sm mx-4 mt-5">to</span>
              <FormInput
                placeholder="to"
                name={"to_date_" + n}
                type="date"
                className="placeholder:none"
              />
            </div>

            {/*SALARY */}
            <span className="text-center mt-4">salary </span>

            <div className="flex flex-row  my-2">
              <span className="text-sm mx-4 mt-5">start</span>
              <FormInput name={"starting_slry_" + n} />
              <span className="text-sm mx-4 mt-5">end</span>
              <FormInput name={"ending_slry_" + n} />
            </div>

            <FormInput placeholder="supervisor" name={"supervisor_"+n} />
            <FormInput
              placeholder="supervisor phone No."
              name={"super_phone_" + n}
            />


            <FormInput
              placeholder="Reason of Leaving"
              name={"reason_for_leaving_" + n}
              type="text"
              textarea={true}
            />

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
              setHide(show.length === 1 ? false : true)
              let last_index = show.length - 1
              delete state['data']["employer_name_"+last_index]
              delete state['data']["job_title_"+last_index]
              delete state['data']["employer_province_"+last_index]
              delete state['data']["from_date_"+last_index]
              delete state['data']["to_date_"+last_index]
              delete state['data']["starting_slry_"+last_index]
              delete state['data']["ending_slry_"+last_index]
              delete state['data']["supervisor_"+last_index]
              delete state['data']["super_phone_"+last_index]
              delete state['data']["reason_for_leaving_"+last_index]
              delete state['data']["to_date_"+last_index]
              delete state['data']["to_date_"+last_index]
              setState(state)
          }}
            operation="-"
          />
        ) : null}
      </div>

<div className="mb-4"/>
<Additional_info/>
<div className="mb-4"/>

<Refrence/>

    </div>
  );
}

export const Additional_info = () => {

  return (
      <div className="mx-auto mt-10 p-8">
        <h3 className="my-8 text-2xl"> Additional information </h3>

        <div className="flex flex-col my-4">
          <Options
            htmlFor="union_member"
            label_value="Are you a member of the Iraqi engineers union?"
          />
          <div className="flex flex-row ">
            <span className="text-sm mx-4 mt-5"> date </span>

            <FormInput placeholder="from" name="from_date" type="date" />
          </div>

          <Options
            htmlFor="driver_license"
            label_value="Do you have a valid drivers license?"
          />
          <div className="flex flex-row ">
            <span className="text-sm mx-4 mt-5">if yes since when ?</span>
            <FormInput name="driver_license_date" type="date" />
          </div>
          <FormInput
            placeholder="What is your means of transport?(Personal Car, Public, etc."
            name="means_of_transport"
          />

          <Options
            label_value="Are you good in keeping appointments?"
            htmlFor="good_appoint"
          />
          <Options label_value="Do you smoke ?" htmlFor="smoking" />
          <Options
            label_value="Can you handle long work hours?"
            htmlFor="long_hours"
          />
          <div className="flex flex-row">
            <span className="text-sm mx-4 mt-5">if yes since when ?</span>
            <FormInput name="start_date" type="date" />
          </div>

          <Options
            label_value="do you plan to complete studies, currently or in the future?"
            htmlFor="planning_to_study"
          />
          <Options
            label_value="Are you currently employed?"
            htmlFor="presently_employed"
          />
          <Options
            label_value="Can we contact your past employers?"
            htmlFor="contact_employer"
          />

          {/* Additional skills  */}
          <div className="bg-gray mt-10">
            <p className="text-center ">Add more additional skills</p>
            <div className="flex felx-col flex-wrap px-14  mx-8 justify-center">

              <div className="flex flex-row my-2">
                <span className="text-sm mx-4 mt-5">Team Work Skills</span>
                <Selector name="team_work" ops={['Excellent', 'Very Good', 'Good',
                'Average', 'Below Average', 'Poor', 'Very Poor']}/>
              </div>

              <div className="flex flex-row my-2">
                <span className="text-sm mx-4 mt-5">Work Under Pressure Skills</span>
                <Selector name="pressure" ops={['Excellent', 'Very Good', 'Good',
                'Average', 'Below Average', 'Poor', 'Very Poor']}/>
              </div>

              <div className="flex flex-rowm my-2">
                <span className="text-sm mx-4 mt-5">Are you Willing To Travel Outshore ?</span>
                <Selector name="travel" ops={['Excellent', 'Very Good', 'Good',
                'Average', 'Below Average', 'Poor', 'Very Poor']}/>
              </div>

            </div>




            <div className="flex flex-col my-10">
          <p> How did you refrral to us ? </p>

          <Selector name="referral_source" classes="text-sm text-gray-600"
          ops={['Walk-in', 'Employee', 'FaceBook', 'Linked-In']}/>

          <FormInput placeholder="other" name="other_referral_source" />
        </div>


        <div className="flex flex-col my-10">
          <p> choose your Prefered field of work  </p>
          <div className="flex flex-row  justify-center mt-2">
              <Radio name="preffered_fow" ops={['Technical', 'Sales', 'Administration']}/>
          </div>
          <p className="mt-10"> Prefered Contract Preiod </p>
          <div className="flex flex-row  justify-center mt-2">
            <Radio name="preferred_cp" ops={['3 Years', '5 Years', '10 Years']} />
          </div>
        </div>



          </div>
          {/* <FormInput placeholder="If you have any additional more skills please describe" className="my-8"/> */}
{/* 
          <div className="flex justify-around flex-row mt-8">
            <Link to="/emploment">
              <Button value="Previous" />
            </Link>
            <Link to="/refrence">
              <Button value="Next" />
            </Link>
          </div> */}
        </div>
      </div>
    
  );
};

export const Refrence = () => {
  const [state, setState] = useContext(Context)
  const [hide, setHide] = useState(false);
  const [hider, setHider] = useState(false);

  // const [image, setImage] = useState();

  let handleSubmit = (e) => {
    fetch("http://localhost:5000/api", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },

    }).then((response) => {
      console.log("response =", response);
    })

 
  }


  return (
    <div className=" mx-auto mt-10 p-8">
      <div className="flex flex-col my-10">
          <h3 className="my-8 text-2xl"> Reference  </h3>
          

          <div className="mt-10 flex flex-col ">
          <p className="text-center ">
            Please Provide two references who are not former employers who we
            may contact (Not Relative)
          </p>
            <FormInput placeholder="name" name="ref_name" />
            <FormInput placeholder="relation" name="ref_relation" />
            <FormInput placeholder="phone No" name="ref_phone" />
          </div>

        { hide?  <div className="mt-10 flex flex-col">
            <FormInput placeholder="name" name="ref_name_1" />
            <FormInput placeholder="relation" name="ref_relation_1" />
            <FormInput placeholder="phone No" name="ref_phone_1" />
          </div>:null}

         
          <div className="flex justify-around flex-row mt-4 ">
                {!hide ? (
                  <Operations
                  onClick={() => setHide(true)}
                  
                  operation="+"
                />
                ) : null}
                {hide ? (
                  <Operations
                  onClick={() => {
                    setHide(false) 
                    delete state['data']["ref_name_1"]
                    delete state['data']["ref_relation_1"]
                    delete state['data']["ref_phone_1"]
                    setState(state)
                  }}
                  operation="-"
                  />
                ) : null}
        </div>

        <div className="mt-10 flex flex-col ">
        <p> Relative </p>
            <FormInput placeholder="name" name="ref_r_name" />
            <FormInput placeholder="relation" name="ref_r_relation" />
            <FormInput placeholder="phone No" name="ref_r_phone" />
          </div>

        { hider?  <div className="mt-10 flex flex-col ">
            <FormInput placeholder="name" name="ref_r_name_1" />
            <FormInput placeholder="relation" name="ref_r_relation_1" />
            <FormInput placeholder="phone No" name="ref_r_phone_1" />
          </div>:null}

         
          <div className="flex  justify-around flex-row mt-4 ">
        {!hider ? (
        <Operations
          onClick={() => setHider(true)}
          operation="+"
        />
        ) : null}

        {hider ? (
          <Operations
            onClick={() => {
              setHider(false) 
              delete state['data']["ref_r_name_1"]
              delete state['data']["ref_r_relation_1"]
              delete state['data']["ref_r_phone_1"]
              setState(state)
            }}

            operation="-"
          />
        ) : null}
        </div>

        <p className="mt-10"> sign here to ensure that every information you provide is correct </p>

         <div className="flex flex-row my-2 mx-2">

           <FormInput placeholder="your signature" name="signature" />
           <span className="text-sm mx-4 mt-5">signature date</span><FormInput name="sig_date" type="date" />
           </div> 
          
           <div className="flex flex-col my-10">
             <h3 className="my-8 text-2xl "> Needed documents </h3>
             <div className="flex flex-row">
               <label className="mx-2 mt-2 w-1/2"> photo</label>
               <FormInput name="photo" type="file" accept="image/png, image/jpeg, image/jpg" />
             </div>

             <div className="flex flex-row ">
               <label className="mx-2 mt-2 px-4 w-1/2"> national ID </label>
               <FormInput name="national_id" type="file" />
             </div>
             <div className="flex flex-row">
               <label className="mx-2 mt-2 w-1/2"> citizenship certificate</label>
               <FormInput name="citizenship_cert" type="file"  accept="image/png, image/jpeg , image/jpg"/>
             </div>
             <div className="flex flex-row">
               <label className="mx-2 mt-2 w-1/2">Accomidation ID</label>
               <FormInput name="accomodation_id" type="file" />
             </div>
             <div className="flex flex-row">
               <label className="mx-2 mt-2 w-1/2"> university degree</label>
               <FormInput name="uni_degree" type="file" />
             </div>
             <div className="flex flex-row">
               <label className="mx-2 mt-2 w-1/2"> medical test </label>
               <FormInput name="medical" type="file" />
             </div>
             <div className="flex flex-row">
               <label className="mx-2 mt-2 w-1/2"> no criminal record </label>
               <FormInput name="no_crim_req" type="file" />
             </div>
             <div className="flex flex-row">
               <label className="mx-2 mt-2 w-1/2"> letter of recommendation 1</label>
               <FormInput name="letter_rec_1" type="file" />
             </div>
             <div className="flex flex-row">
               <label className="mx-2 mt-2 w-1/2"> letter of recommendation 2</label>
               <FormInput name="letter_rec_2" type="file" />
             </div>
          </div>
        </div>
      
      <div className="flex justify-around flex-row mt-8">
        <Link to="/technical">
          <Button value="Previous" />
        </Link>
        <Link to="/submited">
            <Button onClick={handleSubmit} value="Submit"/>
        </Link>
      </div>
    </div>
  );
};

const Options = ({ htmlFor, label_value }) => {
  return (
    <div className="flex flex-row mt-2 items-center">
      <label className="p-4" htmlFor={htmlFor}>
        {label_value}
      </label>
      <Radio name={htmlFor} mx={false} ops={['yes','no']} />
    </div>
  );
};
export const Submited = () => {
  return (
    <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <p className="text-center text-2xl mb-8">
        Thank you for your patient, Your application has been submitted
        susseccfully{" "}

      </p>
      <br/><span>for more information, please visit our website </span><br/>

      <a href="http://www.alitkan.com/">AL-ITKAN.com</a>
    </div>
  );
};
