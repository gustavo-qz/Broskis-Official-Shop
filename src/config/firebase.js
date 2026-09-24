const admin = require("firebase-admin");

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

if (!projectId || !clientEmail || !privateKey) {
  throw new Error("Configure as variáveis do Firebase no arquivo .env.");
}

admin.initializeApp({
  credential: admin.credential.cert({ projectId, clientEmail, privateKey })
});

console.log("✅ Firebase Admin inicializado (credenciais aceitas)");

const db = admin.firestore();

// Teste real de conexão com o Firestore
async function testarConexao() {
  try {
    await db.collection("_health_check").limit(1).get();
    console.log("✅ Firestore respondendo normalmente — conexão confirmada");
  } catch (err) {
    console.error("❌ Erro ao conectar no Firestore:", err.message);
  }
}

testarConexao();

module.exports = { db };