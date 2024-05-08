const express = require("express");
const { connection } = require("./config/db.config");
const cors = require("cors");
const { userRouter } = require("./routes/user.Route");
const { enquiryRouter } = require("./routes/enquiry.Route");
const app = express();
require("dotenv").config()

app.use(express.json());
app.use(cors());
app.use("/",userRouter)
app.use("/",enquiryRouter)

app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log('Database is Connected');
        console.log(`Server is Running on Port ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
    }
})