import { user } from "../script/auth.js"

function showUserDatas(){
    document.getElementById("name-person").innerHTML = user.name;
    document.getElementById("picture-user").src = user.avatar

    console.log(user.name)
    console.log(user.avatar)
    console.log(user.id)
}

showUserDatas()