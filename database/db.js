var __path = process.cwd(),
      monk = require('monk'),
     { color } = require(__path + '/lib/color.js')

// Connection URL
var url = 'https://zahirr-web.herokuapp.com';
try {
if(url == 'https://zahirr-web.herokuapp.com') throw console.log(color('Verifique la configuración de la base de datos','red'));
} catch (e) {
	return;
	}
var db = monk(url);

db.then(() => {
  console.log(color('Conectado correctamente al servidor, Ianvanh','green'))
})
.catch ((e) => {
	console.log(color('Error : '+ e +'\n\nNo se pudo conectar a la base de datos, \ncverifique la configuración de la base de datos si la URL de conexión es correcta.','red'))
	})


module.exports = db
