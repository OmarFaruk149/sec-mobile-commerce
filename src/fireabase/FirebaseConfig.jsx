import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBjGAwbonjw943oPMLlgw2v7hgWUym_9DM",
  authDomain: "sec-mobile-commerce-1.firebaseapp.com",
  databaseURL: "https://sec-mobile-commerce-1-default-rtdb.firebaseio.com",
  projectId: "sec-mobile-commerce-1",
  storageBucket: "sec-mobile-commerce-1.appspot.com",
  messagingSenderId: "268999632005",
  appId: "1:268999632005:web:a22f6016310898a63375ec"
};


const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}