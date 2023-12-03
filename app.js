const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = +process.env.PORT || 5555;
require("dotenv").config();
const { log } = require("console");


//middleware riceve in input i dati e nel output json
app.use(express.json());




//avvio app
app.listen(port, () => {
  log(`App avviata su http://localhots:${port}`);
});
