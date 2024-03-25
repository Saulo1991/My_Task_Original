const adicionarTarefa = () => {
    const input = document.getElementById("input").value

    const li = document.createElement("li")

    const ul = document.querySelector("ul")
    if (input) {
        ul.appendChild(li).innerHTML += input
    } else {
        alert("Erro")
    }
}

const botaoAdicionar = document.getElementById("botaoAdicionar")

botaoAdicionar.addEventListener("click", () => {
    adicionarTarefa()
})
