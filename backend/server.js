//importing the express file
const express = require("express");

//start express application
const app = express();

//software ports/virtual ports: addresses pluged in together
//creating port for our backend
//8080 is a free port which we can use
const PORT = 8080;

// middlewares: executes in the  iddle
// cross origin error
//CORS error

//aotumatically convers string to object
app.use(express.json());
app.use(function (req, res, next) {
  //*: any origin
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//get request function
//app.get(<path>)
//callback function handles the request
//req: request
//res: response
app.get("/", (req, res) => {
  //response is shown on the site
  res.status(200).send("hello!!");
});

app.get("/api/info", (req, res) => {
  res.status(200).send("info");
});

//id: is an information
//extraction information from the url
//app.get("/api/:<variable>",....)
app.get("/api/:id", (req, res) => {
  //params: parameters

  //object destructing
  //id variable store the value of req.params.id
  //const { id } = req.params;

  if (req.params.id == "muskan") {
    res.status(200).send("Muskan Bajaj");
  } else {
    res.status(200).send("NOT YOU");
  }
  //res.status(200).send(params.id);
});

//post request
app.post("/post", (req, res) => {
  res.send("post api");
});

//basic server creating
//when the port is created successfully, then the function defined runs
app.listen(PORT, () => {
  console.log("Server is on");
});
