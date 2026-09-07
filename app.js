// Función para cambiar la imagen principal al hacer clic en las miniaturas
function changeImage(src) {
  const featuredImage = document.getElementById('featured-image');
  
  // Transición suave al cambiar de foto
  featuredImage.style.opacity = '0.3';
  
  setTimeout(() => {
    featuredImage.src = src;
    featuredImage.style.opacity = '1';
  }, 150);

  // Actualizar la miniatura activa
  const thumbnails = document.querySelectorAll('.thumb');
  thumbnails.forEach(thumb => {
    if (thumb.src === src) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');
    }
  });
}