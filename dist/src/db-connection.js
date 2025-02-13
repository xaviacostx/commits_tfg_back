"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
var pg_1 = require("pg");
// const pool = new Pool({
//   user: 'postgres',
//   password: '1234',
//   host: 'localhost',
//   port: 5432, // default Postgres port
//   database: 'BD_proyecto_final'
// });
var connectionString = 'postgresql://proyecto_final_24_25_0fcc_user:yU0164YPim1bSnIlPoLoo0bLgPwmQ1Rt@dpg-cum65123esus73bflhm0-a.oregon-postgres.render.com/proyecto_final_24_25_0fcc';
var pool = new pg_1.Pool({
    connectionString: connectionString,
});
function query(text) {
    return pool.query(text);
}
exports.query = query;
;
