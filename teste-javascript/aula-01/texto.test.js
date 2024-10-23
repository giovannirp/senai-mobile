// texto.test.js
const { contarPalavras } = require('./texto');

test('contar palavras em "Olá mundo" deve retornar 2', () => {
  expect(contarPalavras('Olá mundo')).toBe(2);
});

test('contar palavras em string vazia deve retornar 0', () => {
  expect(contarPalavras('')).toBe(0);
});

test('lançar erro se entrada não for uma string', () => {
  expect(() => contarPalavras(123)).toThrow('Entrada deve ser uma string');
});