console.log("Probando ejemplo hola mundo 1");

function test1() {
  console.log("Function test1")
}

function test2() {
  console.log("---> Test 2");
}

function test3() {
  process.stdout.write('.')
}
setInterval(test1, 1000);
setInterval(test2, 2000);
setInterval(test3, 100);
setInterval(
  function() {
    process.stdout.write('#');
  },
  200);

setInterval( function() { console.log("hola");}, 100);

// setInterval(function() {
//   process.stdout.write("#")
// }, 100);

// function mensaje() {
//   console.log("hola ");
// }
// setInterval(mensaje, 500);
