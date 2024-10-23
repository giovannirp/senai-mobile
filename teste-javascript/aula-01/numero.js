function eNumero(valor) {
  return typeof valor === "number" && !isNaN(valor);
}

function existeNumero(valor) {
    return valor !== undefined && valor !== null && typeof valor === 'number' && !isNaN(valor);
  }

module.exports = { eNumero, existeNumero };
