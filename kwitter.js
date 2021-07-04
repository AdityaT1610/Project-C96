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

function addUser() {
  User_name = document.getElementById("User_name").value;
  localStorage.setItem("User_name",User_name);
  window.location="kwitter_room.html" ;
}