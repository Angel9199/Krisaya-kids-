function buscar() {
  const texto = document.getElementById("buscador").value.toLowerCase();
  const productos = document.querySelectorAll("#catalogo .producto");

  productos.forEach(producto => {
    const nombre = producto.getAttribute("data-nombre").toLowerCase();
    producto.style.display = nombre.includes(texto) ? "block" : "none";
  });
}
