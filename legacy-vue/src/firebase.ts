import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDajGG9AIgfEcHxrSHBvZ5nNf0ZJBATnYc",
  authDomain: "vortexadmin-6ccf7.firebaseapp.com",
  projectId: "vortexadmin-6ccf7",
  storageBucket: "vortexadmin-6ccf7.firebasestorage.app",
  messagingSenderId: "34840379984",
  appId: "1:34840379984:web:318294d12b194fdee7c755",
  measurementId: "G-LHLVJKGYHW",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
