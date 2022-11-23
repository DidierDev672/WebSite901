import { initializeApp } from "firebase/app";
import {  getAuth, GoogleAuthProvider } from "firebase/auth";
import {  getFirestore } from "firebase/firestore";
import settings from "./settings";

export const firebaseApp = initializeApp(settings);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();

export default firebaseApp;