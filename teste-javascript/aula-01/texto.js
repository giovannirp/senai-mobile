// texto.js
function contarPalavras(frase) {
  if (typeof frase !== "string") {
    throw new Error("Entrada deve ser uma string");
  }
  return frase.split(" ").filter((palavra) => palavra !== "").length;
}

module.exports = { contarPalavras };
