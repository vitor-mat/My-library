import { user } from "../script/auth.js"

const texto = document.getElementById("nome")

texto.addEventListener("click", () => {
    texto.innerHTML = user.name;
    console.log(user.avatar)
    console.log(user.id)

    document.getElementById("picture-user").src = user.avatar
})