const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const orderRouter = require('./routes/orders');
const path = require('path');

//Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

app.use(express.static('views'));
app.use(express.static('img'));

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('img', path.join(__dirname, 'img'));



//la carpeta "public" para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'views')));

app.use(express.urlencoded({ extended: true }));
app.use('/orders', orderRouter);





// Ruta para renderizar el archivo EJS
app.get('/', (req, res) => {
    res.render('index');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});