class Personaje {
  constructor(nombre, especie, imagen) {
    this._nombre = nombre;
    this._especie = especie;
    this._imagen = imagen;
  }

  get nombre() {
    return this._nombre;
  }

  get especie() {
    return this._especie;
  }

  get imagen() {
    return this._imagen;
  }

  show() {
    const card = document.createElement("div");
    card.classList.add("card");

    const imagen = document.createElement("img");
    imagen.src = this._imagen;
    card.appendChild(imagen);

    const nombre = document.createElement("h2");
    nombre.textContent = this._nombre;
    card.appendChild(nombre);

    const especie = document.createElement("p");
    especie.textContent = this._especie;
    card.appendChild(especie);

    document.querySelector('.cards-container').appendChild(card);
  }
}

async function cargarPersonajes() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    const personajes = data.results;
    personajes.forEach((personaje) => {
      const { name, species, image } = personaje;
      const nuevoPersonaje = new Personaje(name, species, image);
      nuevoPersonaje.show();
    });
  } catch (error) {
    console.error("Error al cargar los personajes:", error);
  }
}
window.addEventListener("DOMContentLoaded", cargarPersonajes);