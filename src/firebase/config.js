import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA8mBUON21g4dxEt3AIECGCADPl53PuZdk",
  authDomain: "vue-chat-v2-12c4f.firebaseapp.com",
  projectId: "vue-chat-v2-12c4f",
  storageBucket: "vue-chat-v2-12c4f.appspot.com",
  messagingSenderId: "803372093759",
  appId: "1:803372093759:web:05ea4e2285dfc90ae7038a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectAuth = getAuth(app);

const projectFirestore = getFirestore(app);
const timestamp = Timestamp;

export { projectAuth, projectFirestore, timestamp };