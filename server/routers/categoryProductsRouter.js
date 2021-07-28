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

/* Get Symbols */
function fetchSymbols(categoryId) {
    const symbolsPath = "Products/GetSymbols"
    const symbolsUrl = domain + symbolsPath + format;

    const symbolsParams = {
        Country: 'UA',
        Language: 'en',
        CategoryId: categoryId.toString(),
        Token: token
    }

    const symbolsSortedParams = sortKeys(symbolsParams, {deep: true})
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

    const symbolsData = axios.request(symbolsAxiosSettings)
      .then((res) => {
          const symbolsData = res.data
          return symbolsData;
      })
      .catch((error) => {
          console.error(error)
      })

    return symbolsData;
}
/* --------------------------------------------------------------------------- */

/* Get Products */
function fetchProducts(symbols) {
    const slicedSymbols = symbols.Data.SymbolList.slice(0, 20);

    const productsPath = "Products/GetProducts"
    const productsUrl = domain + productsPath + format;

    const productsParams = {
        Country: 'UA',
        Language: 'en',
        SymbolList: slicedSymbols,
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

    return axios.request(productsAxiosSettings)
      .then((res) => {
          return res.data;
      })
      .catch((error) => {
          console.error(error)
      })
}
/* --------------------------------------------------------------------------- */

categoryProductsRouter.get( '/:id', expressAsyncHandler(async (req, res) => {
    const symbols = await fetchSymbols(req.params.id);
    const products = await fetchProducts(symbols);

    res.send(products);
}));

export default categoryProductsRouter;