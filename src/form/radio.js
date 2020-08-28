import React, {useContext} from 'react'
import { Context } from "../store"

export default function Radio ({name, ops}) {
  const [state, setState] = useContext(Context)
  
  let handleChange = (e) => {
    console.log('\n', state['data'][name], '\n')
    let value = e.target.value
    state['data'][name] = value
    console.log(state)
    setState(state)
  }
  
  return (
    <div>
      {ops.map((op, index) => (
        <div className="flex flex-row jusitfy-between mx-auto">
          <label className="text-gray-600"> {op} </label>{" "}
          <input
            type="radio"
            className="checked:bg-gray-900 checked:border-transparent mx-4 mt-2 text-gray-300"
            checked = {state['data'][name] == op}
            onChange = {handleChange}
            value={op}
            name={op}
          />
      </div>
      ))}

    </div>
  )
}
