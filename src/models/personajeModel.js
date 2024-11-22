const db = require("../config/dbConfig");
class Personaje{

    getPersonajes(callback){
        const sql = "select * from personajes";
        db.query(sql, callback)
    }

    getPersonajesById(id,callback){
        const sql = "select * from personajes where id = ?";
        db.query(sql, [id],callback)
    }


}

module.exports = new Personaje()