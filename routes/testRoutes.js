import express from 'express';
import { testController } from '../controllers/testController.js';

//=> router object
const router = express.Router()

//routes
router.get('/test',testController)

// app.get("/", (req, res) => {
//     return res.status(200).send("<h1>Welcome To Node server. </h1>");
//   });


export default router