import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import settings from "./settings";

export const firebaseApp = initializeApp(settings);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);