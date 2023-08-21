/* DECLARANDO VARIAVEL EXISTEM 3 TIPOS: NUMBER, STRING, BOOLEAN*/
var numero = 10;
console.log(numero);
/* DECLARANDO ARRAY */
var array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array[2]);
/* outra forma de fazer array  */
var array2 = [10, 9, 8];
/* FUNÇÃO EM TYPESCRIPT */
function soma(a, b) {
    console.log(a, b);
}
soma(1, 2);
/* RETORNO DA FUNÇÃO */
function retornoSoma(c, d) {
    return c + d;
}
console.log("esse \u00E9 o retorno da soma ".concat(retornoSoma(1, 2)));
/* 35 - TIPOS DE OBJETO  */
function objetoTipo(coord) {
    console.log(coord.numero + '' + coord.nome);
}
var coord = { numero: 224, nome: 'jonathan' };
objetoTipo(coord);
