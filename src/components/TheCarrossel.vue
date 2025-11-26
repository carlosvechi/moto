<template>

<div>
  <p>aaaaaaaaaaaaaaaaaaaaaa</p>
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
</style>