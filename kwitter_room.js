
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyB93a1i-EyzP7uLGIDDmnenTGYvjwxfrhQ",
      authDomain: "kwitter-a823e.firebaseapp.com",
      databaseURL: "https://kwitter-a823e-default-rtdb.firebaseio.com",
      projectId: "kwitter-a823e",
      storageBucket: "kwitter-a823e.appspot.com",
      messagingSenderId: "870597535784",
      appId: "1:870597535784:web:6034905989061daa71ad1d",
      measurementId: "G-WNR7KGVD6L"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
