const axios = require('axios')
const fetcher = axios.create({
    baseURL: process.env.ZOOM_API,
    // timeout: 10000
})

module.exports = {
    fetcher
}