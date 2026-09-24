const service = require("./baseService");
const { validarPedido } = require("../validators");

module.exports = service("pedidos", validarPedido, d => ({
  clienteId: String(d.clienteId),
  produtoId: String(d.produtoId),
  quantidade: Number(d.quantidade),
  valorTotal: Number(d.valorTotal),
  status: String(d.status).trim()
}));
