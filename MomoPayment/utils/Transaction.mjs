import axios from 'axios'
import crypto from 'crypto'
export async function checkTransactionStatus({ orderId }) {
    const rawSignature = `accessKey=${process.env.MOMO_ACCESS_KEY}&orderId=${orderId}&partnerCode=MOMO&requestId=${orderId}`

    const signature = crypto
        .createHmac('sha256', process.env.MOMO_SECRET_KEY)
        .update(rawSignature)
        .digest('hex')

    const requestBody = JSON.stringify({
        partnerCode: "MOMO",
        requestId: orderId,
        orderId,
        signature,
        lang: "vi"
    })
    const options = {
        method: 'POST',
        url: 'https://test-payment.momo.vn/v2/gateway/api/query',
        headers: {
            'Content-Type': 'application/json'
        },
        data: requestBody
    }
    try {
        const result = await axios(options);
        console.log('result', result)
        return result
    } catch (error) {
        return error
    }
}