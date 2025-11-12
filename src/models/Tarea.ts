export type Estado = "pendiente" | "en curso" | "terminada" | "cancelada"; //ver si lo podemos meter dentro de la clase Tarea y donde o como.
export type Dificultad = 1 | 2 | 3;

//Objeto de la tarea
export class Tarea
{   //atributos 
    private _id: number;
    private _titulo: string;
    private _descripcion: string;
    private _estado:Estado;
    private _dificultad: Dificultad;
    private _vencimiento: Date | null; 
    private _creacion: Date;
    private _ultimaEdicion: Date;

    //constructor no van dentro del () los de tipo Date pq son valores que los va a generar la computadora, no son ingresados por el usuario
    constructor(id: number, titulo: string, descripcion: string, dificultad: Dificultad) 
    {
        this._id = id;
        this._titulo = titulo;
        this._descripcion = descripcion;
        this._estado = "pendiente";
        this._dificultad = dificultad;
        this._vencimiento = null;
        this._creacion = new Date();
        this._ultimaEdicion = new Date();
    }

    //getters
    public get id(): number{
        return this._id;
    }
    public get titulo(): string{
        return this._titulo;
    }
    public get descripcion(): string{
        return this._descripcion;
    }
    public get estado(): string{
        return this._estado;
    }
    public get dificultad(): number{
        return this._dificultad;
    }
    public get vencimiento(): Date | null{
        return this._vencimiento;
    }
    public get creacion(): Date{
        return this._creacion;
    }//no hace falta hacer un set de creacion pq es solo de lectura
    public get ultimaEdicion(): Date{
        return this._ultimaEdicion;
    }

    //setters
    public set titulo(nuevoTitulo: string)
    {
        this._titulo = nuevoTitulo;
        this._ultimaEdicion = new Date();
    }
    public set descripcion(nuevaDescripcion: string)
    {
        this._descripcion = nuevaDescripcion;
        this._ultimaEdicion = new Date();//Para que se actualice sola la fecha de edicion
    }
    public set estado(nuevoEstado: Estado)
    {
        this._estado = nuevoEstado;
        this._ultimaEdicion = new Date();
    }
    public set dificultad(nuevaDificultad: Dificultad)
    {
        this._dificultad = nuevaDificultad;
        this._ultimaEdicion = new Date();
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