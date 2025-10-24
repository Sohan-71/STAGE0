
//require("dotenv").config({path: "./env"});



import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({path: "./env"});
connectDB();










/*
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Database connected successfully");
        app.on("error", () => {
            console.log("Error",error);
            throw error ;
        });

        app.listen(process.env.PORT, () => {    
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error ;
    }       
})();
*/