// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyC2I7YAbTPcYcvQI3TWTK1_rmEHrdCt-BE",
      authDomain: "kwitter-d455d.firebaseapp.com",
      projectId: "kwitter-d455d",
      storageBucket: "kwitter-d455d.appspot.com",
      messagingSenderId: "269914396242",
      appId: "1:269914396242:web:07b92be57673ebc503718b"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
