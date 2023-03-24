
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors');
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");

//Import Routes
const authRoutes = require("./routes/authRoutes");

//database connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>console.log("DB connected"))
.catch((err)=>console.log(err));

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({
    limit:'5mb',
    extended:true
}));
app.use(cookieParser());
app.use(cors()); //request to the backend

app.use('/',authRoutes);

// Routes Middleware
// app.get('/',(req, res)=>{
//     res.send("Hello from Prasad");
// })


//error-Middleware
app.use(errorHandler);

//port
const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});

