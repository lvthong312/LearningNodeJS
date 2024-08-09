/**
 * This snippet has been automatically generated and should be regarded as a code template only.
 * It will require modifications to work.
 * It may require correct/in-range values for request initialization.
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Space to be created. As of May 2023, the input space can be empty. Later on
 *  the input space can be non-empty when space configuration is introduced.
 */
// const space = {}

const { google } = require('googleapis');
const { uuid } = require('uuidv4');
const { SpacesServiceClient, ConferenceRecordsServiceClient } = require('@google-apps/meet').v2;

async function getMeeting(authClient, payload) {
    const meetClient = new SpacesServiceClient({
        authClient: authClient
    });
    // Construct request
    const request = {
        ...payload
    };

    // Run request
    const response = await meetClient.getSpace(request);
    return response
}

const createMeeting = async (authClient, payload) => {
    const meetClient = new SpacesServiceClient({
        authClient: authClient
    });
    // Construct request
    const request = {
        space: {
            ...payload
        }
    };

    // Run request
    const response = await meetClient.createSpace(request);
    console.log(`Meet URL: ${response[0].meetingUri}`);
    return response
}

async function updateMeeting(authClient) {
    const meetClient = new SpacesServiceClient({
        authClient: authClient
    });
    // Construct request
    const request = {
        space,
    };

    // Run request
    const response = await meetClient.updateSpace(request);
    return response
}

async function endActiveConference(authClient, payload) {
    const meetClient = new SpacesServiceClient({
        authClient: authClient
    });
    // Construct request
    const request = {
        ...payload
    };

    // Run request
    const response = await meetClient.endActiveConference(request);
    console.log(response);
    return response
}

async function listConferenceRecords(authClient) {
    const meetClient = new ConferenceRecordsServiceClient({
        authClient: authClient
    });
    // Construct request
    const request = {
    };

    // Run request
    const iterable = meetClient.listConferenceRecordsAsync(request);
    let data = []
    for await (const response of iterable) {
        data.push(response)
    }
    return data
}


async function createEventCalendar(authClient) {
    const calendar = google.calendar({ version: 'v3', authClient });
    const event = {
        'summary': 'Google I/O 20024',
        'location': '800 Howard St., San Francisco, CA 94103',
        'description': 'A chance to hear more about Google\'s developer products.',
        'start': {
            'dateTime': '2024-08-11T09:00:00-07:00',
            'timeZone': 'Asia/Ho_Chi_Minh',
        },
        'end': {
            'dateTime': '2024-08-11T17:00:00-07:00',
            'timeZone': 'Asia/Ho_Chi_Minh',
        },
        // 'recurrence': [
        //     'RRULE:FREQ=DAILY;COUNT=2'
        // ],
        'attendees': [
            { 'email': 'lvthong312@gmail.com' },
        ],
        'reminders': {
            'useDefault': false,
            'overrides': [
                { 'method': 'email', 'minutes': 24 * 60 },
                { 'method': 'popup', 'minutes': 10 },
            ],
        },
        'conferenceData': {
            'createRequest': {
                'requestId': uuid(),
                'conferenceSolutionKey': {
                    'type': 'hangoutsMeet'
                }
            }
        }
    };
    const data = await calendar.events.insert({
        auth: authClient,
        calendarId: 'primary',
        resource: event,
        sendNotifications: true,
        conferenceDataVersion: 1
    });

    return data.data
}


module.exports = {
    getMeeting,
    createMeeting,
    updateMeeting,
    endActiveConference,
    listConferenceRecords,
    createEventCalendar
}