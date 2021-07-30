function showUserDatas(){
    document.getElementById("name-person").innerHTML = localStorage.getItem("userName");
    document.getElementById("picture-user").src = localStorage.getItem("avatar")

    console.log(userName)
    console.log(avatar)
    console.log(id)
}

showUserDatas()