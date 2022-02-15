import { useEffect, useState } from "react";
import { dbAuth } from "../firebase/config"; //db = firebase.firestore() | dbAuth = firebase.auth();
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  //cleanup function --- wont throw error if the component unmounts
  const [isCancelled, setIsCancelled] = useState(false);

  const logout = async () => {
    setIsPending(true);
    setError(null);

    try {
      // logout the user
      await dbAuth.signOut(); //we are wating fot the user to logout so we dont pass the dispatch before that

      //dispatch action
      dispatch({ type: "LOGOUT" }); // this fires authReducer
      // useAuthContext -> AuthContext -> AuthContextProvider ->useReducer ->authReducer -> dispatch

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);

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

  return { error, isPending, logout };
};
