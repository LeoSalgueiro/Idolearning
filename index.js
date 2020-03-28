
const express = require('express'),
      bodyParser = require('body-parser'),
      jwt = require('jsonwebtoken'),
      config = require('./configs/config'),
      app = express();

      const proteccion = express.Router(); 


app.set('llave', config.llave);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log('Servidor iniciado en el puerto 3000') 
});


//proteccion intermedia
proteccion.use((req, res, next) => {
    const token = req.headers['access-token'];
 
    if (token) {
      jwt.verify(token, app.get('llave'), (err, decoded) => {      
        if (err) {
            res.status(401).send('Token no Valido')
        } 
        else {
            req.decoded = decoded;   
            next();
        }
      });
    } else {
        
      res.status(500).send({ 
            Error:' No ha proveído el token.' 
      });
    }
 });


app.post('/login', (req, res) => {
    const payload = {
        check: true,
        username: req.body.username
    };
    const token = jwt.sign(payload, app.get('llave'), {
        expiresIn: 1440
    });
    res.json({
        mensaje: 'Autenticación correcta',
        token: token
    });
})

app.get('/verify', proteccion, (req, res) => {
    //si pasa el intermediario (proteccion) , da la respuesta con un status 200 y el mensaje "Verificado"
    res.status(200).send("Verificado");
   });



