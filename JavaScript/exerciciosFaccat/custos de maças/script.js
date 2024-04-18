/*16) As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem 
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e 
escreva o custo total da compra.*/

var maças, quantidadedemaças

alert("Valor da quantidade de maças");
quantidadedemaças = parseInt(prompt("Digite a quantidade de maças"));
maças = (1.30 * quantidadedemaças);
duzias = (1 * quantidadedemaças)
if (quantidadedemaças >= 12) {
    alert("O custo foi de:R$" + duzias);
}
else {
    alert("O custo foi de:R$" + maças);
}