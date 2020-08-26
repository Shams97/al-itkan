import React,{useState} from 'react'
import {FormInput } from './main';
import {Button } from './main';
import Health from "./health";

export default function FamilyInfo({formData, navigation}) {
    // const { phone, email } = formData;

    // const { previous, next } = navigation;
    const [show, setShow ] = useState(false)
    const [hide, setHide] = useState(true)

    function adding(){
      setShow(true)
      for(let i=0; i<8;i++)
      console.log("show = =",show)
      return show ? <FormInput/>: <p>Thanks for your patience , we don't need more.</p>
    }
    
    function removing(){
      return hide ? <FormInput/>: null
    }



    return (
      <div className="form ">
      <div className=" max-w-xl rounded overflow-hidden bg-white shadow-lg mx-auto mt-10 p-8">
        <h3> Family information </h3>
        <div className="flex  flex-col mx-4 mb-4 ">
        <FormInput placeholder="Father's profession " name="phone" />
        <FormInput placeholder="Mother's professtion" name="email"  />
       <p className="text-center">Do you have any sister or brothers ?</p>
        <FormInput placeholder="Brother/sister first name " name="first_name" />
        <FormInput placeholder="Brother/sister first name " name="profession" />
        <div className="flex  justify-around flex-row">
          <button onClick={()=>setShow(true)} >+</button>
          <button onClick={()=>setShow(!show)} >-</button>
          {show ?<div> <FormInput placeholder="Brother/sister first name " name="first_name" />
        <FormInput placeholder="Profession" name="profession" /></div>: <p>Thanks for your patience , we don't need more.</p>}

          </div>
       </div>
       
       </div>
       <div className="flex  justify-around flex-row">
       <Button value="Previous" />
     <a href={Health}>  <Button value="Next"  /></a>
        </div>


      </div>
    );
}

