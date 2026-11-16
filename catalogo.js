const todosLosProductos = [
  { id: 1, nombre: "Remera Básica Algodón Pima", marca: "Marca 01", categoria: "Remeras", genero: "Unisex", precio: 85000, tallas: ["S", "M", "L", "XL"], color: "Blanco", colores: ["blanco", "negro", "gris"], descripcion: "Remera cuello redondo 100% algodón peinado, suave y fresca para el calor.", imagen: "" },
  { id: 2, nombre: "Remera Oversize Estampa Urbana", marca: "Marca 04", categoria: "Remeras", genero: "Unisex", precio: 115000, tallas: ["M", "L", "XL"], color: "Negro", colores: ["negro", "blanco", "rosa"], descripcion: "Corte amplio con diseño minimalista en la espalda y tela gruesa.", imagen: "" },
  { id: 3, nombre: "Chomba Piqué Clásica", marca: "Marca 02", categoria: "Remeras", genero: "Hombre", precio: 135000, tallas: ["S", "M", "L", "XL"], color: "Azul Marino", colores: ["azul", "blanco", "verde"], descripcion: "Chomba tipo polo con botones nacarados, ideal para un look casual elegante.", imagen: "" },
  { id: 4, nombre: "Top Crop Ribb", marca: "Marca 01", categoria: "Remeras", genero: "Mujer", precio: 75000, tallas: ["XS", "S", "M"], color: "Verde Salvia", colores: ["verde", "blanco", "rosa"], descripcion: "Top ajustado de tela acanalada elástica, súper cómodo.", imagen: "" },
  { id: 5, nombre: "Remera Manga Larga Henley", marca: "Marca 04", categoria: "Remeras", genero: "Hombre", precio: 125000, tallas: ["M", "L", "XL"], color: "Gris Melange", colores: ["gris", "negro", "azul"], descripcion: "Remera con tres botones en el cuello y puños ajustados.", imagen: "" },
  { id: 6, nombre: "Camisa de Lino Manga Corta", marca: "Marca 01", categoria: "Camisas", genero: "Hombre", precio: 195000, tallas: ["S", "M", "L", "XL"], color: "Beige", colores: ["beige", "blanco", "azul"], descripcion: "Camisa fresca de mezcla de lino y algodón, perfecta para días calurosos.", imagen: "" },
  { id: 7, nombre: "Camisa Oxford Formal", marca: "Marca 02", categoria: "Camisas", genero: "Hombre", precio: 220000, tallas: ["38", "40", "42", "44"], color: "Celeste", colores: ["azul", "blanco"], descripcion: "Camisa manga larga de corte slim fit para oficina o eventos.", imagen: "" },
  { id: 8, nombre: "Blusa Satinada Cuello en V", marca: "Marca 03", categoria: "Camisas", genero: "Mujer", precio: 165000, tallas: ["S", "M", "L"], color: "Champagne", colores: ["beige", "rosa", "blanco"], descripcion: "Blusa liviana con caída fluida y acabado satinado elegante.", imagen: "" },
  { id: 9, nombre: "Camisa Leñadora a Cuadros", marca: "Marca 04", categoria: "Camisas", genero: "Unisex", precio: 180000, tallas: ["S", "M", "L", "XL"], color: "Rojo y Negro", colores: ["rojo", "negro"], descripcion: "Camisa de franela suave, ideal para usar abierta sobre una remera básica.", imagen: "" },
  { id: 10, nombre: "Jean Mom Fit Tiro Alto", marca: "Marca 02", categoria: "Pantalones", genero: "Mujer", precio: 245000, tallas: ["36", "38", "40", "42"], color: "Azul Clásico", colores: ["azul", "negro"], descripcion: "Jean rígido de tiro alto con corte relajado en las piernas.", imagen: "" },
  { id: 11, nombre: "Jean Slim Fit Elástico", marca: "Marca 02", categoria: "Pantalones", genero: "Hombre", precio: 235000, tallas: ["38", "40", "42", "44", "46"], color: "Azul Oscuro", colores: ["azul", "gris", "negro"], descripcion: "Pantalón de mezclilla con 2% de elastano para mayor comodidad al moverse.", imagen: "" },
  { id: 12, nombre: "Pantalón Cargo Gabardina", marca: "Marca 04", categoria: "Pantalones", genero: "Unisex", precio: 260000, tallas: ["S", "M", "L", "XL"], color: "Verde Militar", colores: ["verde", "beige", "negro"], descripcion: "Pantalón resistente con seis bolsillos funcionales y puño ajustable.", imagen: "" },
  { id: 13, nombre: "Pantalón Chino Clásico", marca: "Marca 01", categoria: "Pantalones", genero: "Hombre", precio: 210000, tallas: ["38", "40", "42", "44"], color: "Caqui", colores: ["beige", "azul", "negro"], descripcion: "Pantalón de gabardina fina, versátil para trabajo o salidas.", imagen: "" },
  { id: 14, nombre: "Pantalón Palazzo de Lino", marca: "Marca 03", categoria: "Pantalones", genero: "Mujer", precio: 230000, tallas: ["S", "M", "L"], color: "Blanco Hueso", colores: ["blanco", "beige", "rosa"], descripcion: "Pantalón ancho de pierna recta con elástico en la cintura y lazo.", imagen: "" },
  { id: 15, nombre: "Short de Jean Desflecado", marca: "Marca 02", categoria: "Shorts y Polleras", genero: "Mujer", precio: 145000, tallas: ["36", "38", "40", "42"], color: "Celeste", colores: ["azul", "blanco"], descripcion: "Short tiro alto con ruedo desflecado y cinco bolsillos.", imagen: "" },
  { id: 16, nombre: "Bermuda Chino de Algodón", marca: "Marca 01", categoria: "Shorts y Polleras", genero: "Hombre", precio: 155000, tallas: ["38", "40", "42", "44"], color: "Azul Marino", colores: ["azul", "beige", "gris"], descripcion: "Bermuda por encima de la rodilla, fresca y fácil de combinar.", imagen: "" },
  { id: 17, nombre: "Pollera Midi Plisada", marca: "Marca 03", categoria: "Shorts y Polleras", genero: "Mujer", precio: 185000, tallas: ["S", "M", "L"], color: "Rosa Palo", colores: ["rosa", "blanco", "negro"], descripcion: "Pollera debajo de la rodilla con cintura elástica y pliegues definidos.", imagen: "" },
  { id: 18, nombre: "Minifalda de Ecocuero", marca: "Marca 04", categoria: "Shorts y Polleras", genero: "Mujer", precio: 160000, tallas: ["XS", "S", "M", "L"], color: "Negro", colores: ["negro", "rojo"], descripcion: "Falda corta tiro alto con cierre trasero invisible y forro interior.", imagen: "" },
  { id: 19, nombre: "Vestido Solero Floral", marca: "Marca 03", categoria: "Vestidos", genero: "Mujer", precio: 225000, tallas: ["S", "M", "L"], color: "Rosa", colores: ["rosa", "blanco", "beige"], descripcion: "Vestido corto de breteles finos con tela viscosa súper fresca.", imagen: "" },
  { id: 20, nombre: "Vestido Camisero de Poplin", marca: "Marca 01", categoria: "Vestidos", genero: "Mujer", precio: 270000, tallas: ["S", "M", "L", "XL"], color: "Blanco", colores: ["blanco", "beige", "azul"], descripcion: "Vestido con botones frontales, cuello camisero y cinturón de tela.", imagen: "" },
  { id: 21, nombre: "Vestido Midi de Fiesta", marca: "Marca 03", categoria: "Vestidos", genero: "Mujer", precio: 380000, tallas: ["S", "M", "L"], color: "Bordo", colores: ["rojo", "rosa", "negro"], descripcion: "Vestido elegante con tajo lateral y escote drapeado para eventos nocturnos.", imagen: "" },
  { id: 22, nombre: "Vestido Tejido Acanalado", marca: "Marca 01", categoria: "Vestidos", genero: "Mujer", precio: 210000, tallas: ["S", "M", "L"], color: "Marrón", colores: ["beige", "negro", "verde"], descripcion: "Vestido al cuerpo de manga corta en hilo liviano.", imagen: "" },
  { id: 23, nombre: "Buzo Hoodie Canguro", marca: "Marca 04", categoria: "Abrigos", genero: "Unisex", precio: 240000, tallas: ["S", "M", "L", "XL"], color: "Gris Topo", colores: ["gris", "negro", "rosa"], descripcion: "Buzo con capucha forrada y bolsillo canguro en algodón frizado.", imagen: "" },
  { id: 24, nombre: "Campera de Jean Clásica", marca: "Marca 02", categoria: "Abrigos", genero: "Unisex", precio: 320000, tallas: ["S", "M", "L", "XL"], color: "Azul Medio", colores: ["azul", "negro"], descripcion: "Chaqueta denim atemporal con botones metálicos y bolsillos en el pecho.", imagen: "" },
  { id: 25, nombre: "Campera Puffer Acolchada", marca: "Marca 04", categoria: "Abrigos", genero: "Unisex", precio: 390000, tallas: ["M", "L", "XL"], color: "Negro", colores: ["negro", "gris", "verde"], descripcion: "Campera térmica liviana, resistente al viento y lluvia leve.", imagen: "" },
  { id: 26, nombre: "Blazer Estructurado", marca: "Marca 03", categoria: "Abrigos", genero: "Mujer", precio: 340000, tallas: ["S", "M", "L"], color: "Camel", colores: ["beige", "negro", "rosa"], descripcion: "Saco tipo blazer con hombreras sutiles y forro interno completo.", imagen: "" },
  { id: 27, nombre: "Suéter Cuello Redondo Tejido", marca: "Marca 01", categoria: "Abrigos", genero: "Hombre", precio: 215000, tallas: ["M", "L", "XL"], color: "Verde Botella", colores: ["verde", "azul", "gris"], descripcion: "Pulóver suave de punto fino, ideal para media estación o debajo de sacos.", imagen: "" },
  { id: 28, nombre: "Calza Deportiva Compresión", marca: "Marca 04", categoria: "Deportivo", genero: "Mujer", precio: 150000, tallas: ["S", "M", "L"], color: "Negro", colores: ["negro", "rosa", "gris"], descripcion: "Legging de tiro alto con tela opaca de secado rápido y bolsillo oculto.", imagen: "" },
  { id: 29, nombre: "Short Deportivo Dry-Fit", marca: "Marca 02", categoria: "Deportivo", genero: "Hombre", precio: 110000, tallas: ["S", "M", "L", "XL"], color: "Gris Oscuro", colores: ["gris", "negro", "azul"], descripcion: "Short liviano con tela respirable y cintura elástica con cordón.", imagen: "" },
  { id: 30, nombre: "Rompevientos Deportivo", marca: "Marca 04", categoria: "Deportivo", genero: "Unisex", precio: 255000, tallas: ["S", "M", "L", "XL"], color: "Azul Eléctrico", colores: ["azul", "negro", "blanco"], descripcion: "Campera ultra liviana con capucha y detalles reflectivos para correr.", imagen: "" }
];

