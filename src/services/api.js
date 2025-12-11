import axios from "axios";

//Cria uma instância personalizada do Axios.
const api = axios.create({
  baseURL: "http://localhost:3000/api", //Isso define o começo de toda URL que vamos utilizar
});

export default api;
