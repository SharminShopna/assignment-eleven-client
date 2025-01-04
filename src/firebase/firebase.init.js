// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain, 
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firebase Authentication

const auth = getAuth(app)
export default auth;

// apiKey: "AIzaSyAtxsp8HotsRUxWzH-M5zb5KTcIop22HKA",
//   authDomain: "assignment-eleven-3bd98.firebaseapp.com",
//   projectId: "assignment-eleven-3bd98",
//   storageBucket: "assignment-eleven-3bd98.firebasestorage.app",
//   messagingSenderId: "670316316731",
//   appId: "1:670316316731:web:0154910ac82cb61c8a741e"