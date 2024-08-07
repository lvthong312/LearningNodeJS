const express = require('express');
const { authorize } = require('./utils/authHelper');
const { createMeeting, getMeeting, endActiveConference, listConferenceRecords } = require('./utils/meetingHelper');
const app = express();
const port = 8000
app.use(express.json())


app.get('/get-meeting', authorize, async (req, res) => {
    const payload = {
        name: req.query.name
    }
    const response = await getMeeting(req.authClient, payload)
    return res.json(response)
})
/**
 *  enum AccessType {
        ACCESS_TYPE_UNSPECIFIED = 0,
        OPEN = 1,               // <--- Anyone with the join information (for example, the URL or phone access information) can join without knocking.
        TRUSTED = 2,            // <--- Members of the host's organization, invited external users, and dial-in users can join without knocking. Everyone else must knock.
        RESTRICTED = 3          // <--- Only invitees can join without knocking. Everyone else must knock.
    }
    enum EntryPointAccess {
        ENTRY_POINT_ACCESS_UNSPECIFIED = 0,     // <--- Unused.
        ALL = 1,                                // <--- All entry points are allowed.
        CREATOR_APP_ONLY = 2                    // <---  Only entry points owned by the Google Cloud project that created the space can be used to join meetings in this space. Apps can use the Meet Embed SDK Web or mobile Meet SDKs to create owned entry points.
    }
 */
app.post('/create-meeting', authorize, async (req, res) => {
    const payload = {
        config: {
            "accessType": "TRUSTED",
            "entryPointAccess": "ALL"
        }
    }
    const response = await createMeeting(req.authClient, payload)
    return res.json(response)
})

app.patch('/update-meeting', authorize, async (req, res) => {
    const payload = {
        name: req.body.name
    }
    const response = await createMeeting(req.authClient, payload)
    return res.json(response)
})

app.post('/end-active-meeting', authorize, async (req, res) => {
    const payload = {
        name: req.body.name
    }
    const response = await endActiveConference(req.authClient, payload)
    return res.json(response)
})

app.post('/list-conference-records', authorize, async (req, res) => {
    const payload = {}
    const response = await listConferenceRecords(req.authClient, payload)
    return res.json(response)
})

app.listen(port, () => {
    console.log('Server is starting with port ', port)
})