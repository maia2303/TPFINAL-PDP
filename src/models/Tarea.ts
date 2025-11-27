export type Estado = "pendiente" | "en curso" | "terminada" | "cancelada"; //ver si lo podemos meter dentro de la clase Tarea y donde o como.
export type Dificultad = 1 | 2 | 3;

//Objeto de la tarea

export interface Tarea {
    readonly id: number,
    readonly titulo: string;
    readonly descripcion: string;
    readonly estado: Estado;
    readonly dificultad: Dificultad;
    readonly vencimiento: string | null;
    readonly creacion: string; //en los datos la creacion y ultima edicion se declaran como string y despues pasan a nueva fecha
    readonly ultimaEdicion: string;
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