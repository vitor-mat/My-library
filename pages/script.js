import { nome } from "../script/auth.js"

const texto = document.getElementById("nome")

texto.addEventListener("click", () => {
    texto.innerHTML = nome;
})