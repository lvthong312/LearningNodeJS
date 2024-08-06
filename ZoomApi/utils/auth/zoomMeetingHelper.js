const { fetcher } = require("../axios/AxiosInstance");

const getUserMe = async () => {
    try {
        const response = await fetcher.get('https://api.zoom.us/v2/users/me', {
            headers: {
                'Authorization': `Bearer ${process.env.ZOOM_ACCESS_TOKEN}`
            },
        })
        return response
    } catch (error) {
        return Promise.reject(error);
    }
}
const createMeeting = async (userId, payload) => {
    const { topic, type, duration, start_time, timezone, password, agenda } = payload
    try {
        const response = await fetcher.post(`https://api.zoom.us/v2/users/${userId}/meetings`, {
            "topic": topic,
            "type": type,
            "duration": duration,
            "start_time": start_time,
            "timezone": timezone,
            "password": password,
            "agenda": agenda
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.ZOOM_ACCESS_TOKEN}`
            },
        })
        return response
    } catch (error) {
        return Promise.reject(error);
    }
}



module.exports = {
    getUserMe,
    createMeeting
}