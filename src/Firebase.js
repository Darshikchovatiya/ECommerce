import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDs9ZFnxKDSmjWIUoBZLnpKuDo7ry27qJM",
  authDomain: "shopping-app-6cc5f.firebaseapp.com",
  projectId: "shopping-app-6cc5f",
  storageBucket: "shopping-app-6cc5f.appspot.com",
  messagingSenderId: "502221388190",
  appId: "1:502221388190:web:473ec12f8910e922257e8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();