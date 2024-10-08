# Reference

[Official Documentation of ZoomUS's User](https://developers.zoom.us/docs/api/rest/reference/user/methods/#operation/contactGroupUpdate)

[Official Documentation of ZoomUS's Meeting](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/meetingAppAdd)

# Features
1. Get Access Token
2. Refresh Token 
3. Create new Meeting
4. Get Meeting Detail
5. Get List Meetings
6. Get Upcoming Meetings
7. Delete Meeting
8. Create New User
9. Get Current User

# Getting Start

## Step 1: Clone the project and run
```sh
git clone https://github.com/lvthong312/LearningNodeJS.git
```

  ```sh
cd ZoomApi && yarn install
```

## Step 2: Add .env file

```sh
ZOOM_ACCOUNT_ID=
ZOOM_API=https://api.zoom.us
ZOOM_AUTHORIZE=
ZOOM_ACCESS_TOKEN=
```

### How to get ZOOM_ACCOUNT_ID, client_id, client_secret

1. Go to [https://marketplace.zoom.us/](https://marketplace.zoom.us/) and sign in the account. If you don't have an account please let create

2. Create **Zoom App** by Click Develop and Build App

   <img width="602" alt="image" src="https://github.com/user-attachments/assets/3d7e8d46-0bb5-440c-8a92-be7184bbcfef">

3. Choose Server to Server OAuthApp

   <img width="942" alt="image" src="https://github.com/user-attachments/assets/b2f78103-b2d7-47a7-8f41-c4950ed0f77b">

4. Click **Manage** and go to your app

   <img width="1417" alt="image" src="https://github.com/user-attachments/assets/afb231ad-7dbc-4410-9918-fce23fc9dcd2">

5. You can see Your **Account ID**, **Client ID**, **Client Secret** bellow 

   <img width="443" alt="image" src="https://github.com/user-attachments/assets/cf7062a6-eb72-49be-9da6-977fd7db4168">
   

### How to get ZOOM_AUTHORIZE

1. Goto [https://www.base64encode.org/](https://www.base64encode.org/) 

2.  Encode your client_id:client_secret ( **client_id** and **client_secret** get **above**)
  
  <img width="605" alt="image" src="https://github.com/user-attachments/assets/f11dc5f9-d1b0-4a3b-8685-d645fea94ba1">

3.  Copy Your Encode to ZOM_AUTHORIZE

    <img width="434" alt="image" src="https://github.com/user-attachments/assets/e7199330-2db9-4ddb-b9b5-f895ba468c1d">

### How to get ZOOM_ACCESS_TOKEN

1. Start Server of ZoomApi
   
```sh
node index.js

2. Open **Terminal** and run

```sh
curl -X POST localhost:8000/access-token
```

Or Use Postman

<img width="826" alt="image" src="https://github.com/user-attachments/assets/9c0a6990-8c09-460b-b873-3cf6280f3140">

## Step3: Add Permission for App

1. Click **Scope** in left panel and click **Add Scope**

<img width="1295" alt="image" src="https://github.com/user-attachments/assets/f1231734-f258-46a5-86f4-85d403e13ad7">

2. Access permission for App and **You can add any role else if needed to use**: 
  
 **View all user meeting:**
 **View and manage all user meeting:**
 **View and manage sub account's user meeting:**
 
  <img width="1407" alt="Screenshot 2024-08-06 at 09 26 29" src="https://github.com/user-attachments/assets/0970a7f4-fe11-4dd6-8246-13d27bc92e7a">


<img width="1428" alt="Screenshot 2024-08-06 at 09 26 36" src="https://github.com/user-attachments/assets/dd03d299-fe12-48db-9d86-b818e50f2875">

  <img width="1377" alt="Screenshot 2024-08-06 at 09 26 44" src="https://github.com/user-attachments/assets/7e464c46-b88e-42f1-8ad0-bd8e0db01cf4">


<h1>We have completed Setup for the project. Now please read documentation bellow</h1>


# List API

## Access Token

[Documentation](https://developers.zoom.us/docs/integrations/oauth/)

### Methos POST

EndPoint: /access-token: 

**Description**: Create a Access Token to use another api of Zoom

## Refresh Token

### Methos POST

**EndPoint**: /refresh-token

**Description**: Refresh an Access Token to use another api of Zoom

## Create new Meeting

[Documentation](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/meetingCreate)

### Methos POST

**EndPoint**: /create-meeting

**Description**: Create new Meeting

**start_url** response field: is a URL to start the meeting

**join_url** response field: is a URL to join the meeting

**Request**: 
```js
{
   userId: "abcd",
   payload: {
      "topic": "TOPIC",
      "type": "2",
      "duration": "30",
      "start_time": "2020 -09 - 16T11:00:00",
      "timezone": "Asia / Tokyo",
      "password": "123456",
      "agenda": "AGENDA"
  }
}
```

**Response**: 
```js
{
    "uuid": "==",
    "id": ,
    "host_id": "",
    "host_email": "thongluong.edu@gmail.com",
    "topic": "TOPIC",
    "type": 2,
    "status": "waiting",
    "start_time": "2024-08-06T07:11:10Z",
    "duration": 30,
    "timezone": "Asia/Saigon",
    "agenda": "AGENDA",
    "created_at": "2024-08-06T07:11:10Z",
    "start_url": "https://us05web.I6IjAwMDAwMS",
    "join_url": "https://us05web.zoom.us/1",
    "password": "",
    "h323_password": "",
    "pstn_password": "",
    "encrypted_password": ".1",
    "settings": {
        "host_video": false,
        "participant_video": false,
        "cn_meeting": false,
        "in_meeting": false,
        "join_before_host": false,
        "jbh_time": 0,
        "mute_upon_entry": false,
        "watermark": false,
        "use_pmi": false,
        "approval_type": 2,
        "audio": "voip",
        "auto_recording": "none",
        "enforce_login": false,
        "enforce_login_domains": "",
        "alternative_hosts": "",
        "alternative_host_update_polls": false,
        "close_registration": false,
        "show_share_button": false,
        "allow_multiple_devices": false,
        "registrants_confirmation_email": true,
        "waiting_room": false,
        "request_permission_to_unmute_participants": false,
        "registrants_email_notification": true,
        "meeting_authentication": false,
        "encryption_type": "enhanced_encryption",
        "approved_or_denied_countries_or_regions": {
            "enable": false
        },
        "breakout_room": {
            "enable": false
        },
        "internal_meeting": false,
        "continuous_meeting_chat": {
            "enable": false,
            "auto_add_invited_external_users": false
        },
        "participant_focused_meeting": false,
        "push_change_to_calendar": false,
        "resources": [],
        "auto_start_meeting_summary": false,
        "alternative_hosts_email_notification": true,
        "show_join_info": false,
        "device_testing": false,
        "focus_mode": false,
        "meeting_invitees": [],
        "enable_dedicated_group_chat": false,
        "private_meeting": false,
        "email_notification": true,
        "host_save_video_order": false,
        "sign_language_interpretation": {
            "enable": false
        },
        "email_in_attendee_report": false
    },
    "pre_schedule": false
}
```

## Get Meeting Detail by Id

### Methos GET

**EndPoint**: /get-meeting

**Description**: Get a Detail meeting by meetingId

**Request**:

```js
params: {
"meetingId": "85887184206"
}
``


**Response: **

```js
{
    "uuid": "==",
    "id": "",
    "host_id": "",
    "host_email": "thongluong.edu@gmail.com",
    "assistant_id": "",
    "topic": "TOPIC",
    "type": 2,
    "status": "waiting",
    "start_time": "2024-08-06T07:11:10Z",
    "duration": 30,
    "timezone": "Asia/Saigon",
    "agenda": "AGENDA",
    "created_at": "2024-08-06T07:11:10Z",
    "start_url": "https:/",
    "join_url": "https://us05web.zoom.us/j/8588",
    "password": "",
    "h323_password": "",
    "pstn_password": "",
    "encrypted_password": ".1",
    "settings": {
        "host_video": false,
        "participant_video": false,
        "cn_meeting": false,
        "in_meeting": false,
        "join_before_host": false,
        "jbh_time": 0,
        "mute_upon_entry": false,
        "watermark": false,
        "use_pmi": false,
        "approval_type": 2,
        "audio": "voip",
        "auto_recording": "none",
        "enforce_login": false,
        "enforce_login_domains": "",
        "alternative_hosts": "",
        "alternative_host_update_polls": false,
        "close_registration": false,
        "show_share_button": false,
        "allow_multiple_devices": false,
        "registrants_confirmation_email": true,
        "waiting_room": false,
        "request_permission_to_unmute_participants": false,
        "registrants_email_notification": true,
        "meeting_authentication": false,
        "encryption_type": "enhanced_encryption",
        "approved_or_denied_countries_or_regions": {
            "enable": false
        },
        "breakout_room": {
            "enable": false
        },
        "internal_meeting": false,
        "continuous_meeting_chat": {
            "enable": false,
            "auto_add_invited_external_users": false
        },
        "participant_focused_meeting": false,
        "push_change_to_calendar": false,
        "resources": [],
        "auto_start_meeting_summary": false,
        "alternative_hosts_email_notification": true,
        "show_join_info": false,
        "device_testing": false,
        "focus_mode": false,
        "meeting_invitees": [],
        "enable_dedicated_group_chat": false,
        "private_meeting": false,
        "email_notification": true,
        "host_save_video_order": false,
        "sign_language_interpretation": {
            "enable": false
        },
        "email_in_attendee_report": false
    },
    "pre_schedule": false
}
```

## Get List Meetings

### Methos GET

**EndPoint**: /get-meetings

**Description**: Get list meeting of account

**Request:**

```js
params: {
"userId": "123"
}
```

<img width="1214" alt="image" src="https://github.com/user-attachments/assets/85dc7fcc-0a1f-4666-9a57-fcf25484efe1">


## Get Upcoming Meetings

### Methos GET

**EndPoint**: /get-upcoming-meetings

**Description**: Get List meetings upcoming

**Request:**

```js
params: {
"userId": "123"
}
```

<img width="1107" alt="image" src="https://github.com/user-attachments/assets/42cf6e22-01cf-4497-813b-607ddc9e5ce1">


## Delete Meeting
[Documentation](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/meetingDelete)

### Methos DELETE

**EndPoint**: /delete-meeting?meetingId=81047304804
   
**Description**: Delete a Meeting

## Create New User

### Methos POST

[Documentation](https://developers.zoom.us/docs/api/rest/reference/user/methods/#operation/userCreate)

[Documentation of Role](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064983)

**EndPoint**: /create-user

**Description**: Refresh an Access Token to use another API of Zoom

## Get Current User

### Methos GET

**EndPoint**: /get-user-me

**Description**: Get the Current User Profile of Zoom

**id** response field: is a UserId to use to create a new meeting and do something else

**Response**: 
```js
{
    "id": "",  
    "first_name": "",
    "last_name": "L",
    "display_name": "Thong L",
    "email": "thongluong.edu@gmail.com",
    "type": 1,
    "role_name": "Owner",
    "pmi": ,
    "use_pmi": false,
    "personal_meeting_url": "",
    "timezone": "Asia/Saigon",
    "verified": 1,
    "dept": "",
    "created_at": "2024-08-06T00:47:20Z",
    "last_login_time": "2024-08-06T06:35:24Z",
    "cms_user_id": "",
    "jid": "@xmpp.zoom.us",
    "group_ids": [],
    "im_group_ids": [],
    "account_id": "",
    "language": "en-US",
    "phone_country": "",
    "phone_number": "",
    "status": "active",
    "job_title": "",
    "location": "",
    "login_types": [
        100
    ],
    "role_id": "0",
    "account_number": ,
    "cluster": "us05",
    "user_created_at": "2024-08-06T00:47:20Z"
}
```


