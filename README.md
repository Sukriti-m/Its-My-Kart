# Its-My-Kart
## A. CUSTOMER API 
### 1. ADD CUSTOMER
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
### 2. EDIT CUSTOMER
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
### 3. VIEW CUSTOMER
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
### 4. DELETE CUSTOMER
METHOD: DELETE , URL: /customer/id

RESPONSE:  
```
{
   "Customer data deleted"
}
```
## B. PRODUCT API 
### 1. ADD PRODUCT
METHOD: POST , REQUEST FORMAT: JSON , URL: /product/add 
  
FORMAT:  
```
{
"name":"String",
"about":"String",
"category":"Array",
"color":"String",
"size":"String",
"price":"Number"
}

```
EXAMPLE:  
```
{
"name":"turtle neck top",
"about":"A floral turtle neck top made of crepe fabric.",
"category":["women","crepe"],
"color":"green",
"size":"L",
"price":"999"
}  
```
RESPONSE:  
```
{
    "name": "turtle neck top",
    "about": "A floral turtle neck top made of crepe fabric.",
    "category": [
        "women",
        "crepe"
    ],
    "size": "L",
    "color": "green",
    "price": 999,
    "_id": "62d9408c3be23f93e6b20668",
    "__v": 0
}
```
### 2. EDIT PRODUCT
METHOD: PUT , REQUEST FORMAT: JSON , URL: /product/id
  
FORMAT:  
```
{
"name":"String",
"about":"String",
"category":"Array",
"color":"String",
"size":"String",
"price":"Number"
}

```
EXAMPLE:  
```
{
"name":"turtle neck top",
"about":"A floral turtle neck top made of crepe fabric.",
"category":["women","crepe","top"],
"color":"black",
"size":"XL",
"price":"999"
}  
```
RESPONSE:  
```
{
    "_id": "62d9408c3be23f93e6b20668",
    "name": "turtle neck top",
    "about": "A floral turtle neck top made of crepe fabric.",
    "category": [
        "women",
        "crepe",
        "top"
    ],
    "size": "XL",
    "color": "black",
    "price": 999,
    "__v": 0
}
```
### 3. VIEW PRODUCT
METHOD: GET , URL: /product/id

RESPONSE:  
```
{
    "_id": "62d9408c3be23f93e6b20668",
    "name": "turtle neck top",
    "about": "A floral turtle neck top made of crepe fabric.",
    "category": [
        "women",
        "crepe",
        "top"
    ],
    "size": "XL",
    "color": "black",
    "price": 999,
    "__v": 0
}
```
### 4. DELETE PRODUCT
METHOD: DELETE , URL: /product/id

RESPONSE:  
```
{
   "Product data deleted"
}
```
## C. ORDER API 
### 1. ADD ORDER
METHOD: POST , REQUEST FORMAT: JSON , URL: /order/add 
  
FORMAT:  
```
{
"customerId":"String",
"products":"Array",
"status":"String"
}

```
EXAMPLE:  
```
{
"customerId":"62d8f266952381267704adb1",
"products":[
{"productId":"62d8ffb71e4890ee3029f9f8",
"quantity":2}
],
"status":"pending"
} 
```
RESPONSE:  
```
{
    "customerId": "62d8f266952381267704adb1",
    "products": [
        {
            "productId": "62d8ffb71e4890ee3029f9f8",
            "quantity": 2,
            "_id": "62d944423be23f93e6b20671"
        }
    ],
    "totalCost": 0,
    "status": "pending",
    "_id": "62d944423be23f93e6b20670",
    "__v": 0
}
```
### 2. EDIT ORDER
METHOD: PUT , REQUEST FORMAT: JSON , URL: /order/id
  
FORMAT:  
```
{
"customerId":"String",
"products":"Array",
"status":"String"
}

```
EXAMPLE:  
```
{
"customerId":"62d8f266952381267704adb1",
"products":[
{"productId":"62d8ffb71e4890ee3029f9f8",
"quantity":1}
],
"status":"completed"
} 
```
RESPONSE:  
```
{
    "_id": "62d94b49aeb7f21257b4fa23",
    "customerId": "62d8f266952381267704adb1",
    "products": [
        {
            "productId": "62d8ffb71e4890ee3029f9f8",
            "quantity": 1,
            "_id": "62d94bc8aeb7f21257b4fa2e"
        }
    ],
    "totalCost": 499,
    "status": "completed",
    "__v": 0
}
```
### 3. VIEW ORDER
METHOD: GET , URL: /order/id

RESPONSE:  
```
{
    "_id": "62d94b49aeb7f21257b4fa23",
    "customerId": "62d8f266952381267704adb1",
    "products": [
        {
            "productId": "62d8ffb71e4890ee3029f9f8",
            "quantity": 1,
            "_id": "62d94bddaeb7f21257b4fa32"
        }
    ],
    "totalCost": 499,
    "status": "completed",
    "__v": 0
}
```
### 4. DELETE ORDER
METHOD: DELETE , URL: /order/id

RESPONSE:  
```
{
   "Order data deleted"
}
```
