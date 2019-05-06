import Firebase from 'firebase';

 let config = {
    apiKey: "AIzaSyB1IWFOUSa1HQzKxTDsHo4QwwqpJlRQeFg",
    authDomain: "reactnativefirebase-dc58a.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-dc58a.firebaseio.com",
    projectId: "reactnativefirebase-dc58a",
    storageBucket: "reactnativefirebase-dc58a.appspot.com",
    messagingSenderId: "998008189982",
    appId: "1:998008189982:web:b2a72b93aeaabcbd"
  };
let app = Firebase.initializeApp(config);

export const firebaseConfig = app.database();