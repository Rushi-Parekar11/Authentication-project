const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
//const ProductRouter = require('./Routes/ProductRouter');
const mongoose = require("mongoose");


require("dotenv").config();
const PORT = process.env.PORT || 8000;

//////////// DATABASE CONNECTION ////////////////
mongoose.connect(process.env.DB_URL)
.then(
    console.log("Conntection is establised !")
)
.catch((err)=>{
    console.log("Connetction error :",err);
})


app.get('/ping', (req, res) => {
    res.send('PONG');
});
  
app.use(bodyParser.json());
app.use(cors());
app.use('/authh', AuthRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})