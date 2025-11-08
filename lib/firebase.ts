// lib/firebase.ts
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBnBBMgQGN5NOelo-1VA45pCQMjwVu5gLE",
  authDomain: "gvsstc.firebaseapp.com",
  databaseURL: "https://gvsstc-default-rtdb.firebaseio.com",
  projectId: "gvsstc",
  storageBucket: "gvsstc.firebasestorage.app",
  messagingSenderId: "1029610207085",
  appId: "1:1029610207085:web:3413ab7ae0fa03a9958c64",
  measurementId: "G-G3R67QJ0DK"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
