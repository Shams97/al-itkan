import React, {useContext, useEffect} from 'react'
import { Context } from "../store"

export default function Radio ({name, ops, classes, values}) {
  const [state,setState] = useContext(Context)
  let value = state.data[name]

  useEffect(() => {
    if (state['data'][name] === undefined){
      state['data'][name] = !!values ? values[0] : ops[0].toLowerCase()
      console.log(state)
      setState(state)    
    } else {      
      value = state.data[name]
    }
  }, [])

  let handleChange = (e) => {
    let value = !!values ? Number(e.target.value) : e.target.value
    state['data'][name] = value
    console.log(state)
    setState(state)
  }

  return (
    <select onChange={handleChange} value={value}
    className={"border-b-2 border-black-400 focus:border-blue-500 outline-none " + (!!classes ? classes: "")}>
      {ops.map((op, index) => {
        let formated_op = op.toLowerCase().split(' ').join('_')
        return (
          <option value={!!values ? values[index] : formated_op}
          className="text-gray-600" key={index}>
            {op}
          </option>
        )}
      )}

    </select>
  )
}

