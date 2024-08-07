# Quick Start
  [Official Document](https://developers.google.com/meet/api/guides/quickstart/nodejs)

  [Google Meeting Pricing](https://workspace.google.com/pricing)

  [Google Meet API Limit](https://developers.google.com/meet/api/guides/limits)

  [Google Meet Time Limit](https://support.google.com/meet/answer/7317473?sjid=655534175660699134-AP#length-limits&zippy=%2Cmeeting-length-limits)

# Example 

## Create Meeting

<img width="1206" alt="image" src="https://github.com/user-attachments/assets/e4655e03-01ab-4d38-980e-7f5ae2a19f15">

## Get Meeting

<img width="1137" alt="image" src="https://github.com/user-attachments/assets/93be30f9-2253-42a4-95db-0a1a789f41ce">


## End Active Meeting 

<img width="1025" alt="image" src="https://github.com/user-attachments/assets/4451cd7d-9bae-45a0-afa1-6d8449ee4087">

## Get conference Meeting

<img width="1123" alt="image" src="https://github.com/user-attachments/assets/7313be55-3b2c-48e5-b9d8-8174aa66d9c0">

# Prepare

1. Clone the project

2. Go to GG MeetApi
   ```sh
   cd GGMeetApi
   ```

3. then run
   ```sh
   yarn install
   ```

# Getting Start

## Step 1: Enable the API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.

In the Google Cloud console, enable the Google Meet API.

[Enable](https://console.cloud.google.com/flows/enableapi?apiid=meet.googleapis.com)

## Step 2: Configure the OAuth consent screen

If you're using a new Google Cloud project to complete this quickstart, configure the OAuth consent screen and add yourself as a test user. If you've already completed this step for your Cloud project, skip to the next section.

1. In the Google Cloud console, go to **menu > APIs & Services > OAuth consent screen**.

[Go to OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent)

2. For **User type** select **External**, then click **Create**.

3. Complete the app registration form, then click **Save and Continue**.

4. when you create an app for use outside of your Google Workspace organization, then, add the authorization scopes that your app requires.

5. Review your app registration summary. To make changes, click **Edit**. If the app registration looks OK, click **Back to Dashboard**.

# Step 3: Authorize credentials for a desktop application

1. In the Google Cloud console, go to **menu > APIs & Services > Credentials**.

[Go to Credentials](https://console.cloud.google.com/apis/credentials)

2. Click Create **Credentials** > **OAuth client ID**.
   
3. Click **Application type** > **Desktop app**.

4. In the **Name** field, type a name for the credential. This name is only shown in the Google Cloud console.
   
5. Click **Create**. The OAuth client created screen appears, showing your new Client ID and Client secret.
   
6. Click **OK**. The newly created credential appears under **OAuth 2.0 Client IDs**.

7. Save the downloaded JSON file as **credentials.json**, and move the file to your working directory.

8. Need to save files **token.json** (automatic generate) and **credentials.json** here:
   
   <img width="309" alt="image" src="https://github.com/user-attachments/assets/75fa379f-afe9-467a-a7b8-b444dc55c85b">

# How to run

```sh
node index.js
```

# API

## Create Meeting

```js
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
```

```js
const payload = {
        config: {
            "accessType": "TRUSTED",
            "entryPointAccess": "ALL"
        }
    }
```
## Get Meeting

## End Active Meeting 

## Get conference Meeting

## Get conference Meeting
