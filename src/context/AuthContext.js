// update state all at once, hence using createContext
// useReducer is used to keep all the login in one pace

import { createContext, useReducer } from "react";
import { useEffect } from "react"
import { dbAuth } from "../firebase/config";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };  
    case "LOGOUT":
      return{ ...state, user: null }
    default:
      return state;
  }
};

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady :false
  });

// will run only once... onAuthStateChanged will look with firebase whne there is a chage in auth status
useEffect(() => {
    const unsub =  dbAuth.onAuthStateChanged((user)=>{
        dispatch({type: "AUTH_IS_READY", payload: user})
        unsub()
  })

},[])


  console.log(state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
