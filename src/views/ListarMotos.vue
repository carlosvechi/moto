<template>
    <div class="container my-5 teste">
        <h2 class="fw-bold mb-4">Listagem de Motocicletas</h2>

        <!-- CAMPO DE BUSCA -->
        <input
            type="text"
            class="form-control mb-4"
            placeholder="Buscar por modelo ou placa..."
            v-model="filtro"
        />

        <div class="table-responsive-custom">
        <table class="table table-striped table-bordered">
            <thead class="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Ano</th>
                    <th>Cor</th>
                    <th>Placa</th>
                    <th>KM</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="moto in motosFiltradas" :key="moto.id">
                    <td class="text-center">{{ moto.id }}</td>
                    <td>{{ moto.modelo }}</td>
                    <td>{{ moto.marca }}</td>
                    <td>{{ moto.ano }}</td>
                    <td>{{ moto.cor }}</td>
                    <td>{{ moto.placa }}</td>
                    <td class="text-end">{{ moto.km_atual }}</td>

                    <td class="text-center">
                        <button
                            class="btn btn-warning btn-sm me-2"
                            @click="abrirModalEdicao(moto)"
                        >
                            Editar
                        </button>

                        <button
                            class="btn btn-danger btn-sm"
                            @click="abrirModalExclusao(moto)"
                        >
                            Excluir
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

        <!-- ============================
            MODAL DE EDIÇÃO
        ============================ -->
        <div class="modal fade" id="modalEditar" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title fw-bold">Editar Motocicleta</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Modelo</label>
                                <input v-model="form.modelo" type="text" class="form-control" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Marca</label>
                                <input v-model="form.marca" type="text" class="form-control" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Ano</label>
                                <input v-model="form.ano" type="number" class="form-control" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Cor</label>
                                <input v-model="form.cor" type="text" class="form-control" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Placa</label>
                                <input v-model="form.placa" type="text" maxlength="7" class="form-control" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label">KM</label>
                                <input v-model="form.km_atual" type="number" class="form-control" />
                            </div>

                        </form>
                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">
                            Cancelar
                        </button>
                        <button class="btn btn-primary" @click="salvarEdicao" data-bs-dismiss="modal">
                            Salvar Alterações
                        </button>
                    </div>

                </div>
            </div>
        </div>

        <!-- ============================
            MODAL DE CONFIRMAÇÃO DE EXCLUSÃO
        ============================ -->
        <div class="modal fade" id="modalExcluir" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title fw-bold">Confirmar Exclusão</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        Tem certeza que deseja excluir a moto:
                        <strong>{{ motoSelecionada?.modelo }}</strong> (Placa: {{ motoSelecionada?.placa }})?
                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button class="btn btn-danger" @click="confirmarRemocao">
                            Excluir
                        </button>
                    </div>

                </div>
            </div>
        </div>

        <!-- TOAST SUCESSO -->
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="toastSuccess" class="toast align-items-center text-bg-success border-0" role="alert">
                <div class="d-flex">
                    <div class="toast-body fw-bold">
                        Operação realizada com sucesso!
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
                        Ocorreu um erro ao executar a operação!
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    import motosService from "@/services/motosService";
    import { Modal, Toast } from "bootstrap";
    
    export default {
        data() {
            return {
                motos: [],
                filtro: "",
    
                form: {
                    id: null,
                    modelo: "",
                    marca: "",
                    ano: "",
                    cor: "",
                    placa: "",
                    km_atual: "",
                },
    
                motoSelecionada: null, // MOTO QUE SERÁ EXCLUÍDA
    
                modalEditar: null,
                modalExcluir: null,
            };
        },
    
        async created() {
            await this.buscarMotos();
        },
    
        computed: {
            motosFiltradas() {
                const texto = this.filtro.toLowerCase().trim();
    
                return this.motos.filter(moto => {
                    const modelo = (moto.modelo || "").toLowerCase();
                    const placa  = (moto.placa  || "").toLowerCase();
    
                    return modelo.includes(texto) || placa.includes(texto);
                });
            }
        },
    
        methods: {
            async buscarMotos() {
                try {
                    const resposta = await motosService.listar();
                    this.motos = resposta.data;
                } catch (e) {
                    console.error("Erro ao listar motos:", e);
                    this.showToast("toastError");
                }
            },
    
            abrirModalEdicao(moto) {
                this.form = { ...moto };
    
                if (!this.modalEditar) {
                    this.modalEditar = new Modal(document.getElementById("modalEditar"));
                }
    
                this.modalEditar.show();
            },
    
            async salvarEdicao() {
                try {
                    await motosService.atualizar(this.form.id, this.form);
    
                    this.showToast("toastSuccess");
                    this.buscarMotos();
    
                } catch (e) {
                    console.error("Erro ao atualizar:", e);
                    this.showToast("toastError");
                }
            },
    
            abrirModalExclusao(moto) {
                this.motoSelecionada = moto;
    
                if (!this.modalExcluir) {
                    this.modalExcluir = new Modal(document.getElementById("modalExcluir"));
                }
    
                this.modalExcluir.show();
            },
    
            async confirmarRemocao() {
                try {
                    await motosService.deletar(this.motoSelecionada.id);
    
                    this.showToast("toastSuccess");
                    this.buscarMotos();
    
                } catch (e) {
                    console.error("Erro ao excluir:", e);
                    this.showToast("toastError");
                }
    
                this.modalExcluir.hide();
            },
    
            showToast(id) {
                const el = document.getElementById(id);
                const toast = new Toast(el);
                toast.show();
            }
        },
    };
    </script>
    
    <style scoped>
        /* .teste{
            min-height: 100%;
        } */

        table th,
        table td {
            vertical-align: middle;
        }
        
        .table-responsive-custom {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
        }
        
        .table-responsive-custom table {
            min-width: 800px;
        }
        </style>
        