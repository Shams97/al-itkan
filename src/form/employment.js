import React, { useState, useContext, useEffect } from "react";
import { FormInput, Button } from "../App";
import { Link } from "react-router-dom";
import { Operations } from "./family info";
import Radio from "./radio";
import Selector from "./selection";
import { Context } from "../store";
const axios = require("axios");

// let Global_ref ;

export default function Employment() {
  const [state, setState] = useContext(Context);
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState(false);

  return (
    <div className=" lg:w-5/6 md:w-5/6  rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8 sm:w-full">
      <h3 className="my-8 text-2xl font-serif"> Employment history </h3>

      <div className="flex flex-row justify-center flex-wrap">
        <p className="mt-2 text-center font-serif" name="contact_disclaimer">
          Can we contact your previous employer(s) ? provide them here{" "}
        </p>
        <div className="flex flex-col m-2 jusitfy-between  mx-8  w-32">
          <Radio name="contact_disclaimer" ops={["Yes", "No"]} />
        </div>
      </div>

      <div className="flex flex-col flex-wrap m-2 lg:px-16 md:px-16 sm:px-4">
        <FormInput placeholder="employer name" name="employer_name" />
        <FormInput placeholder="job title" name="job_title" />
        <FormInput placeholder="employer address" name="employer_address" />
        <FormInput placeholder="employer province" name="employer_province" />

        {/* EMPLOYEMENT DATE */}
        <div
          className="flex flex-row justify-around lg:flex-no-wrap md:flex-no-wrap 
 sm:flex-wrap"
        >
          <span className="text-center lg:mt-6 md:mt-6 sm:mt-16 lg:text-lg md:text-lg sm:text-base">
            Date of employment{" "}
          </span>
          <div className="lg:flex md:flex flex-row  sm:block my-2 flex-wrap">
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
        </div>
        {/*SALARY */}
        <div className="flex flex-row justify-around mb-4 flex-wrap">
          <span className="text-center mt-6 text-lg px-4">Salary </span>
          <div className="flex flex-row lg:ml-20 md:ml-10 sm:ml-2 my-4 flex-wrap">
            <span className=" mx-4 mt-5">start</span>
            <FormInput name="starting_slry" type="number" />
            <span className=" mx-4 mt-5">end</span>
            <FormInput name="ending_slry" type="number" />
          </div>
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

      {show.map((input, index) => {
        let n = index;
        return (
          <div
            className="flex flex-col flex-wrap mx-2 lg:px-16 md:px-16 sm:px-4 my-10"
            key={index}
          >
            <FormInput
              placeholder="employer Name"
              name={"employer_name_" + n}
            />
            <FormInput placeholder="Job Title" name={"job_title_" + n} />
            <FormInput
              placeholder="employer Address"
              name={"employer_address_" + n}
            />
            <FormInput
              placeholder="employer Province"
              name={"employer_province_" + n}
            />

            {/* EMPLOYEMENT DATE 22 */}
            <div
              className="flex flex-row justify-around lg:flex-no-wrap md:flex-no-wrap 
 sm:flex-wrap"
            >
              <span className="text-center lg:mt-6 md:mt-6 sm:mt-16 lg:text-lg md:text-lg sm:text-base">
                Date of employment{" "}
              </span>
              <div className="lg:flex md:flex flex-row  sm:block  my-2 flex-wrap">
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
            </div>

            {/*SALARY 22 */}
            <div className="flex flex-row justify-around mb-4 flex-wrap">
              <span className="text-center mt-6 text-lg px-4">Salary </span>
              <div className="flex flex-row  lg:ml-20 md:ml-10 sm:ml-2  my-4 flex-wrap">
                <span className="mx-4 mt-5">start</span>
                <FormInput name={"starting_slry_" + n} type="number" />
                <span className="mx-4 mt-5">end</span>
                <FormInput name={"ending_slry_" + n} type="number" />
              </div>
            </div>

            <FormInput placeholder="supervisor" name={"supervisor_" + n} />
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

      <div className="flex  justify-around flex-row mt-4">
        <span className="font-serif text-red-400 ">
          Want to provide more than one employer ?{" "}
        </span>

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
              setHide(show.length === 1 ? false : true);
              let last_index = show.length - 1;
              delete state["data"]["employer_name_" + last_index];
              delete state["data"]["job_title_" + last_index];
              delete state["data"]["employer_province_" + last_index];
              delete state["data"]["from_date_" + last_index];
              delete state["data"]["to_date_" + last_index];
              delete state["data"]["starting_slry_" + last_index];
              delete state["data"]["ending_slry_" + last_index];
              delete state["data"]["supervisor_" + last_index];
              delete state["data"]["super_phone_" + last_index];
              delete state["data"]["reason_for_leaving_" + last_index];
              delete state["data"]["to_date_" + last_index];
              delete state["data"]["to_date_" + last_index];
              setState(state);
            }}
            operation="-"
          />
        ) : null}
      </div>

      <div className="mb-4" />
      <Additional_info />
      <div className="mb-4" />
      <Refrence />
    </div>
  );
}

