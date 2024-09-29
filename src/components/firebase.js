import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaETVrAKr6KeA516paX1O558vNKCjcNKw",
  authDomain: "login-page-10362.firebaseapp.com",
  projectId: "login-page-10362",
  storageBucket: "login-page-10362.appspot.com",
  messagingSenderId: "628323560423",
  appId: "1:628323560423:web:10af248ab081e1dadd2b42",
  databaseURL:"https://login-page-10362-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };
export default app;
