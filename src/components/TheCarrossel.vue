<template>

  <div class="container mt-5">
    <div class="p-4 border-start border-4 border-danger">
      <h1 class="lora fw-bold text-start m-0">
        As melhores oportunidades em motos novas e seminovas,<br>
        <span class="text-danger">com condições exclusivas.</span>
      </h1>
    </div>
  </div>
  
  
  <!-- Carousel -->
  <div id="demo" class="carousel slide mt-5" data-bs-ride="carousel">
  
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active sb"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1" class="sb"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2" class="sb"></button>
    </div>
  
    <!-- Slides -->
    <div class="carousel-inner">

      <div class="carousel-item active slide-relative">
        <img src="" class="d-block w-100">

        <div class="carousel-caption caption-bg">
          Honda CG 160 Titan
        </div>
      </div>

      <div class="carousel-item slide-relative">
        <img src="" class="d-block w-100">

        <div class="carousel-caption caption-bg">
          Honda XRE 300
        </div>
      </div>

      <div class="carousel-item slide-relative">
        <img src="" class="d-block w-100">

        <div class="carousel-caption caption-bg">
          Honda CB 500F
        </div>
      </div>

    </div>
  
    <!-- Controls -->
    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
  
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  
  </div>
  
  
  <!-- Cards -->
  <div class="container mt-5">
    <h2 class="text-start lora mb-4">Descubra Mais</h2>

    <div class="row row-cols-1 row-cols-md-3 g-4">

      <div class="col">
        <div class="card h-100 shadow-sm">
          <img src="../assets/racing.webp" class="card-img-top" alt="Moto 1">
          <div class="card-body">
            <h5 class="card-title">Honda Racing</h5>
            <p class="card-text">São mais de 40 anos de história...</p>
            <a href="#" class="btn btn-dark w-100">Ver detalhes</a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm">
          <img src="../assets/harmon.webp" class="card-img-top" alt="Moto 2">
          <div class="card-body">
            <h5 class="card-title">Harmonia no Trânsito</h5>
            <p class="card-text">Mais segurança e responsabilidade...</p>
            <a href="#" class="btn btn-dark w-100">Ver detalhes</a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm">
          <img src="../assets/lib.jpg" class="card-img-top" alt="Moto 3">
          <div class="card-body">
            <h5 class="card-title">Blog Asas da Liberdade</h5>
            <p class="card-text">Muito conteúdo sobre a Honda Motos...</p>
            <a href="#" class="btn btn-dark w-100">Ver detalhes</a>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
</script>

<style>

#demo {
  max-width: 800px;
  max-height: 600px;
  margin: 0 auto;
  overflow: hidden;
}

#demo .carousel-inner img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(100%);
}

.lora {
  font-family: "Lora", serif;
}

/* Faz a legenda aparecer */
.slide-relative {
  position: relative !important;
}

/* Legenda estilizada */
.caption-bg {
  background: rgba(0, 0, 0, 0.55);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
}

.card-img-top {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}

.card-body {
  display: flex;
  flex-direction: column;
  height: 260px;
}

.card-text {
  flex: 1;
  overflow: hidden;
}

.card-body .btn {
  margin-top: auto;
}

</style>
