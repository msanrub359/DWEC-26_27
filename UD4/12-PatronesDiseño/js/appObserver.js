"use strict"
/**
 * @description Patrón de Diseño Observer.
 * 
 * Supongamos que estamos desarrollando un sistema de chat en tiempo real.
 * Queremos que cuando un usuario envíe un mensaje, todos los demás usuarios conectados
 * sean notificados automáticamente y vean el mensaje sin necesidad de recargar nada.
 * 
 * El patrón *Observer* permite justamente eso: 
 * Un objeto (el *sujeto* o *subject*) mantiene una lista de observadores (los *observers*),
 * y cuando cambia su estado, notifica a todos los observadores registrados.
 */

// Chat es el Subject (Sujeto) → el objeto observado.
// Es quien mantiene la lista de observadores (usuarios) y les notifica cuando ocurre un cambio en su estado (por ejemplo, cuando se envía un nuevo mensaje).
class Chat {
  // Propiedades privadas
  #mensajes;  // almacena el historial de mensajes enviados
  #usuarios;  // lista de usuarios (observadores) registrados

  constructor() {
    this.#mensajes = []; // inicialmente, sin mensajes
    this.#usuarios = []; // inicialmente, sin usuarios
  }

  // Método para agregar un nuevo usuario al chat (suscribirse a las notificaciones)
  addUsuario(usuario) {
    this.#usuarios.push(usuario);
  }

  // Método para eliminar un usuario del chat (cancelar su suscripción)
  removeUsuario(usuario) {
    // const index = this.#usuarios.findIndex(usu => usu == usuario);
    // if (index !== -1) {
    //   this.#usuarios.splice(index, 1); // elimina al usuario del array
    // }
    this.#usuarios= this.#usuarios.filter(user=> user!==usuario)
  }

  // Método para enviar un nuevo mensaje al chat
  sendMensaje(mensaje) {
    this.#mensajes.push(mensaje); // guarda el mensaje en el historial
    this.notificarUsuarios(mensaje); // notifica a todos los usuarios conectados
  }

  // Método interno que notifica a todos los observadores (usuarios)
  notificarUsuarios(mensaje) {
    // Recorre la lista de usuarios y llama al método "update" de cada uno
    this.#usuarios.forEach((usuario) => {
      usuario.update(mensaje);
    });
  }
}

// ChatUser es el Observer (Observador) → el objeto que observa.
// Es quien se suscribe al sujeto (Chat) para recibir notificaciones y reacciona ante los cambios mediante su método update().
class ChatUser {
  #usuario; // nombre o identificador del usuario

  constructor(usuario) {
    this.#usuario = usuario;
  }

  // Método llamado por el Chat cada vez que hay un nuevo mensaje
  update(mensaje) {
    console.log(`${this.#usuario} ha recibido un nuevo mensaje: ${mensaje}`);
  }
  
}

// ---------------- Ejemplo de uso del patrón ----------------

// Creamos el objeto "Chat" (sujeto principal)
const chat = new Chat();

// Creamos dos usuarios (observadores)
const user1 = new ChatUser("Usuario1");
const user2 = new ChatUser("Usuario2");

// Los usuarios se suscriben (se agregan al chat)
chat.addUsuario(user1);
chat.addUsuario(user2);

// Enviamos un mensaje desde el chat
chat.sendMensaje("¡Hola a todos!");
// Salida esperada:
// Usuario1 ha recibido un nuevo mensaje: ¡Hola a todos!
// Usuario2 ha recibido un nuevo mensaje: ¡Hola a todos!

// Enviamos otro mensaje
chat.sendMensaje("¿Cómo están?");
// Salida esperada:
// Usuario1 ha recibido un nuevo mensaje: ¿Cómo están?
// Usuario2 ha recibido un nuevo mensaje: ¿Cómo están?

                                          