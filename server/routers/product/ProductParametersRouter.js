import express from 'express';
import expressAsyncHandler from 'express-async-handler';

import axios from 'axios';
import crypto from 'crypto';
import httpBuildQuery from 'http-build-query';
import sortKeys from 'sort-keys';

const productParametersRouter = express.Router();

const token = "a1dbf8d9dcbe22b39f85fc29ee76824738163c55348ae"
const secret = "9afc3d89fa3ace87c52f"

const domain = "https://api.tme.eu/"
const format = ".json"

function fetchProductParameters(productId) {
  const parametersPath = "Products/GetParameters"
  const parametersUrl = domain + parametersPath + format;

  const parametersParams = {
    Country: 'UA',
    Language: 'uk',
    SymbolList: [productId],
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

  return axios.request(parametersAxiosSettings)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.error(error)
    })
}

productParametersRouter.get( '/:id', expressAsyncHandler(async (req, res) => {
  const productParameters = await fetchProductParameters(req.params.id);
  res.send(productParameters);
}));

export default productParametersRouter;