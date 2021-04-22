import express from 'express';
import expressAsyncHandler from 'express-async-handler';

import axios from 'axios';
import crypto from 'crypto';
import httpBuildQuery from 'http-build-query';
import sortKeys from 'sort-keys';

const categoryProductsRouter = express.Router();

const token = "a1dbf8d9dcbe22b39f85fc29ee76824738163c55348ae"
const secret = "9afc3d89fa3ace87c52f"

const domain = "https://api.tme.eu/"
const format = ".json"

const symbolsData = []
const productsData = []

/* Get Symbols */
function fetchSymbols() {

    const symbolsPath = "Products/GetSymbols"
    const symbolsUrl = domain + symbolsPath + format;

    const symbolsParams = {
        Country: 'UA',
        Language: 'uk',
        CategoryId: '100142',
        Token: token
    }

    const symbolsSortedParams = sortKeys(symbolsParams, { deep: true })
    const symbolsQueryParams = httpBuildQuery(symbolsSortedParams)

    const symbolsSignatureRequest = 'POST&' + encodeURIComponent(symbolsUrl) + "&" + encodeURIComponent(symbolsQueryParams)
    const symbolsSignature = crypto.createHmac('sha1', secret).update(symbolsSignatureRequest, 'utf8').digest('base64')

    symbolsParams['ApiSignature'] = symbolsSignature

    const symbolsAxiosSettings = {
        url: symbolsUrl,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: symbolsParams
    }

    axios.request(symbolsAxiosSettings)
        .then((res) => { 
            symbolsData.push(res.data.Data.SymbolList)
        })
        .catch((error) => {
            console.error(error)
        })
    }
/* --------------------------------------------------------------------------- */

/* Get Products */
function fetchProducts() {
    const productsPath = "Products/GetProducts"
    const productsUrl = domain + productsPath + format;

    const productsParams = {
        Country: 'UA',
        Language: 'uk',
        SymbolList: symbolsData[0],
        Token: token
    }

    const productsSortedParams = sortKeys(productsParams, { deep: true })
    const productsQueryParams = httpBuildQuery(productsSortedParams)

    const productsSignatureRequest = 'POST&' + encodeURIComponent(productsUrl) + "&" + encodeURIComponent(productsQueryParams)
    const productsSignature = crypto.createHmac('sha1', secret).update(productsSignatureRequest, 'utf8').digest('base64')

    productsParams['ApiSignature'] = productsSignature

    const productsAxiosSettings = {
        url: productsUrl,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: productsParams
    }

    axios.request(productsAxiosSettings)
        .then((res) => { 
            productsData.push(res.data)
        })
        .catch((error) => {
            console.error(error)
        })

}
/* --------------------------------------------------------------------------- */

/* run one after another */
async function fetchData() { 
    await fetchSymbols()
    setTimeout(async () => {
        await fetchProducts()
    }, 1000)
}

fetchData()
/* --------------------------------------------------------------------------- */

categoryProductsRouter.get( '/', expressAsyncHandler(async (req, res) => {
    res.send(productsData);
}));

export default categoryProductsRouter;