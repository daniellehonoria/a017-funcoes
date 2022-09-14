// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. 
//     Invoque a função e imprima no console o resultado.

/*function somaNumeros(num1, num2){
    const soma = num1 + num2;
    console.log(soma)

}
somaNumeros(10,3)*/

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

/*function imprimeBoleano(n1, n2){
    const maiorOuIgual = n1 <= n2;
    console.log(maiorOuIgual)

}
imprimeBoleano(3, 3)

// c) Uma função que receba um número e imprima se ele é par ou não

function imprimePar (num){

    if (num % 2 === 0){
    console.log("Esse número é par")
    }else{
    console.log("Esse número é ímpar")
    }
}
imprimePar(8)*/


// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
//     juntamente com uma versão dela contendo apenas letras maiúsculas.

function recebeMensagem(msg){
    console.log(`Sua mensagem possui ${msg.length} caracteres`)
    console.log(msg.toLocalUpperCase())
}
recebeMensagem(prompt("Digite um texto"))