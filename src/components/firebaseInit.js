// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC1GJE6xckCMcpwbdb1Re3FbXsz_QzGHI",
  authDomain: "drip-6412b.firebaseapp.com",
  databaseURL: "https://drip-6412b-default-rtdb.firebaseio.com",
  projectId: "drip-6412b",
  storageBucket: "drip-6412b.appspot.com",
  messagingSenderId: "460872297408",
  appId: "1:460872297408:web:d156a3068573fe33ad3625",
  measurementId: "G-7GCFKFQRER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
console.log(analytics);


export { db };