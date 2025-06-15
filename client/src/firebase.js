import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA5Iy7Icemj7-0HS2uvS4QnDIwGuabQiCU",
  authDomain: "mern-estate-50001.firebaseapp.com",
  projectId: "mern-estate-50001",
  storageBucket: "mern-estate-50001.appspot.com",
  messagingSenderId: "904272878580",
  appId: "1:904272878580:web:21c8188682a065da6177a1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export { app };