const mapaColoresHex = {
  blanco: "#ffffff",
  negro: "#111111",
  azul: "#4b6b94",
  rosa: "#db7b9b",
  rojo: "#9e0b22",
  beige: "#d8c3a5",
  verde: "#3f5e45",
  gris: "#8c8c8c"
};

let favoritos = JSON.parse(localStorage.getItem("maydan_favoritos")) || [];
let ordenActual = "defecto";
let textoBusqueda = "";
let precioMin = 75000;
let precioMax = 390000;
let paginaActual = 1;
const porPagina = 12;

const marcasSel = new Set();
const categoriasSel = new Set();
const generosSel = new Set();
const tallesSel = new Set();
const coloresSel = new Set();

const grid = document.getElementById("grid-productos");
const contador = document.getElementById("contador-productos");
const paginacionBox = document.getElementById("paginacion");
const botonesFiltro = document.querySelectorAll(".btn-filtro");
const checkboxes = document.querySelectorAll(".filtro-check");
const circulosColor = document.querySelectorAll(".color-circulo");
const inputPrecioMin = document.getElementById("precio-min");
const inputPrecioMax = document.getElementById("precio-max");
const barraActiva = document.getElementById("rango-barra-activa");
const rangoValores = document.getElementById("rango-valores");
const btnLimpiar = document.getElementById("btn-limpiar-filtros");
const formBusqueda = document.querySelector(".barrabusqueda");
const inputBusqueda = document.querySelector(".inputbuscador");

