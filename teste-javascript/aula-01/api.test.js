// api.test.js
const { fetchData } = require('./api');

// Simula o objeto global "fetch"
global.fetch = jest.fn();

beforeEach(() => {
    fetch.mockClear(); // Limpa o mock antes de cada teste
});

test('fetchData retorna os dados corretamente', async () => {
    const mockData = { title: 'Test title' };

    // Configura o mock para retornar os dados simulados
    fetch.mockResolvedValueOnce({
        json: async () => mockData,
    });

    const data = await fetchData();
    expect(data).toEqual(mockData);
});