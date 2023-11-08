import { initializeApp } from "firebase/app";
import  { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAM1gVMXmCcA5lPTj7qoOHhUbUxyCKQVIM",
  authDomain: "loginpage-d727b.firebaseapp.com",
  projectId: "loginpage-d727b",
  storageBucket: "loginpage-d727b.appspot.com",
  messagingSenderId: "780319033065",
  appId: "1:780319033065:web:399578232e929b27209278",
  measurementId: "G-G18JP8BXK1"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app)