// ONCE Sports — renderiza los enlaces de links.json dentro de #links
const contenedor = document.getElementById("links");

// Crea un <a> por enlace sin usar innerHTML con datos externos
function crearBoton({ label, url, featured }) {
  const boton = document.createElement("a");
  boton.className = featured ? "btn btn--primary" : "btn btn--secondary";
  boton.href = url;
  boton.target = "_blank";
  boton.rel = "noopener noreferrer";
  boton.textContent = label;
  return boton;
}

// Trae el JSON, filtra los habilitados y los pinta
async function cargarEnlaces() {
  try {
    const respuesta = await fetch("links.json");
    if (!respuesta.ok) {
      throw new Error(`No se pudo cargar links.json (HTTP ${respuesta.status})`);
    }

    const datos = await respuesta.json();
    const enlaces = (datos.links || []).filter((enlace) => enlace.enabled);

    const fragmento = document.createDocumentFragment();
    enlaces.forEach((enlace) => fragmento.append(crearBoton(enlace)));
    contenedor.append(fragmento);
  } catch (error) {
    // Deja visible el fallback estático de <noscript> y avisa en consola
    console.error("Error al cargar los enlaces:", error);
  }
}

cargarEnlaces();
