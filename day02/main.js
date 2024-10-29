// CONDICIONAIS && E ||
let idade = 31;

if (idade >= 18 && idade < 60) {
    console.log('Voce é um adulto!')
}
if (idade < 17 || idade > 60) {
    console.log('Voce não é um adulto!')
}

// CONDICIONAL DUPLA
if (idade < 18) {
    console.log('Felipe é uma criança!')
} else if (idade >= 18 && idade < 60) {
    console.log('Felipe é um adulto!')
} else if (idade >= 60) {
    console.log('Felipe é um idoso!')
}

// EXERCÍCIOS 
// Substitua o @ pela condicional correta para que o resultado seja TRUE
// console.log(x @ y);
let x = 10;
let y = 5;
console.log(x > y);

// Substitua o @ pela condicional correta para que o resultado seja FALSE
// console.log(w @ z);
let w = "10"
let z = 10;
console.log(w === z);

// Substitua o @ pela condicional correta para que o resultado seja TRUE
// console.log(a @ b);
let a = 10;
let b = 5;
console.log(a > b);

// Crie uma condicional para verificar se o preço da carne está barato ou caro. 
// PS: Até 45 está barato.
let preco = 45.3;

if (preco <= 45) {
    console.log('O preço da carne está barato!');
} else {
    console.log('o preço da carne está caro.');
}

// CONDICIONAIS TERNÁRIOS
let isMember = false;
let shipping = isMember ? 5 : 15;

let age = 18;
let isAdult = ((age >= 18) ? 'Sim' : 'Não');

console.log(isMember ? 'Voce é membro!' : 'Voce não é membro!');
console.log('Frete: '+shipping);
console.log(isAdult);

//SWITCH
let profession = "policial";

console.log('Profissão: ' + profession);

switch(profession) {
    case 'fiscal' :
        console.log('Sua camisa será AZUL');
        break;
    case 'bombeiro' :
        console.log('Sua camisa será VERMELHA')   ;
        break;
    case 'policial' :
        console.log('Sua camisa será PRETA');
        break;
    default:
        console.log('Sua camisa será BRANCA');
        break;
}