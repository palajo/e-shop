import express from 'express';
import expressAsyncHandler from 'express-async-handler';

import axios from 'axios';
import crypto from 'crypto';
import httpBuildQuery from 'http-build-query';
import sortKeys from 'sort-keys';

const productPricesRouter = express.Router();

const token = "a1dbf8d9dcbe22b39f85fc29ee76824738163c55348ae"
const secret = "9afc3d89fa3ace87c52f"

const domain = "https://api.tme.eu/"
const format = ".json"

function fetchProductPrices(productId) {
  const pricesPath = "Products/GetPrices"
  const pricesUrl = domain + pricesPath + format;

  const pricesParams = {
    Country: 'UA',
    Language: 'en',
    SymbolList: [productId.replace(/_/g, '/')],
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

  return axios.request(pricesAxiosSettings)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.error(error)
    })
}

productPricesRouter.get( '/:id', expressAsyncHandler(async (req, res) => {
  const productPrices = await fetchProductPrices(req.params.id);
  res.send(productPrices);
}));

export default productPricesRouter;