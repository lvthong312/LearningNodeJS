require('dotenv').config();
const express = require('express');
const { fetcher } = require('./utils/axios/AxiosInstance');
const { generateToken, refreshToken, createUser, getUserMe, getAccountMe } = require('./utils/auth/authHelper');
const { createMeeting, deleteMeeting, updateMeeting, getListMeeting, getMeeting, getUpcomingMeetings } = require('./utils/auth/ZoomMeetingHelper');
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
    // TODO must access permission role
    const response = await createUser();
    console.log('createUser: ', response.data)
    return res.json({})
})

app.get(`/get-user-me`, async (req, res) => {
    const response = await getUserMe();
    return res.json(response.data) // <-- Must adjust response follow your feature
})

app.get(`/get-account-me`, async (req, res) => {
    const response = await getAccountMe();
    return res.json(response.data) // <-- Must adjust response follow your feature
})

app.get(`/get-meeting`, async (req, res) => {
    const { meetingId } = req?.query
    const response = await getMeeting(meetingId);
    return res.json(response.data)
})

app.get(`/get-upcoming-meetings`, async (req, res) => {
    const { userId } = req?.query
    const response = await getUpcomingMeetings(userId);
    return res.json(response.data)
})

app.get(`/get-meetings`, async (req, res) => {
    const { userId } = req?.query
    const response = await getListMeeting(userId);
    return res.json(response.data)
})

app.post(`/create-meeting`, async (req, res) => {
    const { userId, payload } = req?.body
    const response = await createMeeting(userId, payload);
    return res.json(response.data)
})


app.post(`/update-meeting`, async (req, res) => {
    const { meetingId, payload } = req?.body
    const response = await updateMeeting(meetingId);
    return res.json(response.data)
})

app.delete(`/delete-meeting`, async (req, res) => {
    const { meetingId } = req.query
    const response = await deleteMeeting(meetingId);
    return res.json(response.data)
})

app.listen(8000, () => {
    console.log('Server start with port 8000')
})