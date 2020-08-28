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
const onSubmit  =data =>{
  console.log(data)
}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} action="POST">
      <input  onChange={()=>setState([...input_value, {}]) } type="text" placeholder="trying " ref={register} value={register}/>
      <input  onChange={()=> setState([...input_value, {}])} type="file" ref={register} value={register}/>
      <input  onChange={()=> setState([...input_value, {}])} type="date" ref={register} value={register}/>
   <input type="submit" value="submit"/>
     </form>
    </div>
  )
}
