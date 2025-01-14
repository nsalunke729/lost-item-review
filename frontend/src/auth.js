// src/auth.js
import { signInWithEmailAndPassword, signOut, sendEmailVerification } from 'firebase/auth';
import { auth } from './firebase';

// Function to sign in a user
export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user);
    return userCredential.user; // Return the signed-in user
  } catch (error) {
    console.error("Error signing in:", error.message);
    throw error;
  }
};

// Function to log out a user
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out:", error.message);
    throw error;
  }
};

// Function to send email verification
export const sendVerificationEmail = async () => {
  if (auth.currentUser) {
    try {
      await sendEmailVerification(auth.currentUser);
      console.log("Verification email sent.");
    } catch (error) {
      console.error("Error sending verification email:", error.message);
      throw error;
    }
  } else {
    console.error("No user is signed in to send a verification email.");
  }
};
