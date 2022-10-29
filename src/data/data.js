const { Collection } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

/*
//crear una base de datos con la primera conexion
MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("base2");
    dbo.createCollection("productos", function(err, resultado){
        if (err)throw err;
        console.log("base de datos creada con exito")
        db.close();
    }); 
});
*/

//como trabajamos con documentos bson para almacenar registros
MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("concesionario");
    var documento1 = {id:1, marca: "Toyota", precio:50000000};
    dbo.collection("vehiculos").insertOne(documento1, function(err, resp){
        if(err)throw err;
        console.log("Documento insertado con exito");
        db.close();
    });
});