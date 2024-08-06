
# Getting Start

## Step 1: After clone the project run

  ```sh
cd ZoomApi && yarn install
```

## Step 2: Add .env file

```sh
ZOOM_ACCOUNT_ID=
ZOOM_API=https://api.zoom.us
ZOOM_AUTHORIZE=
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



