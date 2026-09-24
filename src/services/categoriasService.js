const service = require("./baseService");
const { validarCategoria } = require("../validators");

module.exports = service("categorias", validarCategoria, d => ({
  nome: String(d.nome).trim(),
  descricao: String(d.descricao || "").trim()
}));
