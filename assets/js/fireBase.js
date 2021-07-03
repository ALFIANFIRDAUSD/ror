var app_fireBase = {};
(function(){

  var config = {
     apiKey: "AIzaSyCzBL8GXiDxPfWsr2YaCx8aRk0HeBebUUg",
      authDomain: "iotta-9bb21.firebaseapp.com",
      databaseURL: "https://iotta-9bb21-default-rtdb.firebaseio.com",
      projectId: "iotta-9bb21",
      storageBucket: "iotta-9bb21.appspot.com",
      messagingSenderId: "1033609355724",
      appId: "1:1033609355724:web:4cd7d1b9e6e88bb94bfd69",
    
    };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

  app_fireBase = firebase;
})()