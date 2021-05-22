
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCqDUHcZ3fkCl3FaPPinaL3rjL4dp4vGbk",
  authDomain: "chatapp-for-school.firebaseapp.com",
  databaseURL: "https://chatapp-for-school-default-rtdb.firebaseio.com",
  projectId: "chatapp-for-school",
  storageBucket: "chatapp-for-school.appspot.com",
  messagingSenderId: "673546131426",
  appId: "1:673546131426:web:b531a6b635d76a6c170bbb"
};
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
//Start 

 //End code
    });});}
    getData();
    function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
 }
var username=localStorage.getItem("username")
var roomname=localStorage.getItem("roomname")
function send() {
  var message=document.getElementById("inputbox").value;
  firebase.database().ref(roomname).push({
   name:username,
   message:message,
   like:0 
  });
}



  





