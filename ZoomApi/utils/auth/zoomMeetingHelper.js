const { fetcher } = require("../axios/AxiosInstance");

const getMeeting = async (meetingId) => {
    try {
        const response = await fetcher.get(`https://api.zoom.us/v2/meetings/${meetingId}`, {
            headers: {
                'Authorization': `Bearer ${process.env.ZOOM_ACCESS_TOKEN}`
            },
        })
        return response
    } catch (error) {
        return Promise.reject(error);
    }
}

const getUpcomingMeetings = async (userId) => {
    try {
        const response = await fetcher.get(`https://api.zoom.us/v2/users/${userId}/upcoming_meetings`, {
            headers: {
                'Authorization': `Bearer ${process.env.ZOOM_ACCESS_TOKEN}`
            },
        })
        return response
    } catch (error) {
        return Promise.reject(error);
    }
}

const getListMeeting = async (userId) => {
    try {
        const response = await fetcher.get(`https://api.zoom.us/v2/users/${userId}/meetings`, {
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

const updateMeeting = async (meetingId) => {
    //TODO Follow your feature to edit params update
    try {
        const response = await fetcher.patch(`https://api.zoom.us/v2/meetings/${meetingId}`,
            {
                "agenda": "My Meeting",
                "duration": 60,
                "password": "123456",
                "pre_schedule": false,
                "schedule_for": "thongluong.edu@gmail.com",
                "recurrence": {
                    "end_date_time": "2022-04-02T15:59:00Z",
                    "end_times": 7,
                    "monthly_day": 1,
                    "monthly_week": 1,
                    "monthly_week_day": 1,
                    "repeat_interval": 1,
                    "type": 1,
                    "weekly_days": "1"
                },
                "start_time": "2022-03-25T07:29:29Z",
            }
            , {
                headers: {
                    'Authorization': `Bearer ${process.env.ZOOM_ACCESS_TOKEN}`
                },
            })
        return response
    } catch (error) {
        return Promise.reject(error);
    }
}


const deleteMeeting = async (meetingId) => {
    try {
        const response = await fetcher.delete(`https://api.zoom.us/v2/meetings/${meetingId}`, {
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
    getMeeting,
    getUpcomingMeetings,
    getListMeeting,
    createMeeting,
    deleteMeeting,
    updateMeeting
}