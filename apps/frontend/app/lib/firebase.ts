import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDhUKgcB6-6OJuoDylW8XqMbsrPgA2vvEA",
    authDomain: "gym-mate-frontend.firebaseapp.com",
    projectId: "gym-mate-frontend",
    storageBucket: "gym-mate-frontend.firebasestorage.app",
    messagingSenderId: "867477527865",
    appId: "1:867477527865:web:bc2609f3e22b184cd01ce8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);