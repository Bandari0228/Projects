import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoVUb-28Rf-0JzOf-JR2Tw3fM2zoXL00w",
  authDomain: "atalproject.firebaseapp.com",
  databaseURL: "https://atalproject-default-rtdb.firebaseio.com",
  projectId: "atalproject",
  storageBucket: "atalproject.appspot.com",
  messagingSenderId: "934011491472",
  appId: "1:934011491472:web:3545bbd3a66565defa3415",
  measurementId: "G-5FQ328V42Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
