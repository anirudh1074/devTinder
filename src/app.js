const express = require("express");


const app = express(); //creating the server

app.get("/", (req, res) => {
    console.log("hello")
    response.status(200).send("Hello from the Sweet Home!")
})//request handler

app.get("/app", (request, response) => {
    response.status(200).send("Hello from the app")
})//request handler
app.get("/:id/app", (request, response) => {
   console.log(request.params.id) 
    response.status(200).send("Hello from the app")
})//request handler
app.get("/test", (req, res) => {
    res.send("Hello from the test")
})//request handler

console.log("reached here!!")
app.listen(7777, () => {
    console.log("Server is listening on port 7777")
});