// 1. Filtrar y ordenar
function aplicarFiltros() {
  let resultado = todosLosProductos.filter((producto) => {
    const okMarca = marcasSel.size === 0 || marcasSel.has(producto.marca);
    const okCat = categoriasSel.size === 0 || categoriasSel.has(producto.categoria);
    const okGen = generosSel.size === 0 || generosSel.has(producto.genero);

    let okTalle = tallesSel.size === 0;
    if (!okTalle) {
      okTalle = producto.tallas.some((t) => {
        if (tallesSel.has(t)) return true;
        if (tallesSel.has("38") && ["36", "38", "40"].includes(t)) return true;
        if (tallesSel.has("42") && ["42", "44", "46"].includes(t)) return true;
        return false;
      });
    }

    const okColor =
      coloresSel.size === 0 ||
      producto.colores.some((c) => coloresSel.has(c));

    const okPrecio = producto.precio >= precioMin && producto.precio <= precioMax;

    const okTexto =
      producto.nombre.toLowerCase().includes(textoBusqueda) ||
      producto.marca.toLowerCase().includes(textoBusqueda) ||
      producto.categoria.toLowerCase().includes(textoBusqueda) ||
      producto.color.toLowerCase().includes(textoBusqueda);

    return okMarca && okCat && okGen && okTalle && okColor && okPrecio && okTexto;
  });

  if (ordenActual === "menor") {
    resultado.sort((a, b) => a.precio - b.precio);
  } else if (ordenActual === "mayor") {
    resultado.sort((a, b) => b.precio - a.precio);
  }

  mostrarProductos(resultado);
}

