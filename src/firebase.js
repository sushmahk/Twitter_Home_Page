import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyA5OPWq_OAGGi1yRA4Z-Y8TZGMNcqLp9co",
  authDomain: "twitter-app-82fd1.firebaseapp.com",
  databaseURL: "https://twitter-app-82fd1-default-rtdb.firebaseio.com",
  projectId: "twitter-app-82fd1",
  storageBucket: "twitter-app-82fd1.appspot.com",
  messagingSenderId: "880595622022",
  appId: "1:880595622022:web:103e52b6df57d2dc739907",
  measurementId: "G-FBKP8L1VK3"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  

  export default db;


