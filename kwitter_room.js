var firebaseConfig = {
      apiKey: "AIzaSyBoqQRlzU4ejYOjMLxWLGuVuorGp7QxXvc",
      authDomain: "kwitter-eb1e9.firebaseapp.com",
      databaseURL: "https://kwitter-eb1e9-default-rtdb.firebaseio.com",
      projectId: "kwitter-eb1e9",
      storageBucket: "kwitter-eb1e9.appspot.com",
      messagingSenderId: "380417809781",
      appId: "1:380417809781:web:4340297151400ab872c73c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function AddRoom()
{ room_name = document.getElementById("Room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("Room_name", room_name);
window.location = "kwitter_page.html"; }
function getData() 
{
firebase.database().ref("/").on('value', function(snapshot) 
{
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {
            childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room name-" + Room_names);
     row = "<div class='Room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div>"
     document.getElementById("output").innerHTML += row;
      //End code
      }
      );
}
);
}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Room_name",name);
      window.location = "kwitter_page.html"
}

function Logout() {
      localStorage.removeItem("User_name");
      localStorage.removeItem("Room_name");
      window.location.replace("index.html");
}