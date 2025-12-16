# 🖥️ Frontend – Sistema de Gestão de Motos (Emerson Cilindros)

## 📌 Sobre o Frontend

Este módulo corresponde ao **frontend** do sistema de gestão de motos da concessionária fictícia **Emerson Cilindros**. A aplicação é responsável pela interface com o usuário administrador, permitindo o gerenciamento completo das motos cadastradas.

O frontend consome uma **API REST** desenvolvida em Node.js, realizando a comunicação por meio do **Axios**.

---

## 🎯 Funcionalidades

* Cadastro de motos
* Edição de motos
* Exclusão de motos
* Listagem de motos
* Pesquisa de motos
* Consumo da API REST via Axios

---

## 🛠️ Tecnologias utilizadas

* Vue.js
* Axios
* Bootstrap
* JavaScript
* HTML5
* CSS3

---

## 📂 Estrutura do projeto

```
frontend/
 └── src/
     ├── assets/
     ├── components/
     │   ├── TheNavBar.vue
     │   ├── TheFooter.vue
     │   └── TheCarrossel.vue
     ├── router/
     │   └── index.js
     ├── services/
     │   ├── api.js
     │   └── motosService.js
     ├── views/
     │   ├── CadastroProdutos.vue
     │   ├── ListarMotos.vue
     │   └── TheHome.vue
     ├── App.vue
     └── main.js
```

---

## ▶️ Como executar o frontend

### Pré-requisitos

* Node.js **v24.12.0** ou superior

### Instalação e execução

```bash
npm install
npm run serve
```

A aplicação estará disponível em:

```
http://localhost:8080
```

---

## 🔗 Integração com o Backend

O frontend consome a API REST disponibilizada pelo backend, utilizando endpoints relacionados ao gerenciamento de motos.

Certifique-se de que o backend esteja em execução antes de utilizar o sistema.

---

## 📌 Status do módulo

✅ Finalizado (Projeto acadêmico)

---

## 👤 Autor

**Carlos**
Projeto acadêmico individual – UniSENAI
