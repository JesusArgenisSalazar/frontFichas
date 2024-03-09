const express = require('express');
const app = express();
const path = require('path');



app.use(express.static(path.join(__dirname, 'public')));



// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});



// Puerto en el que se ejecutará el servidor
const puerto = 3000;

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`Servidor iniciado en http://localhost:${puerto}`);
});