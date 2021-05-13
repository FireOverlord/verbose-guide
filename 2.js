var firebaseConfig = {
    apiKey: "AIzaSyBhQXzEujA1CuyAoFN7JFMpYLCw_KqzEl8",
    authDomain: "kwitter-14e30.firebaseapp.com",
    databaseURL: "https://kwitter-14e30-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-14e30",
    storageBucket: "kwitter-14e30.appspot.com",
    messagingSenderId: "369496955537",
    appId: "1:369496955537:web:756e2b2f590e3f2d6abd30",
    measurementId: "G-PE0S1EG9MX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
document.getElementById("UN").innerHTML=localStorage.getItem("Username")+"!"