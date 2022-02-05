import React, { useContext, useState } from "react";

const AuthContext = React.createContext({
  token: "",
  setToken: () => {}
})

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(
    window ? window.localStorage.getItem('token') || "" : ""
  ); 

  return (
    <AuthContext.Provider value={{token, setToken}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const { token, setToken } = useContext(AuthContext)

  return {token, setToken}
}