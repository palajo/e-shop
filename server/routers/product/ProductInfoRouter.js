import express from 'express';
import expressAsyncHandler from 'express-async-handler';

import axios from 'axios';
import crypto from 'crypto';
import httpBuildQuery from 'http-build-query';
import sortKeys from 'sort-keys';

const productInfoRouter = express.Router();

const token = "a1dbf8d9dcbe22b39f85fc29ee76824738163c55348ae"
const secret = "9afc3d89fa3ace87c52f"

const domain = "https://api.tme.eu/"
const format = ".json"

function fetchProductInfo(productId) {

  const infoPath = "Products/GetProducts"
  const infoUrl = domain + infoPath + format;

  const infoParams = {
    Country: 'UA',
    Language: 'uk',
    SymbolList: [productId],
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

  return axios.request(infoAxiosSettings)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.error(error)
    })
}

productInfoRouter.get( '/:id', expressAsyncHandler(async (req, res) => {
  const productInfo = await fetchProductInfo(req.params.id);
  res.send(productInfo);
}));

export default productInfoRouter;