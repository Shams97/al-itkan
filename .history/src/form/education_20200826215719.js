import React from 'react'
import {FormInput} from '../App';

const Section =({school, input_placeholder}) =>{
 return  <div>
  <p className="text-center">
    {school}
  </p>
  <FormInput placeholder={input_placeholder}/>
  </div>  
}
export default function Education() {
    // const { phone, email } = formData;
    // const { previous ,next } = navigation;
  
    return (
      <Section  school=""/>
    );
}
