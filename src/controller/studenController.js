import db from '../../config/db.js';

class studentController{
    constructor(){

    }
     searchAll(req, res) {
        res.json({msg:'consulta estudiantes'});
     }

     searchId(req, res){
        res.json({msg:'consulta estudiantes'});
     }
      
     add(req, res){
        try {
       
            db.query("")
        } catch (error) {
           res.status(500).send(error);  
        }
     }

     update(req, res){
        res.json({msg:'consulta estudiantes'});
     }

     deleteStudent(req, res){
        res.json({msg:'consulta estudiantes'});
     }

    }
 

export default new studentController();