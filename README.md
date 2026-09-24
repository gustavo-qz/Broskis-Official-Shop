# Loja App — somente BACK-END

Este projeto contém somente a parte de backend.

## Tecnologias

- Node.js
- Express
- Firebase Admin SDK
- Cloud Firestore

## Collections

- clientes
- categorias
- produtos
- fornecedores
- pedidos

Cada Collection possui:

- POST — criar
- GET — listar
- GET /:id — buscar
- PUT /:id — editar
- DELETE /:id — excluir

## Instalação

```bash
npm install
```

Copie `.env.example` para `.env` e coloque as credenciais do Firebase Admin SDK.

Depois:

```bash
npm run dev
```

## Teste rápido

Abra:

```text
http://localhost:3000/health
```

Deve aparecer:

```json
{"status":"ok"}
```

## Endpoints

```text
/api/clientes
/api/categorias
/api/produtos
/api/fornecedores
/api/pedidos
```

## Arquitetura

React Native (front-end)
        ↓
API Express
        ↓
Services
        ↓
Firebase Admin
        ↓
Cloud Firestore
