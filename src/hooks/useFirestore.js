import { useEffect, useState, useReducer } from "react";
import { db, timestamp } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return {
        document: null,
        isPending: true,
        error: null,
        success: null,
      };
    case "ERROR":
      return {
        document: null,
        isPending: false,
        error: action.payload,
        success: false,
      };
    case "ADDED_DOCUMENT":
      return {
        document: action.payload,
        isPending: false,
        error: null,
        success: true,
      };
    case "DELETED_DOCUMENT":
      return {
        document: null,
        isPending: false,
        error: null,
        success: true,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState); ///initialState = state //response we can rename to any like "state"
  const [isCancelled, setIsCancelled] = useState(false);

  //collection database referance
  const ref = db.collection(collection);

  //dispatch only if the is not Cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  //add documnet
  const addDocument = async (doc) => {
    dispatchIfNotCancelled({ type: "IS_PENDING" });
    try {
      const doccreatedAt = timestamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createdAt: doccreatedAt }); // doc includes name and amount from TransactionForm.js createdAt is a firebase propeties
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  //del documnet
  const delDocument = async (id) => {
    dispatchIfNotCancelled({ type: "IS_PENDING" });

    try {
      await ref.doc(id).delete();
      dispatchIfNotCancelled({ type: "DELETE_DOCUMENT" });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { addDocument, delDocument, response };
};
