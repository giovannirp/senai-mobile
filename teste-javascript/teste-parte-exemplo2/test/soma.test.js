const { soma, mult, soma3 } = require("../soma");


test("Soma 1 + 2 o resultado tem que ser 3", function() {
  expect(soma(1,2)).toBe(3);
})

test("Soma 4 * 4  o resultado tem que ser 16", function() {
  expect(mult(4, 4)).toBe(16);
})

test("Soma 2 + 2 + 2 o resultado tem que ser 6", function() {
  expect(soma3(2,2,2)).toBe(6);
})