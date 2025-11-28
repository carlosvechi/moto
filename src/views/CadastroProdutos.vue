<template>
    <div class="container my-5">
        <div class="row align-items-center">

            <!-- img -->
            <div class="col-md-6 text-start mb-4 mb-md-0">
                <h2 class="text-danger fw-bold mb-4">
                    Adicionar nova motocicleta
                </h2>

                <img src="../assets/motopreta.webp" class="img-fluid moto-img" alt="Moto">
            </div>

            <!-- form -->
            <div class="col-md-6">

                
                <h3 class="fw-bold mb-4">Dados da Motocicleta</h3>

                <form @submit.prevent="confirmSubmit">

                    <div class="mb-3">
                        <label class="form-label">Modelo</label>
                        <input v-model="form.modelo" type="text" class="form-control" required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Marca</label>
                        <input v-model="form.marca" type="text" class="form-control" required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Ano da moto</label>
                        <input v-model="form.ano" type="number" min="1980" max="2026" class="form-control" required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Cor</label>
                        <input v-model="form.cor" type="text" class="form-control" required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Placa</label>
                        <input v-model="form.placa" type="text" maxlength="7" class="form-control" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Kilometragem</label>
                        <input v-model="form.km" type="number" min="0" class="form-control" required />
                    </div>

                    <!-- botao -->
                    <button type="button" class="btn btn-danger w-100 p-2 fw-bold" @click="openModal">
                        Enviar
                    </button>
                </form>

                <!-- abremodal -->
                <div class="modal fade" id="confirmModal" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h5 class="modal-title fw-bold">Confirmar envio</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <div class="modal-body">
                                Tem certeza de que deseja enviar o formulário?
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancelar
                                </button>

                                <!-- botao confirma -->
                                <button type="button" class="btn btn-danger fw-bold" @click="submitForm"
                                    data-bs-dismiss="modal">
                                    Confirmar
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import { Modal } from "bootstrap";

export default {
    data() {
        return {
            form: {
                modelo: "",
                marca: "",
                ano: "",
                cor: "",
                placa: "",
                km: ""
            }
        };
    },

    methods: {
  openModal() {
    // pega o formulário
    const form = this.$el.querySelector("form");

    // valida usando a API nativa do HTML
    if (!form.checkValidity()) {
      form.reportValidity(); // mostra mensagens de erro do navegador
      return; // NÃO abre o modal
    }

    // abre o modal manualmente
    const modal = new Modal(document.getElementById('confirmModal'));

    modal.show();
  },

  submitForm() {
    console.log("FORMULÁRIO ENVIADO:");
    console.table(this.form);
  }
}

};
</script>


<style scoped>
.moto-img {
    width: 100%;
    max-width: 450px;
    /* aumenta o tamanho máximo */
}
</style>