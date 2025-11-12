import fs from 'fs';//para leer y escribir el archivo json
import { Tarea, Estado, Dificultad } from './Tarea';

const archivo = "./tareas.json"; //indice de la ruta del archivo que va a leer
const estadosValidos = ["pendiente", "en curso", "terminada", "cancelada"];
const dificultadValida = [ 1, 2, 3];

export class Lista 
{
    
}