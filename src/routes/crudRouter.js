const express = require("express");

function crudRouter(service) {
  const router = express.Router();

  router.post("/", async (req, res, next) => {
    try { res.status(201).json(await service.criar(req.body)); } catch (e) { next(e); }
  });

  router.get("/", async (req, res, next) => {
    try { res.json(await service.listar()); } catch (e) { next(e); }
  });

  router.get("/:id", async (req, res, next) => {
    try { res.json(await service.buscarPorId(req.params.id)); } catch (e) { next(e); }
  });

  router.put("/:id", async (req, res, next) => {
    try { res.json(await service.atualizar(req.params.id, req.body)); } catch (e) { next(e); }
  });

  router.delete("/:id", async (req, res, next) => {
    try { res.json(await service.excluir(req.params.id)); } catch (e) { next(e); }
  });

  return router;
}

module.exports = crudRouter;
