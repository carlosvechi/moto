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

<!-- Indicators/dots -->
<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active sb"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1" class="sb"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2" class="sb"></button>
</div>

<!-- The slideshow/carousel -->
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="../assets/moto04.webp" alt="Los Angeles" class="d-block w-100">
  </div>
  <div class="carousel-item">
    <img src="../assets/moto05.webp" alt="Chicago" class="d-block w-100">
  </div>
  <div class="carousel-item">
    <img src="../assets/moto06.webp" alt="New York" class="d-block w-100">
  </div>
</div>

<!-- Left and right controls/icons -->
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
      <div class="card h-100 shadow-sm">
        <img src="../assets/racing.webp" class="card-img-top" alt="Moto 1">
        <div class="card-body">
          <h5 class="card-title">Honda Racing</h5>
          <p class="card-text">São mais de 40 anos de história e muitos títulos em centenas de competições! Conheça a nossa equipe e fique por dentro de todos os desafios do #RacingSpirit em 2025</p>
          <a href="#" class="btn btn-dark w-100">Ver detalhes</a>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card h-100 shadow-sm">
        <img src="../assets/harmon.webp" class="card-img-top" alt="Moto 2">
        <div class="card-body">
          <h5 class="card-title">Harmonia no Trânsito</h5>
          <p class="card-text">Mais segurança e responsabilidade no trânsito com nossas ações e cursos de pilotagem</p>
          <a href="#" class="btn btn-dark w-100">Ver detalhes</a>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card h-100 shadow-sm">
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

</script>

<style>

#demo {
  max-width: 800px;  /* largura máxima do carrossel */
  max-height: 600px; /* altura máxima do carrossel */
  margin: 0 auto;    /* centraliza horizontalmente */
  overflow: hidden;  /* evita que imagens grandes escapem do container */
}

#demo .carousel-inner img {
  width: 100%;   /* ajusta a imagem à largura do carrossel */
  height: auto;  /* mantém proporção da imagem */
  object-fit: cover; /* corta a imagem se precisar preencher a altura */
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(100%); /* inverte a cor para branco */
}
.lora {
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
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