
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "API KEY",
  authDomain: "primer-low-app.firebaseapp.com",
  projectId: "primer-low-app",
  storageBucket: "primer-low-app.appspot.com",
  messagingSenderId: "710236797723",
  appId: "1:710236797723:web:31c324dabfca8436c5f1be"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
