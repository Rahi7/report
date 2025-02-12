import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(PORT, () => {
    console.log(`listening on port no:${PORT}`);
});