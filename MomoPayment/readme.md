# Reference
[Source code Nodejs](https://github.com/momo-wallet/payment/blob/master/nodejs/CollectionLink.js)

[Collection Link - Request Payment](https://developers.momo.vn/v3/docs/payment/api/collection-link)

[Check Transaction Status](https://developers.momo.vn/v3/docs/payment/api/payment-api/query)

[Download UART Momo App to test](https://developers.momo.vn/v3/download)

# Example
1. Api **localhost:8000/request-momo-payment**

<img width="848" alt="image" src="https://github.com/user-attachments/assets/620f065f-9d04-48c0-bad9-d515c13d3e61">


2. Api **localhost:8000/check-momo-transaction-status**

<img width="857" alt="image" src="https://github.com/user-attachments/assets/1ea183fa-9b83-485f-8edf-5065afb3a84f">

When Click **payUrl** or **shortLink** of **request-momo-payment** response

<img width="1256" alt="image" src="https://github.com/user-attachments/assets/90c868dd-4b80-43ea-9eb9-99ca99177972">

Then click Tiếp tục will show 

<img width="1123" alt="image" src="https://github.com/user-attachments/assets/47bec969-0dd1-403b-bf11-2cf577fd3a83">

Then, User will go to Momo App and scan payment, 
after scan payment:

1. Go to **redirectUrl** if success

<img width="949" alt="image" src="https://github.com/user-attachments/assets/fca01ef5-59b5-4564-b803-0238a9f284a3">

2. call callback if Success or Failed (Maybe lost a little request)

   <img width="469" alt="image" src="https://github.com/user-attachments/assets/02896665-6125-4a39-b07d-39ee4c6eccca">

# Getting Start

