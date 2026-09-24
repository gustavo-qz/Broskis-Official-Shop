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

const db = admin.firestore();

module.exports = { db };
