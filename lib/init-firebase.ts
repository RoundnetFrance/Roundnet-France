// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const clientCredentials = {
  apiKey: "AIzaSyDJQlgPIbTQR21TcbZ3QB6EyXVsXYi-E6g",
  authDomain: "roundnet-france-888b2.firebaseapp.com",
  projectId: "roundnet-france-888b2",
  storageBucket: "roundnet-france-888b2.appspot.com",
  messagingSenderId: "1017004278635",
  appId: "1:1017004278635:web:9e5c8c464db46e8d65c22e",
};

const firebase = initializeApp(clientCredentials);
const storage = getStorage(firebase);

export default storage;
