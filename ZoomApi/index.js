require('dotenv').config();
const express = require('express');
const { fetcher } = require('./utils/axios/AxiosInstance');
const { generateToken, refreshToken, createUser } = require('./utils/auth/auth');
const { getUserMe, createMeeting } = require('./utils/auth/ZoomMeetingHelper');
const app = express();

app.use(express.json())

app.post(`/access-token`, async (req, res) => {
    const response = await generateToken();
    return res.json({
        access_token: response?.data?.access_token,
        token_type: response?.data?.access_token,
        expires_in: response?.data?.expires_in
    })
})

app.post(`/refresh-token`, async (req, res) => {
    const response = await refreshToken();
    return res.json({
        access_token: response?.data?.access_token,
        token_type: response?.data?.access_token,
        expires_in: response?.data?.expires_in,
        refresh_token: response?.data?.refresh_token
    })
})

app.post(`/create-user`, async (req, res) => {
    const response = await createUser();
    console.log('createUser: ', response)
    return res.json({})
})

app.get(`/get-user-me`, async (req, res) => {
    const response = await getUserMe();
    // TODO Must adjust response follow your feature
    return res.json(response.data)
})
app.post(`/create-meeting`, async (req, res) => {
    const response = await createMeeting(req?.body?.userId, req?.body?.payload);
    console.log('createMeeting: ', JSON.stringify(response.data, null, 2))
    return res.json(response.data)
})

app.listen(8000, () => {
    console.log('Server start with port 8000')
})