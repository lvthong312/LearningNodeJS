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


module.exports = {
    getMeeting,
    createMeeting,
    updateMeeting,
    endActiveConference,
    listConferenceRecords
}