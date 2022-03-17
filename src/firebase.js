
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAuuzft-CxN-wBTPvFGZbtEYCE9cr54WqI",
  authDomain: "fir-d24b6.firebaseapp.com",
  projectId: "fir-d24b6",
  storageBucket: "fir-d24b6.appspot.com",
  messagingSenderId: "831284327148",
  appId: "1:831284327148:web:bb471b37a4609662a8abc9",
  measurementId: "G-YP9R59YDLX"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };

