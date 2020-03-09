// modulos a importar
const express = require('express');
const app = express();
//Setting
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(express.json());
//Routes
app.use(require('./routes/employees'));
//Escuchando el Servidor


app.listen(app.get('port'),()=>{
    console.log('Escuchando al Servidor', app.get('port'));
});