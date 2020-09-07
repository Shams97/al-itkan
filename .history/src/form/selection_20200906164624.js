import React, {useContext, useEffect, useState} from 'react'
import { Context } from "../store"

export default function Radio ({name, ops, classes, values, label}) {
  const [state,setState] = useContext(Context)
  const [val, setVal] = useState("");

  // let value = state.data[name]

  useEffect(() => {
    if (state['data'][name] === undefined){
      state['data'][name] = !!values ? values[0] : ops[0].toLowerCase()
      
      console.log(state)
      setState(state)    
    } 
      // if(state['data'][name])
      setVal(state['data'][name])
      // value = state.data[name]
    
  }, [])

  let handleChange = (e) => {
    let value = !!values ? Number(e.target.value) : e.target.value
    state['data'][name] = value
    setVal(value);
   
    console.log(state)
    setState(state)
  }

  return (
    <select onChange={handleChange} value={val}
    className={"border-b-2 border-black-400 focus:border-blue-500 outline-none font-serif bg-none " + (!!classes ? classes: "")} placeholder="from">
      {ops.map((op, index) => {
        let formated_op = op.toLowerCase().split(' ').join('_')
        return (
          <option value={!!values ? values[index] : formated_op}
          className="text-gray-600 font-serif" key={index}>
            {op}
          </option>
        )}
      )}

    </select>
  )
}

