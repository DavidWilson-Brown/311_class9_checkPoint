// Bring in the database file for use
let db = require("./db");


// GET all the items in the database
let getItems = function(req, res) {

    // 1. issue the query to the database
    // 2. if the database responds with an error, 
    // return 500 in the response
    // 3. if the database responds with the result,
    // return the results in the response

    // create the sql statement to use in the db query
    let sql = "select id, description, done from todos";

    db.query(sql, [], function(error, rows){
        if(error) {
            console.log("Failed to get todo items", error);
            res.sendStatus(500);
        } else {
            res.json(rows);
        }
    })
}

// GET a single item by its ID
let getItem = function(req, res) {

    // get the path parameter that tells us what ID we are looking for
    let id = req.params.id;

    // use the sql statement and a db query to get an item by its ID
    let sql = "select id, description, done from todos where id = ?";

    // use a db query to get the single item from the database
    // print an error message and the error status OR
    // print a success message and return the row of the item
    db.query(sql, [], function(error, rows){
        if(error) {
            console.log("Failed to get the todo item", error);
            res.sendStatus(500);
        } else {
            console.log("Item by ID is successful")
            res.json(rows);
        }
    })
}


// POST or add an item to the todo list
let addItem = function(req, res){
    console.log("addItem", req.body);
    // 1. Get the body of the request to read in the description
    let input = req.body;

    // 2. add a new record with the description
    let sql = "insert into todos(description, done) values (?, ?);"
    let params = [];
    params.push(input.description);
    params.push(false);

    // create a db query to add a new task and it's description to the list
    db.query(sql, params, function(error, rows){
        // if the database responds with an error, return a 500 on the response
        if(error) {
            console.log("Failed to add item ", error);
            res.sendStatus(500);
        // if the database responds without an error, return the result on the response
        } else {
            console.log("Added items successfully")
            res.sendStatus(202);
        }
    })
}


// PUT or update an item on the list by using its ID
let updateItem = function(req, res) {
    console.log("updateItem", req.params.body);
    // get the path parameter that tells us what ID we are working on
    let id = req.params.id;


    // get the body
    let input = req.body;
    let newDescription = input.description;
    let newDone = input.done;

    // change the description in the database
    // using a db.query()
    let sql = "update todos set done = ?, description = ? where id = ?";
    let params = [
        newDone,
        newDescription,
        id
    ];

    // use a db query to update a single item from the database
    // print an error message and the error status OR
    // print a success message and return a success status of 202

    db.query(sql, params, function(error, rows) {
        if(error) {
            console.log("Failed to update item: ", error);
            res.sendStatus(500);
            } else {
            console.log("Update successful");
            res.sendStatus(202);
            }
    });
}


let deleteItem = function(req, res) {

    // 1. Delete a single item by its ID
    // 2. issue the query to the database
    // 3. if the database responds with an error, 
    // return 500 in the response
    // 4. if the database responds with the result,
    // return the results in the response
    let sql = "delete from todos, where id = ?";
    let params = [
        id
    ];

    db.query(sql, params, function(error, rows){
        if(error) {
            console.log("Failed to delete the todo item", error);
            res.sendStatus(500);
        } else {
            console.log("Your deleted item by ID is successful")
            res.json(rows);
        }
    })
}


// put the callback functions of the following command in a variable called controller
let controller = {getItems, getItem, addItem, updateItem, deleteItem}

// make the commands available for use
module.exports = controller;
