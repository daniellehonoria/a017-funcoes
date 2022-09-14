// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o 
//valor uma das operações básicas (soma, subtração, multiplicação e divisão).



// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções 
//com esses valores inputados pelo usuário sendo o argumento. 
//     Por fim, imprima no console o resultado das operações

function somar(num1, num2){
    let soma = num1 + num2
    return soma
}

function subtrair(num1, num2){
    let subtracao = num1 - num2
    return subtracao
}

function multiplicar(num1, num2){
    let multiplicacao = num1 * num2
    return multiplicacao
}

function dividir(num1, num2){
    let divisao = num1 / num2
    return divisao
}

let num1 = +prompt("Digite um número")
let num2 = +prompt("Digite outro número")

console.log(`O valor da soma é ${somar(num1, num2)} \n O valor da subtração é ${subtrair(num1, num2)}\n
O valor da multiplicação é ${multiplicar(num1, num2)}\n O valor da divisão é ${dividir(num1, num2)}`)