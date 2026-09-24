require("dotenv").config();

const express = require("express");
const cors = require("cors");

const crudRouter = require("./routes/crudRouter");
const clientes = require("./services/clientesService");
const categorias = require("./services/categoriasService");
const produtos = require("./services/produtosService");
const fornecedores = require("./services/fornecedoresService");
const pedidos = require("./services/pedidosService");

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ sistema: "Loja App", status: "online" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/clientes", crudRouter(clientes));
app.use("/api/categorias", crudRouter(categorias));
app.use("/api/produtos", crudRouter(produtos));
app.use("/api/fornecedores", crudRouter(fornecedores));
app.use("/api/pedidos", crudRouter(pedidos));

app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada." });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({ erro: err.message || "Erro interno." });
});

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
