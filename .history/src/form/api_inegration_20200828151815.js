// import React, { Component } from "react";
// import { FormInput } from "../App";
// const url="";
// export default class api_inegration extends Component {
//     state = {
//      input_value :[]
//     }


//     componentDidMount() {
//     fetch(url + "/api", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "same-origin",
//     }).then(
//         function(response) {
//             response.status     //=> number 100–599
//             response.statusText //=> String
//             response.headers    //=> Headers
//             response.url        //=> String
          
//             return response.text()
//           }, function(error) {
//             error.message //=> String
//           }
//     );
//   }

//   render() {
//     return <div>
//       <form onSubmit={}>
//       <FormInput  onChange={()=>this.setState([...input_value, {}]) } type="text" placeholder="trying "/>
//       <FormInput  onChange={()=> this.setState([...input_value, {}])} type="file"/>
//       <FormInput  onChange={()=> this.setState([...input_value, {}])} type="date"/>
//     </form>
//     </div>;
//   }
// }

import React,{useEffect, useState} from 'react'
import { useForm} from "react-hook-form";
import { FormInput } from "../App";

export default function Api_inegration() {
 const [input_value,setState] = useState([])
const {register , handleSubmit} = useForm();
useEffect((name , value , onChange) => {
    
  fetch("http://localhost:3000/api/", {
   method: "POST",
   body: JSON.stringify(),
   headers: {
     "Content-Type": "application/json",
   },
 }).then((res) => {
       setState([{...res}]);
       console.log("response ==", res, data);
     }
 )
})
const onSubmit  =data =>{
      setState(data)
  console.log(data)
}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput placeholder="trying " ref={register} name="trying"/>
      <FormInput placeholder="trying " ref={register} name="password" type="password"/>
      {/* <input  type="file" ref={register} name="file"/> */}
      <FormInput type="date" ref={register} name="try"/>

   <input type="submit" value="submit"/>
     </form>
    </div>
  )
}
