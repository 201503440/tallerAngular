const dbConnection = require('../Keys/dbConnection.js');

module.exports = app =>{
    const connection = dbConnection();
    
    app.post("/employee", (req, res) => {
        connection.query('insert into Empleado SET ?', [req.body],
        (err, result) =>{
            if(result.affectedRows > 0)
            {
                res.send(true);
            }
            else
            {
                console.log(err);
                res.send(false); 
            }            
        });
    });

    app.get("/employee", (req, res) => {
        connection.query('SELECT * FROM Empleado', (err, result) =>{   
             res.json(result);         
        });
    });

    app.put("employee/:codigo", (req, res) => {
        const {codigo} = req.params;
        connection.query('Update empleado SET ? where cod_empleado = ?', [req.body, codigo],(err, result) =>{
            if(result.affectedRows > 0)
            {
                res.send(true);
            }
            else
            {
                console.log(err);
                res.send(false);
            } 
        });
    });

    app.delete("employee/:codigo", (req, res) => {
        const {codigo} = req.params;
        connection.query('delete FROM Empleado where cod_empleado = ?',[codigo] ,(err, result) =>{
            if(result.affectedRows > 0)
            {
                res.send(true);
            }
            else
            {
                console.log(err);
                res.send(false);
            } 
        });
    });
}