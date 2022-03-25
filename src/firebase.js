import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB2zYNUyoj3krf90ttiFpNiuK1wqmI9dKk",
    authDomain: "react-linkedin-clone-8c42b.firebaseapp.com",
    projectId: "react-linkedin-clone-8c42b",
    storageBucket: "react-linkedin-clone-8c42b.appspot.com",
    messagingSenderId: "978069357352",
    appId: "1:978069357352:web:37f3766bded623eef0c61d"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const storage = getStorage(app);

  export {auth,provider,storage};
  export default db;