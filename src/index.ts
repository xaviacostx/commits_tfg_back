import express from "express";
import cors from 'cors';
const app = express();
app.use(cors());
app.use(cors());
app.use(express.json());
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();

import * as db from './db-connection';

app.get('/productos', async (req, res) => {
    console.log(`Petición recibida al endpoint GET /productos.`);

    try{
        let query = `SELECT * FROM productos `;
        let db_response = await db.query(query);

        if(db_response.rows.length > 0){
            console.log(`Productos encontrados: ${JSON.stringify(db_response.rows)}`);
            res.json(db_response.rows);   
        } else{
            console.log(`Productos no encontrados.`)
            res.json(`No se encontraron productos`);
        }

    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }

});
app.get('/user/:email', async (req, res) => {
    console.log(`Petición recibida al endpoint GET /user/:email.`);
    console.log(`Parámetro recibido por URL: ${req.params.email}`);

    try{
         let query = `SELECT * FROM users WHERE id='${req.params.email}'`;
        let db_response = await db.query(query);

        if(db_response.rows.length > 0){
            console.log(`Usuario encontrado: ${db_response.rows[0].id}`);
            res.json(db_response.rows[0]);   
        } else{
            console.log(`Usuario no encontrado.`)
            res.json(`User not found`);
        }

    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/user', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /user. 
        Body: ${JSON.stringify(req.body)}`);

    try {
        let query = `INSERT INTO users (id, name, picture) VALUES ('${req.body.id}','${req.body.name}','${req.body.picture}');`;
        let values = [req.body.id, req.body.name, req.body.picture];

        let db_response = await db.query(query);
        console.log(db_response);

        if (db_response.rowCount === 1) {
            res.json({ message: "El registro ha sido creado correctamente." });
        } else {
            res.json({ message: "El registro NO ha sido creado." });
        }
    } catch (err) {
        console.error(" Error en la inserción:", err);
        res.status(500).send('Internal Server Error');
    }
});
// Obtener consumo del día por usuario
app.get('/total_consumido_dia/:id_usuario/:fecha', async (req, res) => {
    console.log(" Petición recibida en GET /total_consumido_dia/:id_usuario/:fecha");
    try {
        let query = `SELECT * FROM total_consumido WHERE id_usuario = '${req.params.id_usuario}' AND fecha = '${req.params.fecha}'`;
        let values = [req.params.id_usuario, req.params.fecha];

        let db_response = await db.query(query);
        console.log(" Datos de consumo del día:", db_response.rows);
        res.json(db_response.rows);
    } catch (err) {
        console.error(" Error al obtener datos de consumo diario:", err);
        res.status(500).send('Internal Server Error');
    }
});

// Obtener consumo del mes por usuario
app.get('/total_consumido_mes/:id_usuario/:fecha', async (req, res) => {
    console.log(" Petición recibida en GET /total_consumido_mes/:id_usuario/:fecha");
    try {
        let query = `SELECT * FROM total_consumido WHERE id_usuario = '${req.params.id_usuario}' AND fecha LIKE '${req.params.fecha}' || '%'`;
        let values = [req.params.id_usuario, req.params.fecha];

        let db_response = await db.query(query);
        console.log(" Datos de consumo del mes:", db_response.rows);
        res.json(db_response.rows);
    } catch (err) {
        console.error(" Error al obtener datos de consumo mensual:", err);
        res.status(500).send('Internal Server Error');
    }
});

// Obtener consumo del año por usuario
app.get('/total_consumido_ano/:id_usuario/:fecha', async (req, res) => {
    console.log(" Petición recibida en GET /total_consumido_ano/:id_usuario/:fecha");
    try {
        let query = `SELECT * FROM total_consumido WHERE id_usuario = '${req.params.id_usuario}' AND fecha LIKE '${req.params.fecha}' || '%'`;
        let values = [req.params.id_usuario, req.params.fecha];

        let db_response = await db.query(query);
        console.log(" Datos de consumo del año:", db_response.rows);
        res.json(db_response.rows);
    } catch (err) {
        console.error(" Error al obtener datos de consumo anual:", err);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/prueba_total_consumido', async (req, res) => {
    console.log(`Petición recibida al endpoint GET /prueba_total_consumido.`);

    try{
        let query = `SELECT * FROM total_consumido `;
        let db_response = await db.query(query);

        if(db_response.rows.length > 0){
            console.log(`Productos encontrados: ${JSON.stringify(db_response.rows)}`);
            res.json(db_response.rows);   
        } else{
            console.log(`Productos no encontrados.`)
            res.json(`No se encontraron productos`);
        }

    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }

});

app.post('/total_consumido', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /total_consumido. 
        Body:${JSON.stringify(req.body)}`);
    try {
        let query = `INSERT INTO total_consumido (id_usuario, id_producto, nombre, cantidad_consumida, kcal, grasas, hidratos_de_carbono, proteina, fecha)
        VALUES ('${req.body.id_usuario}', '${req.body.id_producto}','${req.body.nombre}', '${req.body.cantidad_consumida}',
        '${req.body.kcal}','${req.body.grasas}','${req.body.hidratos_de_carbono}','${req.body.proteina}','${req.body.fecha}');`;

        let db_response = await db.query(query);

        console.log(query);

        if(db_response.rowCount == 1){
            res.json("Todo ha salido bine")
        }else {
            res.json("el resgistro ha salido mal")
        }

        console.log(db_response);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/productos/:id_usuario', async (req, res) => {
    console.log(" Petición recibida en GET /productos/:id_usuario");
    console.log("ID de usuario recibido:", req.params.id_usuario);

    try {
        let query = `SELECT * FROM total_consumido WHERE id_usuario = '${req.params.id_usuario}'`;
        let values = [req.params.id_usuario];

        let db_response = await db.query(query);
        console.log(" Productos encontrados:", db_response.rows);

        res.json(db_response.rows);
    } catch (err) {
        console.error(" Error al obtener productos:", err);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/ranking', async (req, res) => {
    console.log(" Petición recibida en GET /ranking");

    try {
        let query = `SELECT nombre, SUM(cantidad_consumida) AS total_consumido
    FROM total_consumido
    GROUP BY nombre
    ORDER BY total_consumido DESC
    LIMIT 5;`;

        let db_response = await db.query(query);
        console.log(" Productos encontrados:", db_response.rows);

        res.json(db_response.rows);
    } catch (err) {
        console.error(" Error al obtener productos:", err);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/ranking_veces', async (req, res) => {
    console.log(" Petición recibida en GET /ranking_veces");

    try {
        let query = `
            SELECT nombre, 
                SUM(cantidad_consumida) AS total_consumido, 
                COUNT(*) AS veces_consumido
            FROM total_consumido
            GROUP BY nombre
            ORDER BY veces_consumido DESC, total_consumido DESC
            LIMIT 5;
        `;

        let db_response = await db.query(query);
        console.log(" Productos más consumidos:", db_response.rows);
        
        res.json(db_response.rows);
    } catch (err) {
        console.error(" Error al obtener el ranking de productos:", err);
        res.status(500).send('Internal Server Error');
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => 
    console.log(`App listening on PORT ${port}.

    ENDPOINTS:
    - GET /productos
    - GET /user/:email
    - POST /user
    - GET /total_consumido_dia/:id_usuario/:fecha
    - GET /total_consumido_mes/:id_usuario/:fecha
    - GET /total_consumido_ano/:id_usuario/:fecha
    - GET /prueba_total_consumido
    - POST /total_consumido
    - GET /productos/:id_usuario
    - GET /ranking
    - GET /ranking_veces
    `));