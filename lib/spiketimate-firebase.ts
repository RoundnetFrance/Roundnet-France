// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const clientCredentials = {
	apiKey: "AIzaSyD7o5GaJVKJx1HLE54MkfcnEOUMZQn6KPI",
	authDomain: "spiketimate.firebaseapp.com",
	databaseURL:
		"https://spiketimate-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "spiketimate",
	storageBucket: "spiketimate.appspot.com",
	messagingSenderId: "238584604470",
	appId: "1:238584604470:web:d9c8d82c48dabd0363b597",
	measurementId: "G-7BJ72KFYNB",
};

const spiketimateFirebase = initializeApp(clientCredentials, "spiketimate");
const db = getFirestore(spiketimateFirebase);

export default db;
