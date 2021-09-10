// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu4hGTfmmsCqRAOtqb0sA-pO0NDZN0SuI",
  authDomain: "get-on-board-cccb0.firebaseapp.com",
  projectId: "get-on-board-cccb0",
  storageBucket: "get-on-board-cccb0.appspot.com",
  messagingSenderId: "666211270216",
  appId: "1:666211270216:web:0990c64376b5ceafdde27d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getData = () => getFirestore(app);