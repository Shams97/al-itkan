import React, {useState } from 'react'

const initalState = {
  name: "hisName",
  email: "hisEmail",
  data: {},
  files: {}
}

export const Context = React.createContext()

const Store = ({children}) => {
  const [state, setState] = useState(initalState)

  return (
    <Context.Provider value={[state, setState]}>
      {children}
    </Context.Provider>
  );
};

export default Store;