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

const coord = {numero: 224, nome: 'jonathan'}
objetoTipo(coord)