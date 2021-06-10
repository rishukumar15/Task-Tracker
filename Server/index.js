const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const mysql = require("mysql")

/*
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

*/


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "student",
})


app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use(express.json());


app.get("/api/get", (req,res) => {

    const sqlSelect = "Select * From task_tracker;";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })

})

app.delete("/api/delete/:taskId", (req, res)=> {

    const tid = req.params.taskId;
    const sqlDelete = "Delete From task_tracker Where id =?";
    db.query(sqlDelete, tid, (err, result) => {
        if (err) console.log(err)
    });
});


app.put("/api/update", (req, res)=> {

    const id = req.body.id;
    const task = req.body.text;
    const sqlUpdate = "Update task_tracker Set Task =? Where id =?";
    db.query(sqlUpdate, [task, id], (err, result) => {
        if (err) console.log(err)
    });
});


app.post("/api/insert", (req, res) => {

    const task = req.body.text;
    const day = req.body.day;
    const reminder = req.body.reminder ? 'Y' : 'N';
    //const rem = req.body.reminder;
    //let reminder = '';

    //rem ? reminder = 'Y' : reminder = 'N';

    const sqlInsert = "INSERT INTO task_tracker (Task, Day, Reminder) VALUES (?,?,?);";
    db.query(sqlInsert,[task, day, reminder], (err, result) => {
        res.send("Value Inserted");
        console.log(err);
    })
    
});


app.listen(3001, () => {
    console.log("runnning on port 3001")
});