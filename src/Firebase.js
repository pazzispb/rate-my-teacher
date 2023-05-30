
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCQUcGUfDJiEtJqPFUgFFJV7ruRSiaCcI",
  authDomain: "rate-profesores.firebaseapp.com",
  projectId: "rate-profesores",
  storageBucket: "rate-profesores.appspot.com",
  messagingSenderId: "919208332903",
  appId: "1:919208332903:web:58a43b051483270c600ec2",
  measurementId: "G-ZFJVZBCL2K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
