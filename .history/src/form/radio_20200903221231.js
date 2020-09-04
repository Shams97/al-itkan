import React, {useContext, useState, useEffect} from 'react'
import { Context } from "../store"

export default function Radio ({name, ops, mx}) {
  const [state,setState] = useContext(Context)
  const [val, setVal] = useState("");

  
  useEffect(() => {
      if(state['data'][name])
       setVal(state['data'][name])
  }, []);



  let handleChange = (e) => {
    state['data'][name] = e.target.value
    setVal(value);
    console.log(state)
    setState(state)
  }

  return (
    <div className={"flex flex-row jusitfy-between " + (mx ? "mx-auto" : "")}>
      {ops.map((op, index) => {
        let formated_op = op.toLowerCase()
        return (
        <div className="mx-auto" key={index}>
          <label className="text-gray-600 font-serif"> {op} </label>{" "}
          <input
            type="radio"
            className="checked:bg-gray-900 checked:border-transparent mx-4 mt-2 text-gray-300 font-serif"
            onChange = {handleChange}
            checked={val===formated_op}
            value={formated_op}
            name={name}
            />
        </div>
        )
      })
    }

    </div>
  )
}
