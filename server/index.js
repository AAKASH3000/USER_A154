const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require("dotenv").config();

const {MONGO_URL, PORT} = process.env;

//------
//DNS
const dns = require("dns");

//Change DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);
//------

app.listen(PORT,()=>{
   console.log(`Server is running on port ${PORT}`);
   connectDB();
})

app.use(cors(
    {
        origin:["http://localhost:4000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }
));
app.use(express.json());

async function connectDB() {
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb is connected successfully");
  }catch(err){
    console.log("Failed to connect with DB", err);
  }
}


