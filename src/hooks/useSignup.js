import { useState, useEffect } from "react";
import { dbAuth } from "../firebase/config"; //db = firebase.firestore() | dbAuth = firebase.auth();
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  //cleanup function --- wont throw error if the component unmounts
  const [isCancelled, setIsCancelled] = useState(false);

  const signup = async (email, password, username) => {
    setIsPending(true);
    setError(null);

    try {
      // signup the user logic
      const res = await dbAuth.createUserWithEmailAndPassword(email, password); //this returns a response hence we are storing
      //console.log(res.user);
      if (!res) {
        throw new Error("Signup-Failed!"); //incase of firebase side error
      }
      // adding the username
      await res.user.updateProfile({ displayName: username });

      //dispatch action
      dispatch({ type: "LOGIN", payload: res.user }); // this fires authReducer
      // useAuthContext -> AuthContext -> AuthContextProvider ->useReducer ->authReducer -> dispatch

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      console.log(err.message);
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  //cleanup function --- wont throw error if the component unmounts
  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { error, isPending, signup };
};
