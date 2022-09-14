//  a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
/*
function imprimeOla(){
    console.log(`Olá Dani`)
}
imprimeOla()
// b) Declare uma função que imprima a tabuada do 6. Chame esta função.
const num = 6

function imprimeTabuada(){
    for (let i = 1; i <= 10 ; i++){
        console.log(`${num} x ${i} = ${num*i}`)

    }
}
imprimeTabuada()*/
// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 


const imprimeTabuada = (num) =>{
    for (let i = 1; i <= 10 ; i++){
        const tabuada = num*i;
        console.log(tabuada)
    }
}

imprimeTabuada(6)


