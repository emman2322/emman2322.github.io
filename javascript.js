document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-container img");
  
    images.forEach(img => {
      img.addEventListener("mouseenter", () => {
        img.style.transition = "transform 0.8s ease-out"; // Hace la animación más suave
        img.style.transform = "rotateY(180deg) scale(1.1)"; // También agranda la imagen
      });
  
      img.addEventListener("mouseleave", () => {
        img.style.transition = "transform 0.8s ease-out";
        img.style.transform = "rotateY(0deg) scale(1)";
      });
    });
  });
  