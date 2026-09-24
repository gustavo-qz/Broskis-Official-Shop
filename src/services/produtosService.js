const service = require("./baseService");
const { validarProduto } = require("../validators");

module.exports = service("produtos", validarProduto, d => ({
  nome: String(d.nome).trim(),
  descricao: String(d.descricao || "").trim(),
  preco: Number(d.preco),
  estoque: Number(d.estoque),
  categoriaId: String(d.categoriaId)
}));
