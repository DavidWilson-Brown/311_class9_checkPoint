// Bring in the Express library for use
let express = require('express');

// Use the Express library in the router file
let router = new express.Router();

// Direct the below APIs to the controllers file for use
let controller = require("./controllers");

// GET an item by its ID
router.get("/311_class9_checkpoint/:id", controller.getItem);

// DELETE an item by its ID
router.delete("/311_class9_checkpoint/:id", controller.deleteItem);

// LIST all items in the todo list
router.get("/311_class9_checkpoint", controller.getItems);


// UPDATE an item by its ID
router.put("/311_class9_checkpoint/:id", controller.updateItem);


// INSERT a new item to the todo list
router.post("/311_class9_checkpoint", controller.addItem);

// Make these routes available for use
module.exports = router;