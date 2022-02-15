//firebase 8.5//

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_SiRmb60NmDWVcX15FyvzxuSi5pX4Fgw",
  authDomain: "mymoney1-554b9.firebaseapp.com",
  projectId: "mymoney1-554b9",
  storageBucket: "mymoney1-554b9.appspot.com",
  messagingSenderId: "674929409639",
  appId: "1:674929409639:web:3da666161d6953c0a8dec2",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const db = firebase.firestore();
const dbAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { db, dbAuth, timestamp };
