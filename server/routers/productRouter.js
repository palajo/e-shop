import express from 'express';
import expressAsyncHandler from 'express-async-handler';

import axios from 'axios';
import crypto from 'crypto';
import httpBuildQuery from 'http-build-query';
import sortKeys from 'sort-keys';

const productRouter = express.Router();

const token = "a1dbf8d9dcbe22b39f85fc29ee76824738163c55348ae"
const secret = "9afc3d89fa3ace87c52f"

const domain = "https://api.tme.eu/"
const format = ".json"

const apiData = []

/* Get Product Info */    
function fetchProductInfo() {

    const infoPath = "Products/GetProducts"
    const infoUrl = domain + infoPath + format;

    const infoParams = {
        Country: 'UA',
        Language: 'uk',
        SymbolList: ['DIGI-ME'],
        Token: token
    }

    const infoSortedParams = sortKeys(infoParams, { deep: true })
    const infoQueryParams = httpBuildQuery(infoSortedParams)

    const infoSignatureRequest = 'POST&' + encodeURIComponent(infoUrl) + "&" + encodeURIComponent(infoQueryParams)
    const infoSignature = crypto.createHmac('sha1', secret).update(infoSignatureRequest, 'utf8').digest('base64')

    infoParams['ApiSignature'] = infoSignature

    const infoAxiosSettings = {
        url: infoUrl,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: infoParams
    }

    axios.request(infoAxiosSettings)
        .then((res) => { 
            apiData.push(res.data)
        })
        .catch((error) => {
            console.error(error)
        })

}
/* --------------------------------------------------------------------------- */

/* Get Product Prices */       
function fetchProductPrices() {
    const pricesPath = "Products/GetPrices"
    const pricesUrl = domain + pricesPath + format;

    const pricesParams = {
        Country: 'UA',
        Language: 'uk',
        SymbolList: ['DIGI-ME'],
        Currency: 'USD',
        Token: token
    }

    const pricesSortedParams = sortKeys(pricesParams, { deep: true })
    const pricesQueryParams = httpBuildQuery(pricesSortedParams)

    const pricesSignatureRequest = 'POST&' + encodeURIComponent(pricesUrl) + "&" + encodeURIComponent(pricesQueryParams)
    const pricesSignature = crypto.createHmac('sha1', secret).update(pricesSignatureRequest, 'utf8').digest('base64')

    pricesParams['ApiSignature'] = pricesSignature

    const pricesAxiosSettings = {
        url: pricesUrl,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: pricesParams
    }

    axios.request(pricesAxiosSettings)
        .then((res) => { 
            apiData.push(res.data)
        })
        .catch((error) => {
            console.error(error)
        })
}
/* --------------------------------------------------------------------------- */

/* Get Product Parameters */       
function fetchProductParameters() {
    const parametersPath = "Products/GetParameters"
    const parametersUrl = domain + parametersPath + format;

    const parametersParams = {
        Country: 'UA',
        Language: 'uk',
        SymbolList: ['DIGI-ME'],
        Token: token
    }

    const parametersSortedParams = sortKeys(parametersParams, { deep: true })
    const parametersQueryParams = httpBuildQuery(parametersSortedParams)

    const parametersSignatureRequest = 'POST&' + encodeURIComponent(parametersUrl) + "&" + encodeURIComponent(parametersQueryParams)
    const parametersSignature = crypto.createHmac('sha1', secret).update(parametersSignatureRequest, 'utf8').digest('base64')

    parametersParams['ApiSignature'] = parametersSignature

    const parametersAxiosSettings = {
        url: parametersUrl,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: parametersParams
    }

    axios.request(parametersAxiosSettings)
        .then((res) => { 
            apiData.push(res.data)
        })
        .catch((error) => {
            console.error(error)
        })
}
/* --------------------------------------------------------------------------- */

/* run one after another */
async function fetchData() { 
    await fetchProductInfo()
    await fetchProductPrices()
    await fetchProductParameters()
}

fetchData()
/* --------------------------------------------------------------------------- */

productRouter.get( '/', expressAsyncHandler(async (req, res) => {
    res.send(apiData);
}));

export default productRouter;