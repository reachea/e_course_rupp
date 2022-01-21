import React, { useContext, useState } from "react";

const AuthContext = React.createContext({
  isLogged: false,
  setIsLogged: () => {}
})

export const AuthContextProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false); 

  return (
    <AuthContext.Provider value={{isLogged, setIsLogged}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const { isLogged, setIsLogged } = useContext(AuthContext)

  return {isLogged, setIsLogged}
}