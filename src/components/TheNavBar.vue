<template>
  <nav class="navbar navbar-expand-sm navbar-dark footer">
    <div class="container-fluid">

      <!-- Logo à esquerda -->
      <a href="#">
        <img src="../assets/logo4.png" alt="Logo" class="logo rounded-pill">
      </a>

      <!-- Menu central -->
      <ul class="navbar-nav mx-auto ranchers-regular">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item mx-5">
          <router-link class="nav-link" to="/produtos">Cadastrar Moto</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/motos">Motos</router-link>

        </li>
      </ul>

      <!-- Espaço invisível igual ao tamanho da logo -->
      <div class="logo-space"></div>

    </div>
  </nav>
</template>


<style scoped>
.footer {
  background-color: #f30000;  
}
.footer.navbar {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.logo {
  height: 85px;
  width: auto;
  display: block;
  transition: transform 0.2s ease;
}

.logo:hover {
  transform: scale(1.1);
}

.navbar-nav {
  flex-direction: row;
  margin-left: 320px !important; 
}

.nav-link {
  color: #fff;
  transition: color 0.3s ease;
}
.nav-link:hover {
  color: #ffd1d1;
}

.logo-space {
  width: 90px;
  height: 85px;
}

@media (max-width: 500px) {
  .logo {
    height: 35px;
  }
  .logo-space {
    width: 35px;
  }
  .nav-link {
    font-size: 0.9rem;
  }
}

/* SUA FONTE AQUI */
.ranchers-regular {
  font-family: "Ranchers", sans-serif;
  font-weight: 650;
  font-style: normal;
}
</style>

