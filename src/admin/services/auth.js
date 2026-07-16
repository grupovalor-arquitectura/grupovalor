import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../../firebase/firebase";

// ========================================
// LOGIN
// ========================================

export async function login(email, password) {
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return credentials.user;
}

// ========================================
// LOGOUT
// ========================================

export async function logout() {
  await signOut(auth);
}

// ========================================
// OBSERVER
// ========================================

export function observeAuth(callback) {
  return onAuthStateChanged(auth, callback);
}