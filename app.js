const colors = require("colors");

const { showMenu, pause } = require("./helpers/message");

const main = async () => {
  let opt = "";

  do {
    opt = await showMenu();
    console.log({opt})
    if(opt !== '7') await pause()
  } while (opt !== '7');
};

main();
