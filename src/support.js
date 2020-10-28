import React, { useEffect, useContext, useState } from "react";
import { FormInput, Button, R_link } from "./App";
import { Context } from "./store";
import { Link, Redirect } from "react-router-dom";

const axios = require("axios");

export default function Support(submittedState) {
  const [state, setState] = useContext(Context);

  return (
    <div className="lg:w-3/4 md:w-3/4 rounded overflow-hidden bg-white shadow-lg mx-auto mt-24 p-8 sm:w-full">
      <h3 className="mb-8 mt-4 text-2xl "> Support </h3>
      <div className="lg:flex md:flex sm:block lg:flex-row md:flex-row sm:flex-col  justify-between mx-auto ">
        <div className="flex flex-col  mx-8 mb-4 w-full">
          <FormInput name="partner_name" type="text" placeholder="Your name" />
          <FormInput
            name="partner_email"
            type="text"
            placeholder="Your email"
          />
          <FormInput name="name" type="text" placeholder="Subject" />
          <FormInput name="description" type="text" placeholder="Description" />
          <FormInput name="attachment" type="file" />
          <div className="px-4 my-4">
            <p id="loading_text" className="hidden mb-4"> please wait...</p>

            <R_link value="Submit" fields={[]} route="/ticket_submitted"
            url="https://jobsbackend.alitkan.com/api/helpdesk" stateKey="help_desk_ticket"/>

          </div>
        </div>
      </div>
    </div>
  );
}

export const Ticket_submitted = () => {
  const [state, setState] = useContext(Context);

  return (
    <div className="max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-24 p-8">
      
      { state.help_desk_ticket ?
          state.help_desk_ticket.created ? 
          <p className="text-center text-2xl mb-8">
            Your ticket has been submitted successfully, Our support staff will
            contact you shorty
          </p> 
          : 
          <p> Something went wrong when submiting you ticket. Please try again later </p>

        :

        <p className="text-center text-lg mb-8">
          No Ticket is submited. Please go back to the ticket page 
        </p> 

      }
    
    </div>
  );
};

