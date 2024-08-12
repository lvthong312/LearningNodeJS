const { google } = require('googleapis');
const path = require('path');

// Path to your service account key file
const KEYFILEPATH = path.join(process.cwd(), 'service-account-key.json');
// Initialize the Google Calendar API client
const calendar = google.calendar({ version: 'v3' });

const authorize = async (req, res, next) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: KEYFILEPATH,
        scopes: [
            'https://www.googleapis.com/auth/meetings.space.readonly',
            'https://www.googleapis.com/auth/meetings.space.created',
            'https://www.googleapis.com/auth/calendar'
        ],
    });
    const authClient = await auth.getClient();
    // const accessToken = await authClient.getAccessToken();
    // console.log('accessToken', accessToken)
    
    req.authClient = authClient
    next()
    // return authClient
}

module.exports = {
    authorize
}