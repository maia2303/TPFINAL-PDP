import { Tarea } from "../models/Tarea";

export const mostrarDetalle = (t: Tarea) => {
     
    const dificultadLuna = "🌕".repeat(t.dificultad) + "🌑".repeat(3 - t.dificultad);

    console.log(`
    ID: ${t.id} \n
    Título: ${t.titulo}\n
    Descripción: ${t.descripcion}\n
    Dificultad: ${t.dificultad} - ${dificultadLuna}\n
    Estado: ${t.estado}\n
    Vencimiento: ${t.vencimiento}\n
    Creación: ${t.creacion}\n
    Última edición: ${t.ultimaEdicion}`);
};
