// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider} from "firebase/auth";

import { useState } from 'react';
const firebaseConfig = {
  apiKey: "AIzaSyAWijgsDpkpUp4A1BOVXWqiev86BmlBQGA",
  authDomain: Enter domain,
  databaseURL: "https://zak2003base-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: Enter project id,
  storageBucket: "zak2003base.appspot.com",
  messagingSenderId: ,
  appId: "1:905786811031:web:49e7321600517afa72bfd2",
  measurementId: "G-DMCN6PQ0H8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();


