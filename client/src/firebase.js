import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-50001.firebaseapp.com",
  projectId: "mern-estate-50001",
  storageBucket: "mern-estate-50001.appspot.com",
  messagingSenderId: "904272878580",
  appId: "1:904272878580:web:21c8188682a065da6177a1"
};

export const app = initializeApp(firebaseConfig);
