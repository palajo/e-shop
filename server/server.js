import http from 'http'
import express from 'express'
import cors from 'cors'
import productsRouter from './routers/productsRouter.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/products/', productsRouter);



const httpServer = http.Server(app);

const port = process.env.PORT || 5000;

httpServer.listen(port, () => {
    console.log('Server is ran at http://localhost:5000/')
})


/*
*/