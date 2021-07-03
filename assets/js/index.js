
  var firebaseConfig = {
    apiKey: "AIzaSyCzBL8GXiDxPfWsr2YaCx8aRk0HeBebUUg",
    authDomain: "iotta-9bb21.firebaseapp.com",
    databaseURL: "https://iotta-9bb21-default-rtdb.firebaseio.com",
    projectId: "iotta-9bb21",
    storageBucket: "iotta-9bb21.appspot.com",
    messagingSenderId: "1033609355724",
    appId: "1:1033609355724:web:4cd7d1b9e6e88bb94bfd69",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth.Auth.Persistence.LOCAL;

  const Username = document.getElementById('Username');
  const Password = document.getElementById('Password');
  const submit = document.getElementById('submit');
  
  submit.addEventListener('click', e => {

  const Username = Username.value;
  const Password = Password.value;
  const auth = firebase.auth();

  auth.signInWithEmailAndPassword(Username, Password);
  promise.catch(e => console.log(e.message));

  });

$("#submit").click(function()
{
  var Username = $("#Username").val();
  var Password = $("#Password").val();

  if (Username != "" && Password != "") 
  {
    var result = firebase.auth().signInWithEmailAndPassword(Username, Password);

    result.catch(function(error)
    {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);

      window.alert("Message : " + errorMessage);
    });
    
  }
  else
  {
    window.alert("Form is incomplete. Please fill out all fields.");

  }
});
