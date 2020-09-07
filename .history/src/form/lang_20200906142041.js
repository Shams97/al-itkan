import React,{useState, useContext} from "react";
import { Button,FormInput } from "../App";
import { Link } from "react-router-dom";
import Selector from './selection'
import {Context} from '../store'

export default function Language() {

  const [state, setState] = useContext(Context)
  const [show , setShow] =useState([])
  const [hide, setHide] = useState(false);

  return (
    <div>
      <div className="mx-auto mt-10 p-8 ">
          <h2 className="my-8 text-2xl"> Language and level of proficiency </h2>
           <p className="mt-4 mb-2">Measture your proficiency by selecting level in every language </p>

           <div className="flex flex-row justify-center">

            <LangaugeSection name="Arabic" logic_name="ar"/> 

            <LangaugeSection name="English" logic_name="en"/> 
      
           </div>
           <div className="flex flex-col mx-4">
           {show.map((input, index) => {
            let n = index;
            return (
              <div className="flex flex-col mt-8 px-8 justify-center"> 
              <FormInput placeholder={"add the name of language you know"}
              className="my-8" name={"other_name_"+n}/>

              <label htmlFor="arabic" className="mt-4">Read</label>
              <Selector name={"other_r_" + index} classes="text-sm text-gray-600"
              ops={['Excellent', 'Very Good', 'Good', 'Average', "Below Average",
              "poor", 'Very Poor']} values={[7,6,5,4,3,2,1]}/>

              <label htmlFor="arabic" className="mt-4"> Write</label>
              <Selector name={"other_w_" + index} classes="text-sm text-gray-600"
              ops={['Excellent', 'Very Good', 'Good', 'Average', "Below Average",
              "poor", 'Very Poor']} values={[7,6,5,4,3,2,1]}/>

              <label htmlFor="arabic" className="mt-4"> Speak</label>
              <Selector name={"other_s_" + index} classes="text-sm text-gray-600"
              ops={['Excellent', 'Very Good', 'Good', 'Average', "Below Average",
              "poor", 'Very Poor']} values={[7,6,5,4,3,2,1]}/>

              <label htmlFor="arabic" className="mt-4"> Understand</label>
              <Selector name={"other_u_" + index} classes="text-sm text-gray-600"
              ops={['Excellent', 'Very Good', 'Good', 'Average', "Below Average",
              "poor", 'Very Poor']} values={[7,6,5,4,3,2,1]}/>

              <label htmlFor="arabic" className="mt-4" > Overall </label>
              <Selector name={"other_o_" + index} classes="text-sm text-gray-600"
              ops={['Excellent', 'Very Good', 'Good', 'Average', "Below Average",
              "poor", 'Very Poor']} values={[7,6,5,4,3,2,1]}/>


           </div> 
           ) } )}
        </div>
     
          <div className="flex  justify-around flex-row mt-4">
           <p className="text-red-400">Add more language ( just two allowed ) </p> 
           <button
              onClick={() => {
                setShow([...show, {}]); setHide(true) }}
             className="px-4 hover:bg-gray-500 focus:bg-gray-600 rounded"
           >
              +
            </button>
            { hide ? <button onClick={(index) => {
                setShow(show.slice(0, show.length - 1))
                setHide(show.length == 2 ? true : false)
                let last_index = show.length - 1
                delete state['data']['other_name_' + last_index]
                delete state['data']['other_r_' + last_index]
                delete state['data']['other_w_' + last_index]
                delete state['data']['other_s_' + last_index]
                delete state['data']['other_u_' + last_index]
                delete state['data']['other_o_' + last_index]
                setState(state)
            }} className="px-4 hover:bg-gray-500 focus:bg-gray-600 rounded">
              -
            </button>:null }  
          </div>
      
        </div>
     
    
        <div className="mb-4"/>

    </div>
  );
}

const LangaugeSection = ({name, logic_name}) => {
  return <div className="flex flex-col mx-4 w-1/2 ">
      <p className="mb-8 mt-4 text-xl"> {name}</p>

      {/* <label htmlFor="arabic" className="mt-4">Read</label> */}
      <Selector name={logic_name + "_r"} classes="text-sm text-gray-600"
      ops={['Excellent', 'Very Good', 'Good', 'Average', "Below Average",
      "poor", 'Very Poor']} values={[7,6,5,4,3,2,1]} label="speak"/>

      {/* <label htmlFor="arabic" className="mt-4"> Write</label> */}
      <Selector name={logic_name + "_w"} classes="text-sm text-gray-600"
      ops={['Excellent', 'Very Good', 'Good', 'Average', "Below Average",
      "poor", 'Very Poor']} values={[7,6,5,4,3,2,1]} label="speak"/>

      {/* <label htmlFor="arabic" className="mt-4"> Speak</label> */}
      <Selector name={logic_name + "_s"} classes="text-sm text-gray-600"
      ops={["speak",'Excellent', 'Very Good', 'Good', 'Average', "Below Average",
      "poor", 'Very Poor']} values={[7,6,5,4,3,2,1]} label="speak"/>

      <label htmlFor="arabic" className="mt-4"> Understand</label>
      <Selector name={logic_name + "_u"} classes="text-sm text-gray-600"
      ops={['Excellent', 'Very Good', 'Good', 'Average', "Below Average",
      "poor", 'Very Poor']} values={[7,6,5,4,3,2,1]}/>

      <label htmlFor="arabic" className="mt-4" > Overall </label>
      <Selector name={logic_name + "_o"} classes="text-sm text-gray-600"
      ops={['Excellent', 'Very Good', 'Good', 'Average', "Below Average",
      "poor", 'Very Poor']} values={[7,6,5,4,3,2,1]}/>

    </div>

}

export const SelectField = ({language,forValue})=>{
  return <div className="flex flex-col mx-4 w-1/2">
  <p className="mb-8  mt-4 text-xl"  htmlFor={forValue}> {language}</p>

  {/* <label htmlFor="arabic" className="mt-4">Read</label> */}
  <Selector name="ar_r" classes="text-sm text-gray-600"
  ops={['Excellent', 'Very Good', 'Good', 'Average', "Below Average"]} label="speak"/>

  {/* <label htmlFor="arabic" className="mt-4"> Write</label> */}
  <Selector name="ar_w" classes="text-sm text-gray-600"
  ops={['Excellent', 'Very Good', 'Good', 'Average', "Below Average"]}  label="speak"/>

  {/* <label htmlFor="arabic" className="mt-4"> Speak</label> */}
  <Selector name="ar_s" classes="text-sm text-gray-600"
  ops={['Excellent', 'Very Good', 'Good', 'Average', "Below Average"]} label="speak"/>

  {/* <label htmlFor="arabic" className="mt-4"> Understand</label> */}
  <Selector name="ar_u" classes="text-sm text-gray-600"
  ops={['Excellent', 'Very Good', 'Good', 'Average', "Below Average"]} label="speak"/>

  {/* <label htmlFor="arabic" className="mt-4" > Overall </label> */}
  <Selector name="ar_o" classes="text-sm text-gray-600"
  ops={['Excellent', 'Very Good', 'Good', 'Average', "Below Average"]} label="speak"/>
  </div>
}