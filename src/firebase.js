import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCtLas_d0RT1bmRMsvizY_Ou82mzg6PAX0",
    authDomain: "linkedin-clone-c362c.firebaseapp.com",
    projectId: "linkedin-clone-c362c",
    storageBucket: "linkedin-clone-c362c.appspot.com",
    messagingSenderId: "287890561456",
    appId: "1:287890561456:web:3abf0d83df783cf37d9e75"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth(); 

  export { db , auth };