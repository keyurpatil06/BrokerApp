import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_FIREBASE_KEY,
    authDomain: "peaceful-nation-286714.firebaseapp.com",
    projectId: "peaceful-nation-286714",
    storageBucket: "peaceful-nation-286714.appspot.com",
    messagingSenderId: "624146735154",
    appId: "1:624146735154:web:a5671b5a005293368f1c2b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
