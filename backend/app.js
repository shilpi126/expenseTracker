const express = require("express");
const db = require("./utils/db.connection");
const expenseRoutes = require("./routes/expenseRoute")
const path = require("path");

const app = express();


const cors = require("cors");
app.use(cors());

app.use(express.json());



app.use(express.static(path.join(__dirname,'public')))



app.get("/", (req,res)=>{
    console.log("Hello world");
    res.send("Hello world");
})

app.use("/expenses", expenseRoutes);


db.sync({force:false})
.then(()=>{
app.listen(8000, ()=>{
    console.log("server is running...");
})
}).catch((err)=>{
    console.log(err);
})



