

# 🏍️ Emerson Cilindros – Sistema de Gestão de Motos

## 📌 Sobre o projeto

Sistema web desenvolvido para uma concessionária fictícia chamada **Emerson Cilindros**, com foco no **cadastro, gerenciamento e listagem de motos**. O sistema permite que um usuário administrador realize operações completas de CRUD (Create, Read, Update, Delete), além de pesquisa de registros.

Este projeto foi desenvolvido como **projeto acadêmico individual** na **UniSENAI**, com o objetivo de aplicar conceitos práticos de desenvolvimento frontend e backend, integração via API REST e persistência de dados em banco relacional.

---

## 🎯 Funcionalidades

* Cadastro de motos
* Edição de motos
* Exclusão de motos
* Listagem de motos
* Pesquisa de motos
* Integração entre frontend e backend via API REST

---

## 🛠️ Tecnologias utilizadas

### Backend

* Node.js
* Express
* MySQL

### Frontend

* Vue.js
* Axios
* Bootstrap

---

## 📂 Estrutura do projeto

### Backend

```
backend/
 └── src/
     ├── config/
     │   └── database.js
     ├── motos/
     │   ├── controller.js
     │   ├── repository.js
     │   └── router.js
     ├── app.js
     └── server.js
```

### Frontend

```
frontend/
 └── src/
     ├── assets/
     ├── components/
     ├── router/
     ├── services/
     ├── views/
     ├── App.vue
     └── main.js
```

---

## 🔌 Rotas da API

```http
GET    /motos        → Listar todas as motos
POST   /motos        → Cadastrar nova moto
PUT    /motos/:id    → Atualizar moto existente
DELETE /motos/:id    → Deletar moto
```

---

## ▶️ Como executar o projeto

### Pré-requisitos

* Node.js **v24.12.0** ou superior
* MySQL instalado e configurado

---

### Backend

```bash
npm install
node src/server.js
```

O backend será iniciado e ficará responsável pela API REST.

---

### Frontend

```bash
npm install
npm run serve
```

O frontend ficará disponível em:

```
http://localhost:8080
```

---

## 📌 Status do projeto

✅ **Finalizado** (Projeto acadêmico)

---

## 👤 Autor

**Carlos**
Projeto acadêmico individual – UniSENAI

---

> ⚠️ **Observação:** Este sistema foi desenvolvido exclusivamente para fins educacionais.


