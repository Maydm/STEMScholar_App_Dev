// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8VNWx55zA6mJJISSSj9_PpsL5Zu31hVc",
  authDomain: "maydm-femmescholar.firebaseapp.com",
  projectId: "maydm-femmescholar",
  storageBucket: "gs://maydm-femmescholar.appspot.com",
  messagingSenderId: "750459819077",
  appId: "1:750459819077:web:de79c8f8094861e5367f2c",
  measurementId: "G-4BTDQ5S6EL"
};

 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

