const express = require("express");

const app = express();
require("dotenv").config();
// include bcrypt to hashing password

// rquire mongoose
const mongoose = require("mongoose");
const port = process.env.PORT||8000;

 app.use(express.json());
// data base conection
    async function conctedDb() {
    try {
        await mongoose.connect(process.env.DBIP)
        console.log("Data Base conected");
    } catch (error) {
        console.log("erro with conected DB");
          }
    }

    conctedDb();

const authRouter = require("./routes/authRoutes");
  
app.use("/api", authRouter)
 
/////////// listening on the port///////////////
   app.listen(port,()=>{
    console.log(`server is listen on port ${port} `);
    });