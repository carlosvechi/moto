<template>
  <footer class="footer mt-5">
    <div class="container">
      <div class="row align-items-center text-center text-md-start">

        <!-- Identidade -->
        <div class="col-md-4 mb-3 mb-md-0">
          <div class="fw-semibold">
            Sistema de Gestão de Serviços Técnicos
          </div>
          <div class="small opacity-75">
            Projeto acadêmico – UniSENAI
          </div>
        </div>

        <!-- Links -->
        <div class="col-md-4 mb-3 mb-md-0 text-center">
          <a href="#" class="footer-link">Início</a>
          <span class="mx-2">•</span>
          <a href="#" class="footer-link">Documentação</a>
          <span class="mx-2">•</span>
          <a href="#" class="footer-link">GitHub</a>
        </div>

        <!-- Direitos -->
        <div class="col-md-4 text-md-end">
          <span class="small opacity-75">
            © 2026 • Carlos Vechi
          </span>
        </div>

      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #b00000;
  color: #ffffff;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.footer-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: opacity 0.2s ease;
}

.footer-link:hover {
  opacity: 0.75;
}
</style>
