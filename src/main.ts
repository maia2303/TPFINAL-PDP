<<<<<<< HEAD

import { TareasService } from "./

const gestor = new TareasService();// crecar una instancia del servicio 

async function menu(): Promise<void> {
  let salir = false;

  while (!salir) {
    const { opcion } = await inquirer.prompt([
      {
        type: "list",
        name: "opcion",
        message: "📌 Menú Principal",
        choices: [
          { name: "1) Ver mis tareas", value: 1 },
          { name: "2) Buscar una tarea", value: 2 },
          { name: "3) Agregar una tarea", value: 3 },
          { name: "0) Salir", value: 0 },
        ],
      },
    ]);

    switch (opcion) { //ejecuta lo q el usario pida
      case 1:
        verTareas();
        break;

      case 2:
        await buscarTarea();
        break;

      case 3:
        await agregarTarea();
        break;

      case 0:
        salir = true;
        console.log("\n👋 ¡Hasta luego!");
        break;
    }
  }
}

function verTareas(): void { //funcion ver tareas
  const tareas = gestor.obtenerTareas();
  console.log("\n📋 Tus tareas:");
  console.table(tareas);
}

async function buscarTarea(): Promise<void> { //buscar tareas
  const { criterio } = await inquirer.prompt([
    {
      type: "input",
      name: "criterio",
      message: "🔍 Escribe el ID o el título a buscar:",
    },
  ]);

  const tareas = gestor.obtenerTareas();
  const resultados = tareas.filter((t) =>
    t.id.includes(criterio) ||
    t.titulo.toLowerCase().includes(criterio.toLowerCase())
  );

  console.log("\n🔎 Resultados:");
  console.table(resultados);
}

async function agregarTarea(): Promise<void> {
  const datos = await inquirer.prompt([
    {
      type: "input",
      name: "titulo",
      message: "Título de la tarea:",
    },
    {
      type: "input",
      name: "descripcion",
      message: "Descripción (opcional):",
    },
    {
      type: "list",
      name: "dificultad",
      message: "Dificultad:",
      choices: ["baja", "media", "alta"],
    },
    {
      type: "input",
      name: "fechaVencimiento",
      message: "Fecha de vencimiento (YYYY-MM-DD):",
    },
  ]);

  gestor.crearTarea(
    datos.titulo,
    datos.dificultad,
    datos.descripcion,
    datos.fechaVencimiento
  );

  console.log("\n✅ Tarea agregada exitosamente.\n");
}

menu();
=======
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
>>>>>>> feaacf76c8a172e62c8e23b92f82069cda9c4c46
