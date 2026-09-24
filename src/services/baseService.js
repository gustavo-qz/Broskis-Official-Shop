const { db } = require("../config/firebase");

function service(collectionName, validate, normalize) {
  const ref = db.collection(collectionName);

  return {
    async criar(data) {
      validate(data);
      const payload = { ...normalize(data), criadoEm: new Date() };
      const doc = await ref.add(payload);
      return { id: doc.id, ...payload };
    },

    async listar() {
      const snap = await ref.get();
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    },

    async buscarPorId(id) {
      const snap = await ref.doc(id).get();
      if (!snap.exists) {
        const e = new Error("Registro não encontrado.");
        e.statusCode = 404;
        throw e;
      }
      return { id: snap.id, ...snap.data() };
    },

    async atualizar(id, data) {
      validate(data);
      const doc = ref.doc(id);
      const current = await doc.get();
      if (!current.exists) {
        const e = new Error("Registro não encontrado.");
        e.statusCode = 404;
        throw e;
      }
      const payload = normalize(data);
      await doc.update(payload);
      return { id, ...payload };
    },

    async excluir(id) {
      const doc = ref.doc(id);
      const current = await doc.get();
      if (!current.exists) {
        const e = new Error("Registro não encontrado.");
        e.statusCode = 404;
        throw e;
      }
      await doc.delete();
      return { mensagem: "Registro excluído com sucesso." };
    }
  };
}

module.exports = service;
