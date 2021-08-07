import http from 'http'
import express from 'express'
import cors from 'cors'

import productRouter from './routers/productRouter.js';
import categoriesRouter from './routers/categoriesRouter.js';
import categoryRouter from './routers/categoryRouter.js';
import categoryProductsRouter from './routers/categoryProductsRouter.js';
import categorySymbolsRouter from './routers/categorySymbolsRouter.js';

import productInfoRouter from './routers/product/productInfoRouter.js';
import productPricesRouter from './routers/product/productPricesRouter.js';
import productParametersRouter from './routers/product/productParametersRouter.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/product/', productRouter);
app.use('/api/shop/', categoriesRouter);
app.use('/api/category/', categoryRouter);
app.use('/api/categorySymbols/', categorySymbolsRouter);
app.use('/api/categoryProducts/', categoryProductsRouter);

app.use('/api/product/info/', productInfoRouter);
app.use('/api/product/prices/', productPricesRouter);
app.use('/api/product/parameters/', productParametersRouter);

const httpServer = http.Server(app);

const port = process.env.PORT || 5000;

httpServer.listen(port, () => {
    console.log('Server is ran at http://localhost:5000/')
})