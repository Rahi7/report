import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import connectDb from './db/index.js';

dotenv.config({
    path: './env'
})

const app = express();

connectDb()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is runnimg at port : ${process.env.PORT}`);
    })
})
// app.get('/', (req, res) => {
//     res.send('hello');
// });
.catch((err) => {
    console.log("MONGO DB CONNECTION ERROR: ",err)
})