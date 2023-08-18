// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider} from "firebase/auth";

import { useState } from 'react';
const firebaseConfig = {
  apiKey: "AIzaSyAWijgsDpkpUp4A1BOVXWqiev86BmlBQGA",
  authDomain: "zak2003base.firebaseapp.com",
  databaseURL: "https://zak2003base-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zak2003base",
  storageBucket: "zak2003base.appspot.com",
  messagingSenderId: "905786811031",
  appId: "1:905786811031:web:49e7321600517afa72bfd2",
  measurementId: "G-DMCN6PQ0H8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();


