import PromptSync from "prompt-sync";
import * as readline from 'readline';
import {Tarea} from './models/Tarea';
import { crearTarea } from './utils/crearTarea';

const prompt = PromptSync();
let opcion = -1;


while(opcion !== 0) {
    console.log("~Menú principal~");
    console.log("[1] Ver todas las tareas");
    console.log("[2] Buscar una tarea");
    console.log("[3] Crear una tarea");
    console.log("[0] Salir");

    opcion = Number(prompt(">> "));

    switch(opcion){
        case 1: //Tarea();
            break;
        case 2:
            //buscarTarea();
            break;
        case 3:
            crearTarea(); //creaTarea
        break;
        case 0:
            console.log("Saliendo...");
            break;
        default: 
        console.log("Opción inválida, intenta nuevamente...");
        break;
        }
 
}

