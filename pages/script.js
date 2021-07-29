import { userMame, avatar, id } from "../script/auth.js"

function showUserDatas(){
    document.getElementById("name-person").innerHTML = userName;
    document.getElementById("picture-user").src = avatar

    console.log(userName)
    console.log(avatar)
    console.log(id)
}

showUserDatas()