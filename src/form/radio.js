// import React, {useContext} from 'react'
// import { Context } from "../store"

// let ops_bool = []

// export default function Radio ({name, ops}) {
//   const [state, setState] = useContext(Context)
//   let something = false

//   let handleChange = (e) => {
//     // ops_bool.map(a => !!a && false)
//     let index = e.target.index
//     // e.checked = true

//     // let parent = e.target.parentNode.parentNode
    
//     // parent.children[1].checked = false
    
//     // console.log(parent.children[1].checked)

//     console.log(e.target)
//     let value = e.target.value
//     state['data'][name] = value
//     console.log(state)
//     setState(state)
//   }
  
//   return (
//     <form>
//       {/* {ops.map((op, index) => (
//         <div className="flex flex-row jusitfy-between mx-auto">
//           <label className="text-gray-600"> {op} </label>{" "}
//           <input
//             type="radio"
//             className="checked:bg-gray-900 checked:border-transparent mx-4 mt-2 text-gray-300"
//             onChange = {handleChange}
//             // checked={false}
//             index={index}
//             value={op}
//             name={op}
//             />
//         </div>
//         )
//       )}

//     </form>
//   )
// }

//  */}
import React, { Component } from 'react'
import {Context} from '../store'

export default class Radio extends Component {
  static contextType = Context

  state = {
    // field: '',
    mx: this.props.mx === undefined ? true : !!this.props.mx,
    key: this.props.name,
    con: this.context[0],
    setCon: this.context[1],
    value: ""
  }

  onChange = (e) => {
    // this line is required for the ui to change (for some reason !!)
    this.setState({value: e.target.value})


    let store = this.state.con
    store['data'][this.state.key] = e.target.value
    this.state.setCon(store)
    console.log(this.state.con)
  }

  render() {
    const {ops} = this.props
    const value = this.state.con['data'][this.state.key]
    // const {value} = this.state
    return (
      <div className={"flex flex-row jusitfy-between " + (this.state.mx ? "mx-auto" : "")}>
        {ops.map((op, index) => {
          let formated_op = op.toLowerCase().split(' ').join('_').split('/').join('and')
          return (
            <div>
              <label className="text-gray-600"> {op} </label>{" "}
              <input
                type="radio"
                className="checked:bg-gray-900 checked:border-transparent ml-1 mr-4 mt-2 text-gray-300"
                onChange = {this.onChange}
                checked={value === formated_op}
                // index={index}
                value={formated_op}
                name={formated_op}
                />
            </div>
            )
          }
        )}
      </div>
    )
  }
}
