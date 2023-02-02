// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNL_a4c_MIhf0eytKvLk0LLAS1dyLRrKA",
  authDomain: "wilson-firebase.firebaseapp.com",
  projectId: "wilson-firebase",
  storageBucket: "wilson-firebase.appspot.com",
  messagingSenderId: "541022054981",
  appId: "1:541022054981:web:e3b9793794a008b04c912c",
  measurementId: "G-NVVFZV5BT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);