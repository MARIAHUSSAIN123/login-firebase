import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"; 
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAv5rfHu8KBIdIJmVilrDlGaFV19wtDW-U",
    authDomain: "sign-up-login-form-af629.firebaseapp.com",
    projectId: "sign-up-login-form-af629",
    storageBucket: "sign-up-login-form-af629.firebasestorage.app",
    messagingSenderId: "528307108252",
    appId: "1:528307108252:web:0af4453f8f936cf755b059",
    measurementId: "G-VLQCF74Y2Z"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
document.getElementById("signupBtn")?.addEventListener("click",()=>{
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

createUserWithEmailAndPassword(auth, email, password) 
.then(()=>{
    alert("signup-successfully");
    window.location.href="welcome.html";
})
.catch(error=>document.getElementById("message").innerText=error.message);
});
document.getElementById("loginBtn")?.addEventListener("click",()=>{
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password) 
.then(()=>{
    alert("signup-successfully");
    window.location.href="welcome.html";
})
.catch(error=>document.getElementById("message").innerText=error.message);
});
 export function logout() {    
     signOut(auth)      
        .then(() => {             
            alert("Logged out");    
                     window.location.href = "index.html";     
    })         .catch(error => console.error("Logout Error:", error)); } 
    document.getElementById("logoutBtn")?.addEventListener("click", logout); 