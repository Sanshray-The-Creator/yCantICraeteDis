// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDdk3RxndsKnSAITfle8jsBwIU-23EDGEM",
  authDomain: "birdiepirateybirdie.firebaseapp.com",
  databaseURL: "https://birdiepirateybirdie-default-rtdb.firebaseio.com",
  projectId: "birdiepirateybirdie",
  storageBucket: "birdiepirateybirdie.appspot.com",
  messagingSenderId: "31654870625",
  appId: "1:31654870625:web:4e79a73ba4d569a1ed7420"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;

    });
  });
}
getData();