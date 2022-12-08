import { initializeApp } from "firebase/app";
import { addDoc, setDoc, doc, getDocs, onSnapshot, deleteDoc ,getFirestore ,collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAlWxSY7Vsdi5jiEyWH2qUEzQj0i8QAkck",
  authDomain: "react-task-a2100.firebaseapp.com",
  projectId: "react-task-a2100",
  storageBucket: "react-task-a2100.appspot.com",
  messagingSenderId: "225715355376",
  appId: "1:225715355376:web:6f56f9419b1497d126cc35",
  measurementId: "G-YRWDGD4B9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{addDoc, setDoc, doc, getDocs, onSnapshot, deleteDoc,db,collection}


