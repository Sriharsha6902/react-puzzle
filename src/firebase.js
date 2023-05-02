// import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAbaX04EEXZ2mXpGJG0NkYqgktXLhQNvn8",
  authDomain: "puzzle-7d37e.firebaseapp.com",
  projectId: "puzzle-7d37e",
  storageBucket: "puzzle-7d37e.appspot.com",
  messagingSenderId: "249597482370",
  appId: "1:249597482370:web:6711648825395dffb52b9b",
  measurementId: "G-K939LX0071"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getDatabase(app)

export {auth,db}
