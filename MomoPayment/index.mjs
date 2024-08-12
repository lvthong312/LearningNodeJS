import express from "express";

import 'dotenv/config'
import { collectionLink } from "./utils/Payment.mjs";
import { checkTransactionStatus } from "./utils/Transaction.mjs";
const app = express();
const port = 8000
app.use(express.json());


app.get('/momo-payment-success', (req, res) => {
    return res.json({
        title: 'Momo Payment Success'
    })
})

/**
 * /callback API
    * Nhận được khi user đã quẹt thanh toán xong
    * req.body params
    *  "partnerCode": "MOMO",
        "orderId": "MOMO1723437545929",
        "requestId": "MOMO1723437545929",
        "amount": 5000,
        "orderInfo": 'pay with momo'
        "responseTime": 1723437546670,
        "message": "Thành công.",
        "resultCode": 0,  //  resultCode = 0: thanh toán thành công, còn lại thanh toán thất bại
      
*/
app.post('/callback', async (req, res) => {
    console.log('Callback: ');
    console.log('Body', req.body)
    return req.status(200).json(req.body)
})

app.post('/request-momo-payment', async (req, res) => {
    try {
        const result = await collectionLink({
            amount: '5000',
            redirectUrl: `localhost:${port}/momo-payment-success`, // <-- khi thanh toán thành công di chuyển qua link này
            callback: `localhost:${port}/callback`  // <-- khi thanh toán thành công hoặc thất bại sẽ gọi api callback 
        })
        res.status(200).json(result.data)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            statusCode: 500,
            message: 'Server Error'
        })
    }
})

// -- https://developers.momo.vn/v3/docs/payment/api/payment-api/query
app.post('/check-momo-transaction-status', async (req, res) => {
    try {
        const result = await checkTransactionStatus({ orderId: req?.body?.orderId})
        res.status(200).json(result.data)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            statusCode: 500,
            message: 'Server Error'
        })
    }
})

app.listen(port, () => {
    console.log('Server is starting with port: ', port);
})