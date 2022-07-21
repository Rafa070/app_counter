import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDYLsfGmoQ5Lr35YKQbakr8r374RME__ik",
    authDomain: "login-c8ecf.firebaseapp.com",
    projectId: "login-c8ecf",
    storageBucket: "login-c8ecf.appspot.com",
    messagingSenderId: "887356570545",
    appId: "1:887356570545:web:4eeebd43dee548b2a99b90"
  };
firebase.initializeApp(firebaseConfig);
export default firebase