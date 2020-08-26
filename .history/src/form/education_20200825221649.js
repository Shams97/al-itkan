import React from 'react'
import {FormInput } from './main';


export default function Education() {
    // const { phone, email } = formData;
    // const { previous ,next } = navigation;
  
    return (
      <div className="form max-w-md rounded overflow-hidden shadow-lg mx-auto my-8">
          

        <h3> Education </h3>

        <FormInput placeholder="Phone" name="phone"  />
        <FormInput placeholder="Phone" name="phone" />
        <FormInput placeholder="Phone" name="phone" />
        <FormInput placeholder="E-mail" name="email" />



        <div>
        <button >Previous</button>
          <button >Next</button>
        </div>   
      </div>
    );
}
