const { eNumero, existeNumero } = require("./numero");

test("verifica se 10 é número, deve retornar true", () => {
  expect(eNumero(10)).toBe(true);
});

test('verifica se "10" (string) é número, deve retornar false', () => {
  expect(eNumero("10")).toBe(false);
});

test("verifica se NaN é número, deve retornar false", () => {
  expect(eNumero(NaN)).toBe(false);
});

test("verifica se undefined não é número, deve retornar false", () => {
  expect(existeNumero(undefined)).toBe(false);
});
