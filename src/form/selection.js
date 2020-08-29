import React, {useContext, useEffect} from 'react'
import { Context } from "../store"

export default function Radio ({name, ops, classes}) {
  const [state,setState] = useContext(Context)

  useEffect(() => {
    state['data'][name] = ops[0]
    console.log(state)
    setState(state)    
  }, [])

  let handleChange = (e) => {
    state['data'][name] = e.target.value
    console.log(state)
    setState(state)
  }

  return (
    <select onChange={handleChange}
    className={"border-b-2 border-black-400 focus:border-blue-500 outline-none " + (!!classes ? classes: "")}>
      {ops.map((op, index) => {
        let formated_op = op.toLowerCase().split(' ').join('_')
        return (
          <option value={formated_op} className="text-gray-600">
            {op}
          </option>
        )}
      )}

    </select>
  )
}

