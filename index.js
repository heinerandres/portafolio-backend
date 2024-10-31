const express = require('express');

const app = express();
try{
    app.use(express.static('public'));


    app.use('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });

    app.use('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });


    app.listen( 8080, () => {
        console.log("Servidor listo en el puerto 8080");
    });
}
catch(error){
    console.log( error );
    throw new Error ( 'Error a la hora de inicializar la BD' );
}

