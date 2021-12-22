
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArPT-9OlPGeiAQ-p15yYmX5l9kMiwHwf8",
  authDomain: "ecommercedb-db34a.firebaseapp.com",
  projectId: "ecommercedb-db34a",
  storageBucket: "ecommercedb-db34a.appspot.com",
  messagingSenderId: "473654570273",
  appId: "1:473654570273:web:5dcb55bfb97b64d345a260",
  measurementId: "G-2WBRYCQSBS"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);
