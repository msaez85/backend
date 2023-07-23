const express = require('express'); //importo express dentro de una constante, equivalente al import de react
const cors = require('cors');
const body = require('body-parser');
const bodyParser = require('body-parser');

class Server {
    constructor() {
        this.app = express();
        this.app.port = process.env.PORT;
        this.usuariosPath = "/api";
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json())
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(8080, () => {
            console.log('server online', this.app.port);
            console.log('hola backend server started en el 8080');
       //   console.log(process.env);
        })
    }
}

module.exports = Server;