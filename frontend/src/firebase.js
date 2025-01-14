import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth'; // Import necessary functions

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcIzMV-gWyh3yC1qA1vJ2Bsl8QrSuta4E",
  authDomain: "test-6a580.firebaseapp.com",
  projectId: "test-6a580",
  storageBucket: "test-6a580.firebasestorage.app",
  messagingSenderId: "617560921852",
  appId: "1:617560921852:web:38f43657de784c5eed6979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/*const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
};

const app = initializeApp(firebaseConfig);
*/
export const auth = getAuth(app);
//export const provider = new GoogleAuthProvider();

// Set the authentication persistence to local (session will persist across page reloads)
setPersistence(auth, browserSessionPersistence) // This ensures persistence
  .then(() => {
    // persistence is now set
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

/*export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error(error);
  }
};
*/