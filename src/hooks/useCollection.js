import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";

export const useCollection = (collection, _query) => {
  const [documents, setDocuments] = useState(null);
  const [error, serError] = useState(null);

  const query = useRef(_query).current;

  useEffect(() => {
    let ref = db.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }

    const unsub = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        //upddate state
        setDocuments(results);
        serError(null);
      },
      (error) => {
        console.log(error);
        serError("Data Fetch Failed");
      }
    );
    // unsubscribe on unmount
    return () => unsub();
  }, [collection, query]);

  return { documents, error };
};
