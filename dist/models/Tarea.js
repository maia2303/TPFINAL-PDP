"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
//Objeto de la tarea
class Tarea {
    //constructor no van dentro del () los de tipo Date pq son valores que los va a generar la computadora, no son ingresados 
    // por el usuario (excepto vencimiento que si lo ingresa el usuario)
    constructor(titulo, descripcion, dificultad = 1, vencimiento = null, estado = "pendiente") {
        //validacion del titulo
        if (!titulo || titulo.trim() === "") {
            throw new Error("El título no puede estar vacío.");
        }
        //this.id = id;
        this.titulo = titulo.trim(); // para asegurar que no hayan espacios al inicio o al final
        this.descripcion = descripcion;
        this.estado = estado;
        this.dificultad = dificultad;
        this.vencimiento = null;
        this.creacion = new Date();
        this.ultimaEdicion = new Date();
    }
    // Metodo de tarea
    detalle() {
        console.log(`Titulo: ${this.titulo}\n
        Descripcion: ${this.descripcion}\n
        Dificultad: ${this.dificultad}\n
        Estado: ${this.estado}\n
        Vencimiento: ${this.vencimiento}\n
        Creacion: ${this.creacion}\n
        Ultima edicion: ${this.ultimaEdicion}`);
    }
    ;
}
exports.Tarea = Tarea;
