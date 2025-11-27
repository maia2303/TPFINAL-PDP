"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
//import { crearTarea } from './utils/crearTarea';
const prompt = (0, prompt_sync_1.default)();
let opcion = -1;
while (opcion !== 0) {
    console.log("~Menú principal~");
    console.log("[1] Ver todas las tareas");
    console.log("[2] Buscar una tarea");
    console.log("[3] Crear una tarea");
    console.log("[0] Salir");
    opcion = Number(prompt(">> "));
    switch (opcion) {
        case 1: //Tarea();
            break;
        case 2:
            //buscarTarea();
            break;
        case 3:
            //crearTarea(); //creaTarea
            break;
        case 0:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción inválida, intenta nuevamente...");
            break;
    }
}
