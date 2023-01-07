const colors = require("colors");

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("======================".green);
    console.log("Seleccione una opcion".green);
    console.log("======================".green);

    console.log(`${"1.".green} Crear tareas.`);
    console.log(`${"2.".green} listar tareas.`);
    console.log(`${"3.".green} Listar tareas completadas.`);
    console.log(`${"4.".green} Listar tareas pendientes.`);
    console.log(`${"5.".green} Completar tareas`);
    console.log(`${"6.".green} Borrar tareas.`);
    console.log(`${"7.".green} Salir \n`);

    //Creando interfaz:
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opción: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${"ENTER".bgGreen}\n`, (opt) => {
      readline.close()
      resolve();
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
