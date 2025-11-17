import * as readline from 'readline';
import {Tarea} from '.models/Tarea';


function menuPrincipal(){
    console.log("Menu Principal");
    console.log("[1] Ver todas las Tareas");
    console.log("[2] Buscar una tarea");
    console.log("[3] Agregar una tarea");
    console.log("[0] Salir");
}


function main {
    let salir = false;
        while(!salir){

                menuPrincipal();

                const input = console.log("\nElige una opcion: ");
                const opcion = parseInt(input);
                

            switch(opcion){
                case 1: Tarea();
                    break;

                case 2:
                    await buscarTarea();
                    break;

                case 3:
                    await agregarTarea();
                    break;

                case 0:
                    salir = true;
                    console.log("Saliendo...");
                    break;

                default: console.log("Opcion invalida, Intenta nuevamente")
                    break;


            }
        }

} 

main();