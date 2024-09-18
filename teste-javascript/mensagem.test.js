const mensagem = require('./mensagem');

// Teste para verificar a mensagem com um nome específico
test('mensagem com nome Kettely', () => {
  expect(mensagem('Kettely')).toBe('Olá, Kettely! Bem-vindo(a) ao Jesdt.');
});