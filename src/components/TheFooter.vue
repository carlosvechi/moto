<template>
  <div id="app">
   

    <footer class="footer mt-5">
      <div class="footer-content">
        © 2026 UniSenai Copyright:
        <a href="https://mdbootstrap.com/"></a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Contêiner principal */
#app {
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
}

.content {
  flex: 1;
  padding: 1rem;
}

/* Footer estilizado */
.footer {
  background-color: #f30000;      
  color: #fff;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 -4px 6px rgba(0,0,0,0.2); /* Sombra leve no topo */
  transition: background-color 0.3s ease;
}

.footer:hover {
  background-color: #cc0000;      /* Escurece no hover */
}
.footer-content {
  font-size: 1rem;
  padding: 1rem;
  transition: transform 0.2s ease;
}

.footer-content a {
  color: #fff;
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.2s ease;
}

.footer-content a:hover {
  color: #ffd1d1;        
  transform: scale(1.05); /* Leve aumento */
}

/* Responsivo */
@media (max-width: 768px) {
  .footer-content {
    font-size: 0.9rem;
    padding: 0.8rem;
  }
}

@media (max-width: 480px) {
  .footer-content {
    font-size: 0.8rem;
    padding: 0.6rem;
  }
}
</style>
