import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBDO4jU6r7KQ0PLqMrEHCJFWcBlHvhjnAs",
  authDomain: "whatsapp-clone-203fb.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-203fb.firebaseio.com",
  projectId: "whatsapp-clone-203fb",
  storageBucket: "whatsapp-clone-203fb.appspot.com",
  messagingSenderId: "756261091724",
  appId: "1:756261091724:web:c478fe02d6f06e5eee7ea9",
};

//Initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Accesing database
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
