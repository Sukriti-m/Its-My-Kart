# Its-My-Kart

## 1. ADD CUSTOMER
METHOD: POST , REQUEST FORMAT: JSON , URL: /customer/add 
  
FORMAT:  
```
{
"userName":"String",
"email":"String",
"password":"String",
"address":"String",
"phoneNumber":"Number"
}

```
EXAMPLE:  
```
{  
"userName":"Nate",
"email":"nate@gmail.com",
"password":"ignate",
"address":"india",
"phoneNumber":"1234567890"
}  
```
RESPONSE:  
```
{
    "userName": "Nate",
    "email": "nate@gmail.com",
    "password": "$2b$10$6AGaRiMEuChvlR.kF6GXduZ7TELZlrqyZdXcz5Mz3ZtdgKEuyFmsK",
    "phoneNumber": 1234567890,
    "address": "india",
    "_id": "62d93c2c3be23f93e6b20660",
    "__v": 0
}
```
## 2. EDIT CUSTOMER
METHOD: PUT , REQUEST FORMAT: JSON , URL: /customer/id
  
FORMAT:  
```
{
"userName":"String",
"email":"String",
"password":"String",
"address":"String",
"phoneNumber":"Number"
}

```
EXAMPLE:  
```
{  
"userName":"Nate",
"email":"nate@gmail.com",
"password":"ignate",
"address":"uk",
"phoneNumber":"1234567890"
}  
```
RESPONSE:  
```
{
    "_id": "62d93c2c3be23f93e6b20660",
    "userName": "Nate",
    "email": "nate@gmail.com",
    "password": "ignate",
    "phoneNumber": 1234567890,
    "address": "uk",
    "__v": 0
}
```
## 3. VIEW CUSTOMER
METHOD: GET , URL: /customer/id

RESPONSE:  
```
{
    "_id": "62d93c2c3be23f93e6b20660",
    "userName": "Nate",
    "email": "nate@gmail.com",
    "password": "ignate",
    "phoneNumber": 1234567890,
    "address": "uk",
    "__v": 0
}
```
## 4. DELETE CUSTOMER
METHOD: DELETE , URL: /customer/id

RESPONSE:  
```
{
   "Customer data deleted"
}
```
