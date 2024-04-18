/*DESVIO CONDICIONAL ENCADEADO*/

idade = prompt("Digite sua idade")

if (idade < 16) {
    alert("Não pode votar")
}
else if (idade < 18) {
    alert("voto opicional")
}
else {
    alert("voto obrigatorio")
}
