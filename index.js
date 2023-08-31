// Third party
const express = require("express");
const cors = require("cors");
const helmet=require('helmet');
const compression=require('compression');

// Self made modules
const connectToMongo = require("./db");

connectToMongo();

const port = process.env.PORT || 3000;

const app = express();
//CORS in node. js stands for Cross-Origin Resource Sharing. 
//It is a mechanism by which resources are shared across different servers.
app.use(cors());
app.use(helmet());
app.use(compression());

// json() function is a built-in middleware function in Express.
// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

/*app.get("/", (req, res, next) => {
  res.send("Hello");
});*/

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  
  console.log(`iNotebook backend on local host on port ${port}`);
});
