fs = require('fs');

fs.readFile('comida.txt', 'utf8',(err, data) => {
  if (err) throw err;
	console.log("Fichero leido!!");
  console.log(data.split('\n').join("  mola\n"));
});
