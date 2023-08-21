/* DECLARANDO VARIAVEL EXISTEM 3 TIPOS: NUMBER, STRING, BOOLEAN*/ 
let numero:number = 10;
console.log(numero)

/* DECLARANDO ARRAY */
let array: number[] = [1,2,3,4,5]

array.push(6)
console.log(array[2])
/* outra forma de fazer array  */
let array2: Array<number> = [10,9,8]




/* FUNÇÃO EM TYPESCRIPT */

function soma(a:number, b:number){
    console.log(a,b)
}


soma(1,2)

/* RETORNO DA FUNÇÃO */ 
function retornoSoma(c:number,d:number):number{
    return c + d
}

console.log(`esse é o retorno da soma ${retornoSoma(1,2)}`)

/* 35 - TIPOS DE OBJETO  */
function objetoTipo(coord: {numero:number, nome:string}){
    console.log(coord.numero + '' + coord.nome)
}

/* como declarar objeto */
const coord:{numero:number, nome:string} = {numero: 224, nome: 'jonathan'}
objetoTipo(coord)

// 36 - declarar objeto opcional COM SINAL ? 
const objeto:{nome:string, idade:number, sobrenome?:string} = {nome:'jonathan', idade:19}

function mostra(nome:string, sobrenome:string, idade?:number){
    console.log(nome)   
    console.log(sobrenome)   
    if(idade !== undefined){
        console.log(idade)   
    }
}

mostra('jonathan', 'nogueira')
mostra('jonathan', 'nogueira', 20)

// 38 - UNION TYPE - pode ser um ou outro

function unionType(salario: number | string){
    console.log(`seu salário é ${salario}`)
}
unionType(500)
unionType('500')


// 41 - USANDO INTERFACE PARA SIMPLIFICAR OBJETOS
interface Pessoa{
    nome:string,
    sobrenome:string
}

function pessoa(pessoa:Pessoa){
    console.log(`essa é a pessoa ${pessoa.nome} + ${pessoa.sobrenome}`)
}

const objetoPessoa:Pessoa = {nome:'jonathan', sobrenome:'nogueira'} 
pessoa(objetoPessoa)