function required(data, field) {
  if (data[field] === undefined || data[field] === null || String(data[field]).trim() === "") {
    const e = new Error(`O campo "${field}" é obrigatório.`);
    e.statusCode = 400;
    throw e;
  }
}

function validarCliente(d) {
  ["nome", "email", "telefone", "cpf"].forEach(f => required(d, f));
}

function validarCategoria(d) {
  required(d, "nome");
}

function validarProduto(d) {
  required(d, "nome");
  required(d, "categoriaId");
  if (!Number.isFinite(Number(d.preco)) || Number(d.preco) < 0) throw new Error("Preço inválido.");
  if (!Number.isFinite(Number(d.estoque)) || Number(d.estoque) < 0) throw new Error("Estoque inválido.");
}

function validarFornecedor(d) {
  ["nome", "email", "telefone", "cnpj"].forEach(f => required(d, f));
}

function validarPedido(d) {
  ["clienteId", "produtoId", "status"].forEach(f => required(d, f));
  if (!Number.isFinite(Number(d.quantidade)) || Number(d.quantidade) <= 0) throw new Error("Quantidade inválida.");
  if (!Number.isFinite(Number(d.valorTotal)) || Number(d.valorTotal) < 0) throw new Error("Valor total inválido.");
}

module.exports = { validarCliente, validarCategoria, validarProduto, validarFornecedor, validarPedido };
