import express from "express";
import cors from "cors";
import "./database"; // db connection

//initialization
const app = express();

// settings
const port = process.env.PORT || 4001;

//midleware
app.use(cors());
app.use(express.json());

//require and use routers
const userRoute = require("./routes/users");
app.use("/users", userRoute);

// static files
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
