import {userSignIn,checkUser} from "./fb.js"
document.addEventListener("DOMContentLoaded", function() {
    let loginButton = document.querySelectorAll(".cta-button");
    loginButton.forEach((btn)=>{
        btn.addEventListener("click", userSignIn)
    })
    
})