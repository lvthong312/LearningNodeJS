require('dotenv').config();
const express = require('express');
const { fetcher } = require('./utils/axios/AxiosInstance');
const app = express();

app.use(express.json())

app.post(`/generate-access-token`, async (req, res) => {
    try {
        const response = await fetcher.post('https://api.zoom.us/oauth/token', null, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${process.env.ZOOM_AUTHORIZE}`
            },
            params: {
                grant_type: 'account_credentials',
                account_id: process.env.ZOOM_ACCOUNT_ID
            },
        })
        const { data } = response
        return res.json({
            access_token: data.access_token,
            token_type: data.access_token,
            expires_in: data.expires_in
        })
    } catch (error) {

    }
})

app.listen(8000, () => {
    console.log('Server start with port 8000')
})


// const token = process.env.ZOOM_TOKEN;

// async function getMeetings(){
//     try{
//         const response = await axios.get('https://api.zoom.us/v2/users/me/meetings',{
//             headers:{
//                 'Authorization':`Bearer ${token}`
//             }
//         });
//         const data = response.data;
//         console.log('getMeetings: ', JSON.stringify(data, null, 2))
//         return data;
//     }catch(error){
//         console.error('Error',error);
//     }
// }
// getMeetings();

// async function createMeeting(topic, start_time,type,duration,timezone,agenda){
//     try{
//         const response = await axios.post('https://api.zoom.us/v2/users/me/meetings',{
//             topic,
//             type,
//             start_time,
//             duration,
//             timezone,
//             agenda,
//             settings:{
//                 host_video:true,
//                 participant_video:true,
//                 join_before_host:false,
//                 mute_upon_entry:true,
//                 watermark:false,
//                 use_pmi:false,
//                 approval_type:0,
//                 audio:'both',
//                 auto_recording:'none'
//             }
//         },{
//             headers:{
//                 'Authorization':`Bearer ${token}`
//             },

//         });
//         const body = response.data;
//         return body;
//     }catch(error){
//         console.error('Error',error);
//     }
// }

// (async()=>{
//     console.log(await getMeetings());
//     console.log(await createMeeting('CodingWithAdo new meeting','2023-11-20T10:00:00',2,45,'UTC','Team meeting for future videos'));
//     console.log(await getMeetings());
// })()