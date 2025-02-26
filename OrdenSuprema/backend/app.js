import express from 'express';
import {corsMiddleware} from './middlewares/cors.js'
import { sequelize } from './database/sequelize.js';


const app = express();

app.get('/', (req, res) =>{
    res.send('holi')
})


app.use(corsMiddleware());

// Puertos definidos para correr el servidor de express
const port = process.env.PORT || 3000

// Declaramos en que puerto estara escuchando nuestra app
async function main() {
    try{
        await sequelize.sync({force: true, alter:true});
        app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`);
        })  
    } catch (error){
        console.log("Error db");
    }
    
}

main()
