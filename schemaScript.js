db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "usuarios",
      required: ["_id", "dni", "nombre", "email", "password", "telefono", "origen"],
      properties: {
        "_id": { bsonType: "objectId" },
        "dni": { bsonType: "int" },
        "nombre": { bsonType: "string" },
        "email": { bsonType: "string" },
        "password": { bsonType: "any" },
        "telefono": { bsonType: "int" },
        "origen": { bsonType: "any" },
      },
    },
  },
});

db.createCollection("unidadesTransporte", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "unidadesTransporte",
      required: ["_id", "placa", "modelo", "marca", "color", "ruta"],
      properties: {
        "_id": { bsonType: "objectId" },
        "dni": { bsonType: "int" },
        "placa": { bsonType: "string" },
        "modelo": { bsonType: "string" },
        "marca": { bsonType: "string" },
        "color": { bsonType: "string" },
        "ruta": { bsonType: "any" },
      },
    },
  },
});

db.createCollection("viajes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "viajes",
      required: ["_id", "fechaViaje", "tarifa", "placa", "horaViaje", "nombreRuta", "dni"],
      properties: {
        "_id": { bsonType: "objectId" },
        "fechaViaje": { bsonType: "date" },
        "tarifa": { bsonType: "decimal" },
        "placa": { bsonType: "string" },
        "horaViaje": { bsonType: "string" },
        "nombreRuta": { bsonType: "string" },
        "dni": { bsonType: "int" },
        "estadoViaje": { bsonType: "string" },
      },
    },
  },
});

db.createCollection("rutas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "rutas",
      required: ["_id", "nombreRuta", "origen", "destino"],
      properties: {
        "_id": { bsonType: "objectId" },
        "nombreRuta": { bsonType: "string" },
        "origen": { bsonType: "string" },
        "destino": { bsonType: "string" },
      },
    },
  },
});

db.createCollection("transportistas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "transportistas",
      required: ["_id", "dni", "placa"],
      properties: {
        "_id": { bsonType: "objectId" },
        "dni": { bsonType: "int" },
        "placa": { bsonType: "string" },
      },
    },
  },
});