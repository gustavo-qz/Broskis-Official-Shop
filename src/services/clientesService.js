const service = require("./baseService");
const { validarCliente } = require("../validators");

module.exports = service("clientes", validarCliente, d => ({
  nome: String(d.nome).trim(),
  email: String(d.email).trim().toLowerCase(),
  telefone: String(d.telefone).trim(),
  cpf: String(d.cpf).trim()
}));
