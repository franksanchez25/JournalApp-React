import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD2yLp407VXm7Llt4wqWOQYXJyc2__Be1c",
  authDomain: "journal-app-a21d2.firebaseapp.com",
  projectId: "journal-app-a21d2",
  storageBucket: "journal-app-a21d2.appspot.com",
  messagingSenderId: "352784727153",
  appId: "1:352784727153:web:7796e7310447a8ff19efd0"
};

initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export{
    db,
    googleAuthProvider
}