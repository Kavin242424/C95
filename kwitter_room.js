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
function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name" 
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name -" +Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
