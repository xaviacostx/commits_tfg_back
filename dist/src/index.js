"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
app.use(cors_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
var body_parser_1 = __importDefault(require("body-parser"));
var jsonParser = body_parser_1.default.json();
var db = __importStar(require("./db-connection"));
app.get('/productos', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petici\u00F3n recibida al endpoint GET /productos.");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "SELECT * FROM productos ";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                if (db_response.rows.length > 0) {
                    console.log("Productos encontrados: " + JSON.stringify(db_response.rows));
                    res.json(db_response.rows);
                }
                else {
                    console.log("Productos no encontrados.");
                    res.json("No se encontraron productos");
                }
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.error(err_1);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/user/:email', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petici\u00F3n recibida al endpoint GET /user/:email.");
                console.log("Par\u00E1metro recibido por URL: " + req.params.email);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "SELECT * FROM users WHERE id='" + req.params.email + "'";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                if (db_response.rows.length > 0) {
                    console.log("Usuario encontrado: " + db_response.rows[0].id);
                    res.json(db_response.rows[0]);
                }
                else {
                    console.log("Usuario no encontrado.");
                    res.json("User not found");
                }
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.error(err_2);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/user', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, values, db_response, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petici\u00F3n recibida al endpoint POST /user. \n        Body: " + JSON.stringify(req.body));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "INSERT INTO users (id, name, picture) VALUES ('" + req.body.id + "','" + req.body.name + "','" + req.body.picture + "');";
                values = [req.body.id, req.body.name, req.body.picture];
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log(db_response);
                if (db_response.rowCount === 1) {
                    res.json({ message: "El registro ha sido creado correctamente." });
                }
                else {
                    res.json({ message: "El registro NO ha sido creado." });
                }
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                console.error("❌ Error en la inserción:", err_3);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Obtener consumo del día por usuario
app.get('/total_consumido_dia/:id_usuario/:fecha', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, values, db_response, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("📥 Petición recibida en GET /total_consumido_dia/:id_usuario/:fecha");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "SELECT * FROM total_consumido WHERE id_usuario = '" + req.params.id_usuario + "' AND fecha = '" + req.params.fecha + "'";
                values = [req.params.id_usuario, req.params.fecha];
                return [4 /*yield*/, db.query(query, values)];
            case 2:
                db_response = _a.sent();
                console.log("🔍 Datos de consumo del día:", db_response.rows);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                console.error("❌ Error al obtener datos de consumo diario:", err_4);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Obtener consumo del mes por usuario
app.get('/total_consumido_mes/:id_usuario/:fecha', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, values, db_response, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("📥 Petición recibida en GET /total_consumido_mes/:id_usuario/:fecha");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "SELECT * FROM total_consumido WHERE id_usuario = '" + req.params.id_usuario + "' AND fecha LIKE '" + req.params.fecha + "' || '%'";
                values = [req.params.id_usuario, req.params.fecha];
                return [4 /*yield*/, db.query(query, values)];
            case 2:
                db_response = _a.sent();
                console.log("🔍 Datos de consumo del mes:", db_response.rows);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                console.error("❌ Error al obtener datos de consumo mensual:", err_5);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Obtener consumo del año por usuario
app.get('/total_consumido_ano/:id_usuario/:fecha', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, values, db_response, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("📥 Petición recibida en GET /total_consumido_ano/:id_usuario/:fecha");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "SELECT * FROM total_consumido WHERE id_usuario = '" + req.params.id_usuario + "' AND fecha LIKE '" + req.params.fecha + "' || '%'";
                values = [req.params.id_usuario, req.params.fecha];
                return [4 /*yield*/, db.query(query, values)];
            case 2:
                db_response = _a.sent();
                console.log("🔍 Datos de consumo del año:", db_response.rows);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_6 = _a.sent();
                console.error("❌ Error al obtener datos de consumo anual:", err_6);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// app.get('/user/:email', async (req, res) => {
//     console.log(`Petición recibida al endpoint GET /user/:email.`);
//     console.log(`Parámetro recibido por URL: ${req.params.email}`);
//     try{
//         let query = `SELECT * FROM usuarios WHERE id='${req.params.email}'`;
//         let db_response = await db.query(query);
//         if(db_response.rows.length > 0){
//             console.log(`Usuario encontrado: ${db_response.rows[0].id}`);
//             res.json(db_response.rows[0]);   
//         } else{
//             console.log(`Usuario no encontrado.`)
//             res.json(`User not found`);
//         }
//     } catch (err){
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// });
// app.post('/anadir_producto', jsonParser, async (req, res) => {
//     console.log(`Petición recibida al endpoint POST /anadir_producto. 
//         Body: ${JSON.stringify(req.body)}`);
//     try {
//         let query = `INSERT INTO total_consumido 
//         VALUES ('${req.body.id}', '${req.body.nombre}');`; 
//         let db_response = await db.query(query);
//         console.log(db_response);
//         if(db_response.rowCount == 1){
//             res.json(`El registro ha sido creado correctamente.`);
//         } else{
//             res.json(`El registro NO ha sido creado.`);
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// });
// app.post('/total_consumido', (req, res) => {
//     const nuevoProducto = req.body;
//     console.log('Datos recibidos:', nuevoProducto);
//     // Aquí puedes guardar el producto en la base de datos.
//     res.status(201).json({ message: 'Producto añadido con éxito', producto: nuevoProducto });
// });
app.get('/prueba_total_consumido', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petici\u00F3n recibida al endpoint GET /prueba_total_consumido.");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "SELECT * FROM total_consumido ";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                if (db_response.rows.length > 0) {
                    console.log("Productos encontrados: " + JSON.stringify(db_response.rows));
                    res.json(db_response.rows);
                }
                else {
                    console.log("Productos no encontrados.");
                    res.json("No se encontraron productos");
                }
                return [3 /*break*/, 4];
            case 3:
                err_7 = _a.sent();
                console.error(err_7);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/total_consumido', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petici\u00F3n recibida al endpoint POST /total_consumido. \n        Body:" + JSON.stringify(req.body));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "INSERT INTO total_consumido (id_usuario, id_producto, nombre, cantidad_consumida, kcal, grasas, hidratos_de_carbono, proteina, fecha)\n        VALUES ('" + req.body.id_usuario + "', '" + req.body.id_producto + "','" + req.body.nombre + "', '" + req.body.cantidad_consumida + "',\n        '" + req.body.kcal + "','" + req.body.grasas + "','" + req.body.hidratos_de_carbono + "','" + req.body.proteina + "','" + req.body.fecha + "');";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log(query);
                if (db_response.rowCount == 1) {
                    res.json("Todo ha salido bine");
                }
                else {
                    res.json("el resgistro ha salido mal");
                }
                console.log(db_response);
                return [3 /*break*/, 4];
            case 3:
                err_8 = _a.sent();
                console.error(err_8);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/productos/:id_usuario', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, values, db_response, err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("📥 Petición recibida en GET /productos/:id_usuario");
                console.log("ID de usuario recibido:", req.params.id_usuario);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "SELECT * FROM total_consumido WHERE id_usuario = '" + req.params.id_usuario + "'";
                values = [req.params.id_usuario];
                return [4 /*yield*/, db.query(query, values)];
            case 2:
                db_response = _a.sent();
                console.log("🔍 Productos encontrados:", db_response.rows);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_9 = _a.sent();
                console.error("❌ Error al obtener productos:", err_9);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/ranking', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("📥 Petición recibida en GET /ranking");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "SELECT nombre, SUM(cantidad_consumida) AS total_consumido\n    FROM total_consumido\n    GROUP BY nombre\n    ORDER BY total_consumido DESC\n    LIMIT 5;";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log("🔍 Productos encontrados:", db_response.rows);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_10 = _a.sent();
                console.error("❌ Error al obtener productos:", err_10);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/ranking_veces', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("📥 Petición recibida en GET /ranking");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "\n            SELECT nombre, \n                SUM(cantidad_consumida) AS total_consumido, \n                COUNT(*) AS veces_consumido\n            FROM total_consumido\n            GROUP BY nombre\n            ORDER BY total_consumido DESC, veces_consumido DESC\n            LIMIT 5;\n        ";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log("🔹 Productos más consumidos:", db_response.rows);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_11 = _a.sent();
                console.error("❌ Error al obtener el ranking de productos:", err_11);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/*app.post('/perfil', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /perfil.
        Body:${JSON.stringify(req.body)}`);
    try {
        
        let query = `INSERT INTO alumnos (name, email, img)
        VALUES ('${req.body.name}', '${req.body.email}', '${req.body.img}');`;
        console.log(query);
        let db_response = await db.query(query);
        console.log(db_response);
        
        res.json(`El registro del señor/a ${req.body.nombre} ${req.body.apellidos}, con domicilio ${req.body.direccion},
            y color de pelo ${req.body.color_pelo} ha sido creado.`);

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/suma/:valor1/:valor2', (req, res) => {
    let resultado: number = 0;
    resultado = Number(req.params.valor1) + Number(req.params.valor2);
    console.log("resultado: " + resultado);
    res.send(String(resultado));
});*/
/*app.post('/futbolistas', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /futbolistas.
        Body:${JSON.stringify(req.body)}`);
    try {
        let query = `INSERT INTO alumnos (name, email, img)
        VALUES ('${req.body.name}', '${req.body.email}', '${req.body.img}');`;
        console.log(query);
        let db_response = await db.query(query);
        console.log(db_response);
        res.json("Registro guardado correctamente.");
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});*/
var port = process.env.PORT || 3000;
app.listen(port, function () {
    return console.log("App listening on PORT " + port + ".\n\n    ENDPOINTS:\n    - PRUEBAAAA\n    - GET /user/:email\n    - POST /user\n    - GET /productos\n    - POST /anadir_producto\n    - POST /total_consumido\n\n    ");
});