export const Additional_info = () => {
  return (
    <div className="mx-auto mt-10 lg:p-8 md:p-8 sm:p-4">
      <h3 className="my-8 text-2xl"> Additional information </h3>

      <div className="flex flex-col my-8">
        <div className="flex flex-row justify-between flex-wrap my-4">
          <Options
            htmlFor="union_member"
            label_value="Are you a member of the Iraqi engineers union?"
          />
          <div className="flex flex-row flex-wrap ">
            <span className="text-sm mx-4 mt-5"> date </span>

            <FormInput name="from_date" type="date" />
          </div>
        </div>

        <div className="flex flex-row justify-between mb-4 flex-wrap mt-4 lg:mx-0 md:mx-0 sm:mx-auto ">
          <Options
            htmlFor="driver_license"
            label_value="Do you have a valid drivers license?"
          />
          <div className="flex flex-row  flex-wrap">
            <span className="text-sm mx-4 lg:mt-8 md:mt-8 sm:mt-2 ">
              if yes since when ?
            </span>
            <FormInput name="driver_license_date" type="date" />
          </div>
        </div>

        <FormInput
          placeholder="What is your means of transport?(Personal Car, Public, etc.)"
          name="means_of_transport"
        />

        <div className="flex flex-row justify-between flex-wrap ">
          <Options
            label_value="Are you good in keeping appointments?"
            htmlFor="good_appoint"
          />
          <Options label_value="Do you smoke ?" htmlFor="smoking" />
        </div>

        <div className="flex flex-row justify-between flex-wrap ">
          <Options
            label_value="Can you handle long work hours?"
            htmlFor="long_hours"
          />

          <div className="flex flex-row flex-wrap my-4">
            <span className="mx-4 mt-5">When can you begin to work?</span>
            <FormInput name="start_date" type="date" />
          </div>
        </div>

        <div className="flex flex-row justify-between flex-wrap ">
          <Options
            label_value="Do you plan to complete studies, currently or in the future?"
            htmlFor="planning_to_study"
          />
          <Options
            label_value="Are you currently employed?"
            htmlFor="presently_employed"
          />
        </div>
        <Options
          label_value="Can we contact your past employers?"
          htmlFor="contact_employer"
        />

        {/* Additional skills  */}
        <div className="mt-10">
          <p className="text-center text-xl my-8 ">
            Add more additional skills
          </p>

          <div className="flex flex-row justify-center ">
            <div className="lg:flex md:flex sm:block flex-col flex-wrap my-4">
              <span className="mx-4 mt-5 w-1/2 text-left">
                Team Work Skills
              </span>
              <Selector
                name="team_work"
                ops={[
                  "Excellent",
                  "Very Good",
                  "Good",
                  "Average",
                  "Below Average",
                  "Poor",
                  "Very Poor",
                ]}
                className="w-1/2"
              />
            </div>

            <div className="lg:flex md:flex sm:block  flex-col my-4 flex-wrap ">
              <span className="mx-4 mt-5 lg:w-1/2 md:w-1/2 sm:w-full text-left ">
                Work Under Pressure Skills
              </span>
              <Selector
                name="pressure"
                ops={[
                  "Excellent",
                  "Very Good",
                  "Good",
                  "Average",
                  "Below Average",
                  "Poor",
                  "Very Poor",
                ]}
                className="lg:w-1/2 md:w-1/2 sm:w-full"
              />
            </div>

            <div className="lg:flex md:flex sm:block  flex-col my-4 flex-wrap ">
              <span className=" mx-4 mt-5 w-1/2 text-left">
                Are you Willing To Travel Outshore ?
              </span>
              <Selector
                name="travel"
                ops={[
                  "Excellent",
                  "Very Good",
                  "Good",
                  "Average",
                  "Below Average",
                  "Poor",
                  "Very Poor",
                ]}
                className="w-1/2"
              />
            </div>
          </div>

          <div className="flex flex-row my-10 justify-around flex-wrap">
            <p className="mt-4"> How did you refrral to us ? </p>

            <Selector
              name="referral_source"
              classes="text-sm text-gray-600 lg:w-1/4 md:w-1/4 sm:w-full"
              ops={["Walk-in", "Employee", "FaceBook", "Linked-In"]}
            />

            <FormInput placeholder="other" name="other_referral_source" />
          </div>

          <div className="lg:flex md:flex flex-row sm:block mt-20 ">
            <div className="flex flex-col lg:w-1/2 md:w-1/2 sm:w-full">
              <p> choose your Prefered field of work </p>
              <div className="flex flex-row  justify-center mt-2 mb-4">
                <Radio
                  name="preffered_fow"
                  ops={["Technical", "Sales", "Administration"]}
                />
              </div>
            </div>

            <div className="flex flex-col   lg:w-1/2 md:w-1/2 sm:w-full">
              <p> Prefered Contract Preiod </p>
              <div className="flex flex-row  justify-center mt-2 mb-4">
                <Radio
                  name="preferred_cp"
                  ops={["3 Years", "5 Years", "10 Years"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Refrence = () => {
  const [state, setState] = useContext(Context);
  const [hide, setHide] = useState(false);
  const [hider, setHider] = useState(false);
  const [globel_ref, setRef] = useState("");

  // useEffect(()=>{

  //   axios.post("http://localhost:5000/api", state)
  //   .then(
  //     (res) =>
  //     {
  //       let reference  = res.data
  //       setRef(reference)
  //       console.log("response ", res, globel_ref  )
  //     })
  // },[])

  let handleSubmit = async() => {
   await axios.post("http://localhost:5000/api", state).then((res) => {
      let reference = res.data;
      state["key"] = reference;
      console.log("response key ====", state.key);
    });
  };

  return (
    <div className=" mx-auto">
      <div className="flex flex-col mt-10">
        <h3 className="my-8 text-2xl"> Reference </h3>

        <div className="mt-10 flex flex-col">
          <p className="text-center ">
            Please Provide two references who are not former employers who we
            may contact (Not Relative)
          </p>
          <FormInput placeholder="name" name="ref_name" />
          <FormInput placeholder="relation" name="ref_relation" />
          <FormInput placeholder="phone No" name="ref_phone" />
        </div>

        {hide ? (
          <div className="mt-10 flex flex-col">
            <FormInput placeholder="name" name="ref_name_1" />
            <FormInput placeholder="relation" name="ref_relation_1" />
            <FormInput placeholder="phone No" name="ref_phone_1" />
          </div>
        ) : null}

        <div className="flex justify-around flex-row mt-4 ">
          {!hide ? (
            <Operations onClick={() => setHide(true)} operation="+" />
          ) : null}

          {hide ? (
            <Operations
              onClick={() => {
                setHide(false);
                delete state["data"]["ref_name_1"];
                delete state["data"]["ref_relation_1"];
                delete state["data"]["ref_phone_1"];
                setState(state);
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

        {hider ? (
          <div className="mt-10 flex flex-col ">
            <FormInput placeholder="name" name="ref_r_name_1" />
            <FormInput placeholder="relation" name="ref_r_relation_1" />
            <FormInput placeholder="phone No" name="ref_r_phone_1" />
          </div>
        ) : null}

        <div className="flex  justify-around flex-row mt-4 ">
          {!hider ? (
            <Operations onClick={() => setHider(true)} operation="+" />
          ) : null}

          {hider ? (
            <Operations
              onClick={() => {
                setHider(false);
                delete state["data"]["ref_r_name_1"];
                delete state["data"]["ref_r_relation_1"];
                delete state["data"]["ref_r_phone_1"];
                setState(state);
              }}
              operation="-"
            />
          ) : null}
        </div>

        <div className="flex flex-row my-2 mx-2 flex-wrap">
          <p className="mt-8 mx-4">
            {" "}
            Sign here to ensure that every information you provide is correct{" "}
          </p>
          <FormInput placeholder="your signature" name="signature" />
          <span className="text-sm mx-4 mt-5">date</span>
          <FormInput name="sig_date" type="date" />
        </div>

        <div className="flex flex-col my-10 lg:p-8 md:p-8 sm:p-2">
          <h3 className="my-8 text-2xl "> Needed documents </h3>
          <div className="lg:flex md:flex sm:block flex-row my-4">
            <label className="mx-2 mt-2 w-1/2"> photo</label>
            <FormInput
              name="photo"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
            />
          </div>

          <div className="lg:flex md:flex sm:block flex-row my-4">
            <label className="mx-2 mt-2 px-4 w-1/2"> national ID </label>
            <FormInput name="national_id" type="file" />
          </div>
          <div className="lg:flex md:flex sm:block flex-row my-4">
            <label className="mx-2 mt-2 w-1/2"> citizenship certificate</label>
            <FormInput
              name="citizenship_cert"
              type="file"
              accept="image/png, image/jpeg , image/jpg"
            />
          </div>
          <div className="lg:flex md:flex sm:block flex-row my-4">
            <label className="mx-2 mt-2 w-1/2">accomidation ID</label>
            <FormInput name="accomodation_id" type="file" />
          </div>
          <div className="lg:flex md:flex sm:block flex-row my-4">
            <label className="mx-2 mt-2 w-1/2"> university degree</label>
            <FormInput name="uni_degree" type="file" />
          </div>
          <div className="lg:flex md:flex sm:block flex-row my-4">
            <label className="mx-2 mt-2 w-1/2"> medical test </label>
            <FormInput name="medical" type="file" />
          </div>
          <div className="lg:flex md:flex sm:block flex-row my-4">
            <label className="mx-2 mt-2 w-1/2"> no criminal record </label>
            <FormInput name="no_crim_req" type="file" />
          </div>
          <div className="lg:flex md:flex sm:block flex-row my-4">
            <label className="mx-2 mt-2 w-1/2">
              {" "}
              letter of recommendation 1
            </label>
            <FormInput name="letter_rec_1" type="file" />
          </div>
          <div className="lg:flex md:flex sm:block flex-row my-4">
            <label className="mx-2 mt-2 w-1/2">
              {" "}
              letter of recommendation 2
            </label>
            <FormInput name="letter_rec_2" type="file" />
          </div>
        </div>
      </div>

      <div className="flex justify-around flex-row mt-8">
        <Link to="/technical">
          <Button value="Previous" />
        </Link>
      
        <Link to={{ pathname: `/submited` }}>
          <Button onClick={handleSubmit} value="Submit" />
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
      <Radio name={htmlFor} mx={false} ops={["yes", "no"]} />
    </div>
  );
};

export const Submited = () => {
  const [ref, setRef] = useState(0);
  const [state, setState] = useContext(Context);

  useEffect(() => {
    // for(let i=0; i<2; i++)
    setTimeout(() => {
    console.log("key ===", state['key'])
     
    
      if (state['key']) {
        setRef( state['key']);
        console.log("key ==", state.key, "refrence ", ref);
      }
      
    }, 3000);
 
  }, []);


  return (
    <div className="max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
      <p className="text-center text-2xl mb-8">
        Thank you for your patient, Your application has been submitted
        successfully{" "}
      </p>
      <p className="text-base mx-4">To follow up with your application, you can use this reference 
     {ref? <span className="text-red-400 mx-2">{ref}</span>
     :<span className="mx-2">Still loading .. </span>}
      </p>
      <br />
      <span>for more information, please visit our website </span>
      <br />

      <a href="http://www.alitkan.com/">AL ITKAN.com</a>
    </div>
  );
};
