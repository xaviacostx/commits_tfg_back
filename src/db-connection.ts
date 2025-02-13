import { Pool } from 'pg';

// const pool = new Pool({
//   user: 'postgres',
//   password: '1234',
//   host: 'localhost',
//   port: 5432, // default Postgres port
//   database: 'BD_proyecto_final'
// });

const connectionString = 'postgresql://proyecto_final_24_25_0fcc_user:yU0164YPim1bSnIlPoLoo0bLgPwmQ1Rt@dpg-cum65123esus73bflhm0-a/proyecto_final_24_25_0fcc'

const pool = new Pool({
  connectionString
})
export function query(text: any): any {
    return pool.query(text);
};