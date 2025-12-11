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

      <div class="carousel-item active">
        <img src="../assets/moto04.webp" alt="Moto 1" class="d-block w-100">

        <div class="carousel-caption caption-bg">
          Honda Hornet 500
        </div>
      </div>

      <div class="carousel-item">
        <img src="../assets/moto05.webp" alt="Moto 2" class="d-block w-100">

        <div class="carousel-caption caption-bg">
          Honda CB500 F
        </div>
      </div>

      <div class="carousel-item">
        <img src="../assets/moto06.webp" alt="Moto 3" class="d-block w-100">

        <div class="carousel-caption caption-bg">
          Honda Pop 100i
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

  <!-- cards de destaque -->
  <div class="container mt-5">
    <h2 class="text-start lora mb-4">Descubra Mais</h2>

    <div class="row row-cols-1 row-cols-md-3 g-4">

      <div class="col">
        <div class="card h-100 shadow-sm card-zoom">
          <img src="../assets/racing.webp" class="card-img-top" alt="Moto 1">
          <div class="card-body">
            <h5 class="card-title">Honda Racing</h5>
            <p class="card-text">São mais de 40 anos de história e muitos títulos em centenas de competições! Conheça a nossa equipe e fique por dentro de todos os desafios do #RacingSpirit em 2025</p>
            <a href="#" class="btn btn-dark w-100">Ver detalhes</a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm card-zoom">
          <img src="../assets/harmon.webp" class="card-img-top" alt="Moto 2">
          <div class="card-body">
            <h5 class="card-title">Harmonia no Trânsito</h5>
            <p class="card-text">Mais segurança e responsabilidade no trânsito com nossas ações e cursos de pilotagem</p>
            <a href="#" class="btn btn-dark w-100">Ver detalhes</a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm card-zoom">
          <img src="../assets/lib.jpg" class="card-img-top" alt="Moto 3">
          <div class="card-body">
            <h5 class="card-title">Blog Asas da Liberdade</h5>
            <p class="card-text">Muito conteúdo sobre a Honda Motos e pra quem é amante de tudo que diz respeito ao universo das duas rodas!</p>
            <a href="#" class="btn btn-dark w-100">Ver detalhes</a>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {}
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
  font-optical-sizing: auto;
}

.card-img-top {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.4s ease-in-out;   /* animação suave */
}

.card-zoom {
  overflow: hidden;   /* impede a imagem de vazar quando der zoom */
}

/* ZOOM no hover */
.card-zoom:hover .card-img-top {
  transform: scale(1.08);
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

/* LEGENDA DO CARROSSEL */
.caption-bg {
  background: rgba(0, 0, 0, 0.55);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
}

</style>
