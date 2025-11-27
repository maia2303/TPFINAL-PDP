import promptSync from "prompt-sync";
import {Lista} from "./Lista.js"
import { Tarea, Estado, Dificultad } from "../models/Tarea.js";
const prompt = promptSync();

const menuEditar = (listaActual: readonly Tarea[], id: number): Tarea[] => {
    
    const tarea = listaActual.find(t => t.id === id);

    if(!tarea) return [...listaActual]; //Si no existe la tarea a editar, se devuelve sin hacer cambios

    console.log(`Editando la tarea ${tarea.titulo} (dejar vacío para mantener la información)`);
    const nuevoTitulo = prompt("Título: ");
    const nuevaDescripcion = prompt("Descripción: ");
    const nuevoEstadoInput = prompt("Estado [1] pendiente | [2] en curso | [3] terminada | [4] cancelada: ")

    let nuevoEstado: Estado | undefined;

    const estados = //ver de usar enum
    {
        "1": "pendiente",
        "2": "en curso",
        "3": "terminada",
        "4": "cancelada" 
    }

    //objeto para cambios
    const cambios: any = {};
    if(nuevoTitulo.trim()) cambios.titulo = nuevoTitulo;
    if(nuevaDescripcion.trim()) cambios.descripcion = nuevaDescripcion;
    if(nuevoEstado) cambios.estado = nuevoEstado;
    
    return editarTareaLista(listaActual, id, cambios);
};

export const editarTareaLista = 
    (
        lista: readonly Tarea[], 
        id: number,
        cambio: Partial<Omit<Tarea, 'id' | 'creacion' >> //solo se permite el cambio en algunos campos, por ej en id para evitar errores en el filtrado
    ): Tarea[]  => {
        return lista.map(t => {
            if(t.id === id){
                return Object.freeze({
                    ...t, //copia las propiedades anteriores de la tareaa
                    ...cambio, // sobreescribe las nuevas propiedades
                    ultimaEdicion: new Date().toLocaleString() // se actualiza la fecha de creación
                });
            }
            return t;
        });
};
