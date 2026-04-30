import { useState } from "react"
import LoginContext from "./LoginContext"

const LoginContextProvider = ({children}) => {

  const [values, setValues] = useState([])

  console.log(values);

  return (
    <LoginContext.Provider value={{values, setValues}}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider