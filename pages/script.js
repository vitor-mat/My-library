import { signOutWithGoogle } from ";;/script/auth";

function showUserDatas(){
    document.getElementById("name-person").innerHTML = localStorage.getItem("userName");
    document.getElementById("picture-user").src = localStorage.getItem("avatar")
}

showUserDatas()

document.getElementById("").addEventListener("click", () => {

    localStorage.removeItem("userName");
    localStorage.removeItem("avatar")
    localStorage.removeItem("id")
    
    signOutWithGoogle()

})