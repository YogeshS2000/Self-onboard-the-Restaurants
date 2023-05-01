# Self-onboard-the-Restaurants

Overview

The goal of this system is to collect basic merchant details for restaurants that want to self-onboard to the food delivery company's platform. The system uses a RESTful API built with Node.js and a MongoDB database to store and retrieve the data. The API allows users to add new restaurants. The data collected for each restaurant includes the following fields:

Restaurant name: the name of the restaurant

Contact name: the name of the person to contact at the restaurant

Pincode: the postal code or zip code of the restaurant's location

Location: the address or location of the restaurant

Website: the restaurant's website URL (optional)

Phone number: the restaurant's phone number

Average daily transactions: the average number of daily transactions for the restaurant

The API also includes input validation to ensure that the data entered is valid.


Technologies Used

Node.js(express,mongoose,express-validator,nodemon,body-parser)

MongoDB

API Endpoints

The API includes the following endpoints:


GET : 

Route:-  /

This endpoint retrieves a list of all the restaurants in the database. The response body is a JSON array of restaurant objects, where each object contains the fields listed above.

output:

![image](https://user-images.githubusercontent.com/126409939/235437571-59e38333-e3ca-4dec-9e08-d692413ab61b.png)

![form img](https://user-images.githubusercontent.com/126409939/235437583-c85160e6-6100-44f8-a28f-bcf3256d392f.png)


POST: 

Route:-  /

This endpoint allows users to add a new restaurant to the database. The request body should be a JSON object with the following fields:

restaurant_name (required)

contact_name (required)

Pincode (required)

location (required)

website (optional)

phone_number (required)

avg_daily_transactions (required)

If the input data is valid, the restaurant is added to the database and the response body is the new restaurant object. If the input data is invalid, the response body is a JSON object with an "errors" field that lists the validation errors.


output:if successfully submited form

![success img](https://user-images.githubusercontent.com/126409939/235437684-b38b33b1-992a-4acd-b7c0-5f369ec9b068.png)

if form is not submited properly

![error msg img](https://user-images.githubusercontent.com/126409939/235437786-082043ca-d34b-44ec-97f1-23dbe9f61860.png)


Database:

MongoDB Atlas Cloud database is used to store the data.Before running the code first and signin and connect the mongodb atlas cloud, Here merchantDB as database name and merchants as collection name are used.

output:

{

    "_id":{"$oid":"644f8a50adb470a237316e81"},
    
    "restaurant_name":"Shaalimar Hotel",
    
    "contact_name":"Nikhil Kumar",
    
    "pincode":"560064",
    
    "location":"Baglur,Yelahanka,Banaglore,Karnataka 560064",
    
    "website":"optional",
    
    "phone_number":{"$numberDouble":"8520753951.0"},
    
    "average_daily_transactions":{"$numberInt":"500"},
    
    "__v":{"$numberInt":"0"}
    
}

![image](https://user-images.githubusercontent.com/126409939/235438467-521c688b-a3ec-4ef2-8b82-09723a660f10.png)

 

Input Validation

The API uses the express-validator middleware to validate the input data. The following validations are applied:


The restaurantName and contactName fields must not be empty.

The Pincode field must be a valid integer of length 6 and must not be empty.

The phoneNumber field must be a valid 10-digit phone number and must not be empty.

The avgDailyTransactions field must be a valid integer of length 3.

If any of the validations fail, the API returns a 400 Bad Request error with an error message that describes the validation error.


