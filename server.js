const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('Hola Mundo desde el servidor NODE corriendo....');
});


//configurar server básico

app.listen(5000, function() {
    console.log('El servidor NODE esta corriendo correctamente en el puerto 5000');
})