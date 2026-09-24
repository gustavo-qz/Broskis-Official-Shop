const service = require("./baseService");
const { validarFornecedor } = require("../validators");

module.exports = service("fornecedores", validarFornecedor, d => ({
  nome: String(d.nome).trim(),
  email: String(d.email).trim().toLowerCase(),
  telefone: String(d.telefone).trim(),
  cnpj: String(d.cnpj).trim()
}));
