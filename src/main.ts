
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
