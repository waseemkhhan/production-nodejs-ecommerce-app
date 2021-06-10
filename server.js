//npm run server
import express from "express"; //importing express from express
import colors from "colors";
import morgan from "morgan"; //loging Req
import cors from "cors";//Api Hit
import dotenv from "dotenv";
import cookieParser from "cookie-parser" ;
import cloudinary from "cloudinary";
import Stripe from "stripe";
import helmet from "helmet"; //mea data
import mongoSanitize from "express-mongo-sanitize";

import connectDB from "./config/db.js";

//=> dot env config (alway on top after imports)
//  dotenv.config();
//database connection
connectDB();
// stripe configuration
//Git Ignore



//=> rest object
const app = express(); 

//=>middlewares
app.use(helmet());
app.use(mongoSanitize());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());


//import routes
import testRoutes from "./routes/testRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

//=> route
app.use("/api/v1", testRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/cat", categoryRoutes);
app.use("/api/v1/order", orderRoutes);


app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome To Node server. </h1>");
});


//=> port
const PORT = process.env.PORT || 8080;

//=>listen (Listen Response)
 app.listen(PORT, () => {
    console.log(
        `Server Running On PORT ${process.env.PORT}.`
        .bgMagenta.white
      );;
});