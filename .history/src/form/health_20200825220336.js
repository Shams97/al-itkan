import React from 'react'
import {FormInput } from './main';

export default function Health({formData, navigation}) {
    // const { phone, email } = formData;

    // const { previous, next } = navigation;
  
    return (
      <div className="form">
       <form action="POST">   
        <h3> Health and limitation </h3>
        <FormInput placeholder="Phone" name="phone" />
        <FormInput placeholder="E-mail" name="email"  />
        <FormInput placeholder="E-mail" name="email" />
        <FormInput placeholder="E-mail" name="email" />
        <button onClick={()=>console.log("something wrong here ")}>Prev</button>

      </form>
        <div>
          {/* <button onClick={previous}>Previous</button> */}
          {/* <button onClick={next}>Next</button> */}
        </div>
      </div>
    );
}
