const express = require("express");

const app = express();
require("dotenv").config();

const mongoose = require("mongoose")
const port = process.env.PORT;

 app.use(express.json());


    async function conctedDb() {
    try {
        await mongoose.connect(process.env.DBIP)
        console.log("Data Base conected");
    } catch (error) {
        console.log("erro with conected DB");
          }
    }
    conctedDb();

    app.listen(port,()=>{
    console.log(`server is listen on port ${port} `);
    })
    