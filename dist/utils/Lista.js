"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lista = void 0;
//const archivo = "./tareas.json"; //indice de la ruta del archivo que va a leer
const estadosValidos = ["pendiente", "en curso", "terminada", "cancelada"];
const dificultadValida = [1, 2, 3];
class Lista {
    constructor() {
        //this.Lista = tareas.map(e => new Tarea(e.id, e.titulo, e.descripcion, e.dificultad)); //para que cada tarea que esta en el tasks se instancien como una tarea.
        this.Lista = []; //esto por ahora como básico para desp agregarle la lectura del archivo json
    }
    //metodo para agregar la tarea
    agregar(tarea) {
        this.Lista.push(tarea);
    }
}
exports.Lista = Lista;