// 2. Dibujar tarjetas + paginación
function mostrarProductos(lista) {
  grid.innerHTML = "";
  contador.textContent = `${lista.length} ${lista.length === 1 ? "prenda" : "prendas"}`;

  if (lista.length === 0) {
    grid.innerHTML = `
      <div class="sin-resultados">
        No encontramos prendas con los filtros seleccionados.
      </div>
    `;
    paginacionBox.innerHTML = "";
    return;
  }

  const totalPaginas = Math.ceil(lista.length / porPagina);
  if (paginaActual > totalPaginas) paginaActual = 1;

  const inicio = (paginaActual - 1) * porPagina;
  const paginaItems = lista.slice(inicio, inicio + porPagina);

  paginaItems.forEach((producto) => {
    const precioGs = "Gs. " + producto.precio.toLocaleString("es-PY");
    const esFavorito = favoritos.includes(producto.id);

    const tallasHTML = producto.tallas
      .map((talla) => `<span class="talla-pill">${talla}</span>`)
      .join("");

    const coloresHTML = producto.colores
      .map((c) => `<span class="color-dot" style="background-color: ${mapaColoresHex[c] || '#ccc'};"></span>`)
      .join("");

    const contenidoImagen = producto.imagen
      ? `<img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">`
      : `<div class="producto-imagen-vacia"><span>Sin imagen</span></div>`;

    const card = document.createElement("article");
    card.classList.add("producto-card");

    card.innerHTML = `
      <div class="producto-imagen-box">
        ${contenidoImagen}
        <span class="producto-etiqueta">${producto.categoria}</span>
        <button type="button" class="btn-favorito ${esFavorito ? "activo" : ""}" data-id="${producto.id}" aria-label="Agregar a favoritos">
          ${esFavorito ? "♥" : "♡"}
        </button>
      </div>

      <div class="producto-info">
        <div class="producto-fila-top">
          <span class="producto-marca">${producto.marca}</span>
          <div class="producto-colores-dots">${coloresHTML}</div>
        </div>
        <h3 class="producto-nombre">${producto.nombre}</h3>
        <p class="producto-desc">${producto.descripcion}</p>
        <div class="producto-tallas">${tallasHTML}</div>

        <div class="producto-pie">
          <p class="producto-precio">${precioGs}</p>
          <button type="button" class="btn-agregar" onclick="alert('Agregaste: ${producto.nombre} (${precioGs})')">
            Agregar al carrito
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Evento de corazones de favoritos
  grid.querySelectorAll(".btn-favorito").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      if (favoritos.includes(id)) {
        favoritos = favoritos.filter((f) => f !== id);
        btn.classList.remove("activo");
        btn.textContent = "♡";
      } else {
        favoritos.push(id);
        btn.classList.add("activo");
        btn.textContent = "♥";
      }
      localStorage.setItem("maydan_favoritos", JSON.stringify(favoritos));
    });
  });

  dibujarPaginacion(totalPaginas);
}

// 3. Paginación inferior (1 2 3 →)
function dibujarPaginacion(totalPaginas) {
  paginacionBox.innerHTML = "";
  if (totalPaginas <= 1) return;

  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `btn-pagina ${i === paginaActual ? "activo" : ""}`;
    btn.textContent = i;
    btn.addEventListener("click", () => {
      paginaActual = i;
      aplicarFiltros();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    paginacionBox.appendChild(btn);
  }

  if (paginaActual < totalPaginas) {
    const btnSig = document.createElement("button");
    btnSig.type = "button";
    btnSig.className = "btn-pagina";
    btnSig.innerHTML = "&rarr;";
    btnSig.addEventListener("click", () => {
      paginaActual++;
      aplicarFiltros();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    paginacionBox.appendChild(btnSig);
  }
}

// 4. Botones superiores de categorías sincronizados con checkboxes
botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    botonesFiltro.forEach((b) => b.classList.remove("activo"));
    boton.classList.add("activo");

    const cat = boton.dataset.categoria;
    categoriasSel.clear();
    if (cat !== "Todos") categoriasSel.add(cat);

    checkboxes.forEach((chk) => {
      if (chk.dataset.tipo === "categoria") {
        chk.checked = categoriasSel.has(chk.value);
      }
    });

    paginaActual = 1;
    aplicarFiltros();
  });
});

// 5. Checkboxes de la barra lateral
checkboxes.forEach((chk) => {
  chk.addEventListener("change", () => {
    const tipo = chk.dataset.tipo;
    const val = chk.value;
    const mapa = { marca: marcasSel, categoria: categoriasSel, genero: generosSel, talle: tallesSel };
    const setObjetivo = mapa[tipo];

    if (chk.checked) setObjetivo.add(val);
    else setObjetivo.delete(val);

    if (tipo === "categoria") {
      botonesFiltro.forEach((b) => b.classList.remove("activo"));
      if (categoriasSel.size === 0) {
        document.querySelector('.btn-filtro[data-categoria="Todos"]')?.classList.add("activo");
      } else if (categoriasSel.size === 1) {
        const unica = [...categoriasSel][0];
        document.querySelector(`.btn-filtro[data-categoria="${unica}"]`)?.classList.add("activo");
      }
    }

    paginaActual = 1;
    aplicarFiltros();
  });
});

// 6. Círculos de color
circulosColor.forEach((circulo) => {
  circulo.addEventListener("click", () => {
    const color = circulo.dataset.color;
    circulo.classList.toggle("activo");
    if (coloresSel.has(color)) coloresSel.delete(color);
    else coloresSel.add(color);

    paginaActual = 1;
    aplicarFiltros();
  });
});

// 7. Acordeón de la barra lateral (abrir/cerrar grupos)
document.querySelectorAll(".filtro-grupo-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("cerrado");
  });
});

// 8. Rango de precio
function actualizarSliderPrecio(quien) {
  let minVal = Number(inputPrecioMin.value);
  let maxVal = Number(inputPrecioMax.value);

  if (minVal > maxVal - 10000) {
    if (quien === "min") {
      minVal = maxVal - 10000;
      inputPrecioMin.value = minVal;
    } else {
      maxVal = minVal + 10000;
      inputPrecioMax.value = maxVal;
    }
  }

  precioMin = minVal;
  precioMax = maxVal;

  const minTotal = Number(inputPrecioMin.min);
  const maxTotal = Number(inputPrecioMin.max);
  const porcMin = ((minVal - minTotal) / (maxTotal - minTotal)) * 100;
  const porcMax = ((maxVal - minTotal) / (maxTotal - minTotal)) * 100;

  barraActiva.style.left = porcMin + "%";
  barraActiva.style.width = (porcMax - porcMin) + "%";
  rangoValores.textContent = `Gs. ${minVal.toLocaleString("es-PY")} — Gs. ${maxVal.toLocaleString("es-PY")}`;

  paginaActual = 1;
  aplicarFiltros();
}

inputPrecioMin.addEventListener("input", () => actualizarSliderPrecio("min"));
inputPrecioMax.addEventListener("input", () => actualizarSliderPrecio("max"));

// 9. Botón Limpiar todo
btnLimpiar.addEventListener("click", () => {
  marcasSel.clear();
  categoriasSel.clear();
  generosSel.clear();
  tallesSel.clear();
  coloresSel.clear();

  checkboxes.forEach((c) => (c.checked = false));
  circulosColor.forEach((c) => c.classList.remove("activo"));
  botonesFiltro.forEach((b) => b.classList.remove("activo"));
  document.querySelector('.btn-filtro[data-categoria="Todos"]')?.classList.add("activo");

  inputPrecioMin.value = 75000;
  inputPrecioMax.value = 390000;
  textoBusqueda = "";
  if (inputBusqueda) inputBusqueda.value = "";

  actualizarSliderPrecio("min");
});

// 10. Desplegable "Ordenar por"
const dropdownOrden = document.getElementById("dropdown-orden");
if (dropdownOrden) {
  const boton = dropdownOrden.querySelector(".dropdown-boton");
  const textoBoton = dropdownOrden.querySelector(".dropdown-texto");
  const opciones = dropdownOrden.querySelectorAll(".dropdown-opcion");

  boton.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownOrden.classList.toggle("abierto");
  });

  opciones.forEach((opcion) => {
    opcion.addEventListener("click", () => {
      opciones.forEach((o) => o.classList.remove("activo"));
      opcion.classList.add("activo");
      textoBoton.textContent = opcion.textContent;
      dropdownOrden.classList.remove("abierto");
      ordenActual = opcion.dataset.valor;
      paginaActual = 1;
      aplicarFiltros();
    });
  });

  document.addEventListener("click", () => {
    dropdownOrden.classList.remove("abierto");
  });
}

// 11. Buscador de la cabecera
if (inputBusqueda) {
  inputBusqueda.addEventListener("input", (e) => {
    textoBusqueda = e.target.value.trim().toLowerCase();
    paginaActual = 1;
    aplicarFiltros();
  });
}

if (formBusqueda) {
  formBusqueda.addEventListener("submit", (e) => {
    e.preventDefault();
    textoBusqueda = inputBusqueda.value.trim().toLowerCase();
    paginaActual = 1;
    aplicarFiltros();
  });
}

// Iniciar todo
actualizarSliderPrecio("min");