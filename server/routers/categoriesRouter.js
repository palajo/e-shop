import express from 'express';
import expressAsyncHandler from 'express-async-handler';

import axios from 'axios';
import crypto from 'crypto';
import httpBuildQuery from 'http-build-query';
import sortKeys from 'sort-keys';

const categoriesRouter = express.Router();

    // making request to api.tme.eu
    const apiData = []

    const token = "a1dbf8d9dcbe22b39f85fc29ee76824738163c55348ae"
    const secret = "9afc3d89fa3ace87c52f"

    const domain = "https://api.tme.eu/"
    const path = "Products/GetCategories"
    const format = ".json"
    const url = domain + path + format;

    const params = {
        Country: 'UA',
        Language: 'uk',
        Token: token
    }

    const sortedParams = sortKeys(params, { deep: true })
    const queryParams = httpBuildQuery(sortedParams)

    const signatureRequest = 'POST&' + encodeURIComponent(url) + "&" + encodeURIComponent(queryParams)
    const signature = crypto.createHmac('sha1', secret).update(signatureRequest, 'utf8').digest('base64')

    params['ApiSignature'] = signature

    const axiosSettings = {
        url: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: params
    }

    axios.request(axiosSettings)
        .then((res) => { 
            apiData.push(res.data)
        })
        .catch((error) => {
            console.error(error)
        })

categoriesRouter.get( '/', expressAsyncHandler(async (req, res) => {
    res.send(apiData);
}));

export default categoriesRouter;