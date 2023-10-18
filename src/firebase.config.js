// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ-Ho_hbtUKGLQgKrTBiCfgiXCq2u3WU0",
  authDomain: "mysoft-e3af6.firebaseapp.com",
  projectId: "mysoft-e3af6",
  storageBucket: "mysoft-e3af6.appspot.com",
  messagingSenderId: "607598229586",
  appId: "1:607598229586:web:bb250edf6bbf08769dc78b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
