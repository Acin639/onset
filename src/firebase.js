// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyCKmHObS2NU9ejj6xV4A2hkqIO49_ORMRw",
  authDomain: "gabriel-dacf0.firebaseapp.com",
  projectId: "gabriel-dacf0",
  storageBucket: "gabriel-dacf0.firebasestorage.app",
  messagingSenderId: "357550088794",
  appId: "1:357550088794:web:6785812fbcaf71d8156e63",
  measurementId: "G-2HMV8DR9FW"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password,navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/home");
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = async () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
