const { fetcher } = require("../axios/AxiosInstance")

const getAccountMe = async () => {
    try {
        const response = await fetcher.get('https://api.zoom.us/v2/accounts/me/settings', {
            headers: {
                'Authorization': `Bearer ${process.env.ZOOM_ACCESS_TOKEN}`
            },
        })
        return response
    } catch (error) {
        return Promise.reject(error);
    }
}

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

const createUser = async () => {
    try {
        const response = await fetcher.post(`${process.env.ZOOM_API}/v2/users`,
            {
                "action": "create",
                "user_info": {
                    "email": "lvthong312@gmail.com",
                    "first_name": "Thong",
                    "last_name": "Luong",
                    "display_name": "Thong Luong",
                    "password": "if42!LfH@",
                    "type": 1,
                    "feature": {
                        "zoom_phone": false,
                        "zoom_one_type": 16
                    },
                    "plan_united_type": "1"
                }
            }
            , {
                headers: {
                    'Authorization': `Bearer ${process.env.ZOOM_ACCESS_TOKEN}`
                },
                // params: {
                //     grant_type: 'account_credentials',
                //     account_id: process.env.ZOOM_ACCOUNT_ID
                // },
            }
        )
        return response
    } catch (error) {
        return Promise.reject(error);
    }
}


const generateToken = async () => {
    try {
        const response = await fetcher.post(`${process.env.ZOOM_API}/oauth/token`, null, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${process.env.ZOOM_AUTHORIZE}`
            },
            params: {
                grant_type: 'account_credentials',
                account_id: process.env.ZOOM_ACCOUNT_ID
            },
        })
        return response
    } catch (error) {
        return Promise.reject(error);
    }
}

const refreshToken = async () => {
    try {
        const newToken = await generateToken()
        const response = await fetcher.post(`${process.env.ZOOM_API}/oauth/token`, {
            refresh_token: newToken,
            grant_type: 'refresh_token'
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${process.env.ZOOM_AUTHORIZE}`
            },
            params: {
                grant_type: 'account_credentials',
                account_id: process.env.ZOOM_ACCOUNT_ID
            },
        })
        return response
    } catch (error) {
        return Promise.reject(error);
    }
}

module.exports = {
    generateToken,
    refreshToken,
    createUser,
    getUserMe,
    getAccountMe
}