import firebase from 'firebase'
// import { config } from 'vue/types/umd';
import firestore from 'firebase/firestore'  

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCrryJCQsCvqCmnpFkzH7OUrHmISsllKZA",
    authDomain: "vue-firebase-afecb.firebaseapp.com",
    projectId: "vue-firebase-afecb",
    storageBucket: "vue-firebase-afecb.appspot.com",
    messagingSenderId: "456760561051",
    appId: "1:456760561051:web:3232ab98fadac77497e53e",
    measurementId: "G-JBNXBHRVR4"
  };
  
//   const firebaseApp = firebase.initializeApp(config)
  // Initialize Firebase
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebaseApp.firestore().settings({timestampsInSnapshots: true })

  export default firebaseApp.firestore()