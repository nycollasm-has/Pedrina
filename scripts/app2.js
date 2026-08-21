var nasc = 1991;
let nome = "pedrina"
const viva = true;

function calcIdade(ano = 2026) {
    let idade = ano - nasc;
    alert(`Dentro de Função - Idade ${idade} `);
    return idade;

}
calcIdade();
/*

alert(`fora da fumção : Idade ${idade}`);
Erro pois é variavel let não existe fora do escopo dela
*/

alert(`fora da função : chamando calcIdade ${calcIdade(2027)}`);
