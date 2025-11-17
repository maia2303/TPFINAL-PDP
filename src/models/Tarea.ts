export type Estado = "pendiente" | "en curso" | "terminada" | "cancelada"; //ver si lo podemos meter dentro de la clase Tarea y donde o como.
export type Dificultad = 1 | 2 | 3;

//Objeto de la tarea

export class Tarea
{   //atributos 
    //id: number;
    titulo: string;
    descripcion: string;
    estado:Estado;
    dificultad: Dificultad;
    vencimiento: Date | null; 
    creacion: Date;
    ultimaEdicion: Date;

    //constructor no van dentro del () los de tipo Date pq son valores que los va a generar la computadora, no son ingresados por el usuario
    constructor(titulo: string, descripcion: string, dificultad: Dificultad = 1, vencimiento: Date | null = null, estado: Estado = "pendiente") 
    {
        //validacion del titulo
        if (!titulo || titulo.trim() === "") 
        {
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
    detalle()
    {  
        console.log(`Titulo: ${this.titulo}\n
        Descripcion: ${this.descripcion}\n
        Dificultad: ${this.dificultad}\n
        Estado: ${this.estado}\n
        Vencimiento: ${this.vencimiento}\n
        Creacion: ${this.creacion}\n
        Ultima edicion: ${this.ultimaEdicion}`);
    };
}