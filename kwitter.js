var firebaseConfig = {
    apiKey: "AIzaSyDaqJLSGAnxtwDhKskjeNze67QrwQ0b1B0",
    authDomain: "kwitter-ce1a2.firebaseapp.com",
    databaseURL: "https://kwitter-ce1a2-default-rtdb.firebaseio.com",
    projectId: "kwitter-ce1a2",
    storageBucket: "kwitter-ce1a2.appspot.com",
    messagingSenderId: "62828994520",
    appId: "1:62828994520:web:38b9acd8b911cc36955cad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function AddUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html"
}