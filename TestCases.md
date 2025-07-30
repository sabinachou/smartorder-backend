# SmartOrder Backend – API Test Cases

This document outlines the API test cases for the SmartOrder backend, covering both successful and edge cases to ensure proper functionality and database integration.

---

## 1. GET `/api/menu`

**Purpose:** Retrieve all menu items  
**Method:** GET  
**URL:** `http://localhost:3001/api/menu`

### Expected Response:
- HTTP 200 OK
- Returns a JSON array of menu items:

```json
[
  { "id": 1, "name": "Classic Burger", "price": 8 },
  { "id": 2, "name": "Fries", "price": 3 },
  { "id": 3, "name": "Milkshake", "price": 5 },
  { "id": 4, "name": "Chicken Sandwich", "price": 7 },
  { "id": 5, "name": "Iced Tea", "price": 2 }
]
## Actual Result:
Returned the correct list of menu items.

## Test Result: Passed

🧪 2. POST /api/order – Valid Order
Purpose: Successfully place a new order
Method: POST
URL: http://localhost:3001/api/order

{
  "items": [
    { "productId": 1, "quantity": 2 },
    { "productId": 3, "quantity": 1 }
  ]
}
###  Expected Response:
{
  "orderId": 6,
  "status": "success"
}

Actual Result:
Order was placed and response matched expectation.

Test Result: Passed


3. POST /api/order – Empty Items Array

Request Payload:

{
  "items": []
}
Expected Response:

{
  "error": "Invalid order items"
}
Test Result: Passed (Proper 400 error returned)

4. POST /api/order – Missing items Field
Request Payload:

Expected Response:

{
  "error": "Invalid order items"
}
Test Result: Passed (Proper 400 error returned)

 Conclusion
These test cases verify that the core API functions and error-handling mechanisms are working correctly, with proper database integration.


