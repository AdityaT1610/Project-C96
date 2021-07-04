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
    User_name = localStorage.getItem("User_name");
    room_name = localStorage.getItem("Room_name");
    function Send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:User_name,
                Message:msg,
                like:0
          });
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ 
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      { 
            childKey  = childSnapshot.key; 
            childData = childSnapshot.val(); 
            if(childKey != "purpose") 
            {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();

function Logout() {
      localStorage.removeItem("User_name");
      localStorage.removeItem("Room_name");
      window.location.replace("index.html");
}
