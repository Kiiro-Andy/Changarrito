// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAq9ds8daoIBFE436fNzgTR27Zop217qo",
  authDomain: "changarrito-2e9a4.firebaseapp.com",
  projectId: "changarrito-2e9a4",
  storageBucket: "changarrito-2e9a4.appspot.com",
  messagingSenderId: "70568916911",
  appId: "1:70568916911:web:f8d4a3eadd905c3434615a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;