import api from "./api";

export default {
  listar() {
    return api.get("/motos");
  },

  buscarPorId(id) {
    return api.get(`/motos/${id}`);
  },

  criar(dados) {
    return api.post("/motos", dados);
  },

  atualizar(id, dados) {
    return api.put(`/motos/${id}`, dados);
  },

  deletar(id) {
    return api.delete(`/motos/${id}`);
  },
};
