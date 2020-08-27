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
  
    return   <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
        <h3 className="my-8 text-2xl" > Education</h3>
        <div className="flex  flex-col m-2">
          <Section  school="Primary" placeholder=""/>
          <Section  school="Intermediate" placeholder=""/>
          <Section  school="Secondary" placeholder=""/>
          <Section  school="College or institute" placeholder=""/>
      </div>
      </div>
  
}