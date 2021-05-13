function login(){
    var UserName=document.getElementById("Username").value;
    localStorage.setItem("Username", UserName);
    window.location="2.html";
}
function addUser() {
    var UN = document.getElementById("Username").value;
    firebase.database().ref("/").child(UN).update({
purpose:"Adding username"
    });
};