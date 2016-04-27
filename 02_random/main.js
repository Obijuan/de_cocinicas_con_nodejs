var stdin = process.openStdin();

function ask() {
  console.log("Escribe (Enter fin): ");
}

ask();

function answer(d) {
  console.log("Has escrito: ---" + d.toString().trim() + '---');
  ask()
}

stdin.addListener("data", answer);
