import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app:Application = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Error 404 response
app.all('*', (req, res) => {
    res.status(404).send({
        message: 'Error loading page: Not Found',
        result: false,
    })
})

// error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({
        result: false,
        message: 'something went wrong with the server'
    })
})

// start the server
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})