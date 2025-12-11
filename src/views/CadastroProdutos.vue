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

                <!-- modal -->
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
                                <button type="button" class="btn btn-danger fw-bold"
                                    @click="submitForm" data-bs-dismiss="modal">
                                    Confirmar
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>

        <!-- TOAST SUCESSO -->
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="toastSuccess" class="toast align-items-center text-bg-success border-0" role="alert">
                <div class="d-flex">
                    <div class="toast-body fw-bold">
                        Moto cadastrada com sucesso!
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                </div>
            </div>
        </div>

        <!-- TOAST ERRO -->
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="toastError" class="toast align-items-center text-bg-danger border-0" role="alert">
                <div class="d-flex">
                    <div class="toast-body fw-bold">
                        Ocorreu um erro ao cadastrar a moto!
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { Modal, Toast } from "bootstrap";
import motosService from "@/services/motosService";

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
            const form = this.$el.querySelector("form");

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            const modal = new Modal(document.getElementById("confirmModal"));
            modal.show();
        },

        async submitForm() {
            try {
                const payload = {
                    modelo: this.form.modelo,
                    marca: this.form.marca,
                    ano: this.form.ano,
                    cor: this.form.cor,
                    placa: this.form.placa,
                    km_atual: this.form.km
                };

                await motosService.criar(payload);

                this.showToast("toastSuccess");

                this.form = {
                    modelo: "",
                    marca: "",
                    ano: "",
                    cor: "",
                    placa: "",
                    km: ""
                };

            } catch (erro) {
                console.error("Erro ao cadastrar moto:", erro);
                this.showToast("toastError");
            }
        },

        showToast(id) {
            const toastEl = document.getElementById(id);
            const toast = new Toast(toastEl);
            toast.show();
        }
    }
};
</script>

<style scoped>
.moto-img {
    width: 100%;
    max-width: 450px;
}
</style>
