const express = require("express");

const { talk } = require("./src/funcs");

talk();

const app = express();




const PORT = process.env.PORT || 5001
app.listen(PORT, ()=>console.log(`Server started on ${PORT}...`));
