"use strict";

/**
 * @description Patrón de Diseño Factory:
 * Supongamos que estamos creando un videojuego con varios tipos de enemigos.
 * En lugar de instanciar manualmente cada tipo de enemigo en distintas partes del código,
 * usamos una *fábrica* (Factory) que se encarga de crear los enemigos.
 * Esto permite centralizar la lógica de creación y facilita la extensión o mantenimiento del código.
 */

// Clase base que representa un enemigo genérico del juego
class Enemigo {
  // Propiedades privadas (solo accesibles dentro de la clase)
  #nombre;
  #puntosVida;

  // El constructor recibe el nombre y los puntos de vida del enemigo
  constructor(nombre, puntosVida) {
    this.#nombre = nombre;
    this.#puntosVida = puntosVida;
  }

  // Método común para todos los enemigos: atacar
  atacar() {
    console.log(`${this.#nombre} está atacando.`);
  }
}

// Clase "Factory" encargada de crear instancias de Enemigo
class EnemigoFactory {
  /**
   * Método que crea enemigos según el tipo especificado.
   * @param {string} tipo - Tipo de enemigo que queremos crear (zombie, esqueleto, demonio...)
   * @returns {Enemigo} Instancia de la clase Enemigo con las características apropiadas
   */
  // crearEnemigo(tipo) {
  static crearEnemigo(tipo) {
    // Según el tipo solicitado, devolvemos un nuevo enemigo con atributos distintos
    switch (tipo) {
      case "zombie":
        return new Enemigo("Zombie", 100); // enemigo con 100 puntos de vida
      case "esqueleto":
        return new Enemigo("Esqueleto", 75); // enemigo con 75 puntos de vida
      case "demonio":
        return new Enemigo("Demonio", 150); // enemigo con 150 puntos de vida
      default:
        // Si el tipo no está definido, lanzamos un error
        throw new Error(`Tipo de enemigo desconocido: ${tipo}`);
    }
  }
}

// ------------------- Cuerpo del script principal -------------------

// Creamos una instancia de la fábrica
// const factory = new EnemigoFactory();

// Usamos la fábrica para crear distintos enemigos sin preocuparnos de los detalles internos
// const zombie = factory.crearEnemigo('zombie');
// const esqueleto = factory.crearEnemigo('esqueleto');
// const demonio = factory.crearEnemigo('demonio');

const zombie = EnemigoFactory.crearEnemigo('zombie');
const esqueleto = EnemigoFactory.crearEnemigo('esqueleto');
const demonio = EnemigoFactory.crearEnemigo('demonio');

// Llamamos al método atacar() de cada enemigo
zombie.atacar();       // "Zombie está atacando."
esqueleto.atacar();    // "Esqueleto está atacando."
demonio.atacar();      // "Demonio está atacando."

// Comprobamos si el objeto creado pertenece a la clase Enemigo
console.log(zombie instanceof Enemigo); // true