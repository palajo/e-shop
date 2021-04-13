import express from 'express'
import axios from 'axios'
import cors from 'cors'
import crypto from 'crypto'
import httpBuildQuery from 'http-build-query';
import sortKeys from 'sort-keys';

const app = express();
app.use(cors());

const apiData = []

const token = "a1dbf8d9dcbe22b39f85fc29ee76824738163c55348ae"
const secret = "9afc3d89fa3ace87c52f"

const domain = "https://api.tme.eu/"
const path = "Products/GetCategories"
const format = ".json"
const url = domain + path + format;

const params = {
    Country: 'UA',
    Language: 'en',
    CategoryId: '19',
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
        console.log(res.data)
        apiData.push(res.data)
    })
    .catch((error) => {
        console.error(error)
    })

app.get('/', (req, res) => {
    res.send(apiData);
})

app.listen(5000, () => {
    console.log('Server is ran at http://localhost:5000/')
})
