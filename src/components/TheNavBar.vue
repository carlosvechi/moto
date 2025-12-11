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
/*navbar style */

.footer {
  background-color: #f30000;
}

.footer.navbar {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

/* LOGO */
.logo {
  height: 85px;
  width: auto;
  display: block;
  transition: transform 0.2s ease;
}

.logo:hover {
  transform: scale(1.1);
}
.nav-link {
  position: relative;
  color: #ffffff !important;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  opacity: 1 !important;
  padding: 12px 18px !important;
  transition: all 0.25s ease-in-out;
  text-shadow: 0 0 3px rgba(0,0,0,0.35);
}

/* Efeito de hover */
.nav-link:hover {
  color: #ffffff !important;
  transform: translateY(-2px);
  text-shadow: 0 0 6px rgba(0,0,0,0.55);
}

/* Linha animada abaixo do texto */
.nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 6px;
  width: 0%;
  height: 2px;
  background-color: #ffffff;
  transition: all 0.3s ease;
  transform: translateX(-50%);
  border-radius: 4px;
}

.nav-link:hover::after {
  width: 60%;
}

/* Navbar centralizada no desktop */
.navbar-nav {
  flex-direction: row;
  margin-left: 0 !important;
}

@media (min-width: 501px) {
  .navbar-nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}

/*mobile */
@media (max-width: 500px) {
  .logo {
    height: 35px;
  }

  .logo-space {
    width: 35px;
  }

  .navbar-nav {
    justify-content: center;
    gap: 10px;
    width: 100%;
  }

  .nav-link {
    font-size: 0.9rem;
    padding: 8px 10px !important;
  }
}

/*fonte personalizada */
.ranchers-regular {
  font-family: "Ranchers", sans-serif;
  font-weight: 650;
}

  </style>
  

