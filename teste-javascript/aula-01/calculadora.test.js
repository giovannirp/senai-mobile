// calculadora.test.js
const { somar, subtrair, multiplicar, divisao } = require('./calculadora');

test('somar 2 + 3 deve retornar 5', () => {
  expect(somar(2, 3)).toBe(5);
});

test('subtrair 5 - 2 deve retornar 3', () => {
  expect(subtrair(5, 2)).toBe(3);
});

test('multiplicar 4 * 3 deve retornar 12', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('dividir 4 / 2 deve retornar 2', () => {
  expect(divisao(4, 2)).toBe(2);
});