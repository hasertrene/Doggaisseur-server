## Entities
 
### Services
 
| key        | data type | required | notes                           |
| ---------- | --------- | -------- | ------------------------------- |
| id         | Integer   | yes      | Already added by model:generate |
| title      | String    | yes      |                                 |
| imageUrl   | String    | yes      |                                 |
| price      | Integer   | yes      |                                 |
| description | Text     | no       | 
| createdAt  | Date      | yes      | Already added by model:generate |
| updatedAt  | Date      | yes      | Already added by model:generate |
 
**Relations:**
 
 
 
### Cart
 
| key       | data type | required | notes                                |
| --------- | --------- | -------- | ------------------------------------ |
| id        | Integer   | yes      | Already added by model:generate      |
| userId    | Integer   | yes      | Unique Foreign Key (refers to User.id|                            
| cartItemId| Integer   | yes      | Foreign Key (references a cartItems.id)|
| createdAt | Date      | yes      | Already added by model:generate      |
| updatedAt | Date      | yes      | Already added by model:generate      |
 
**Relations:**
-
 
### CartItems
 
| key       | data type | required | notes                                |
| --------- | --------- | -------- | ------------------------------------ |
| id        | Integer   | yes      | Already added by model:generate      |
| service   | Integer   | yes      | Foreign key (references an ServiceId)|
| amount    | Integer   | yes      |                                      |
| createdAt | Date      | yes      | Already added by model:generate      |
| updatedAt | Date      | yes      | Already added by model:generate      |
| CartId    | Integer   | yes      | Foreign key (references a cart.id)   |
 
**Relations:**
 
-

### Feedback

| key       | data type | required | notes                                |
| ----------|-----------|----------|------------------------------------  |
| id        | Integer   | yes      | Already added by mode:generate .     |
| name      | String    | yes      |                                      |
| content   | Text      | yes      |                                      |
| service   | Integer   | yes      | Foreign Key (refereces service.id) . |
| createdAt | Date      | yes      | Already added by model:generate      |
| updatedAt | Date      | yes      | Already added by model:generate      | 
 
### User
 
| key       | data type | required | notes                              |
| --------- | --------- | -------- | ---------------------------------- |
| id        | Integer   | yes      | Already implemented                |
| name      | String    | yes      | Already implemented                |
| email     | Integer   | yes      | Already implemented, unique        |
| dogRace   | String    | no       |
| password  | String    | yes      | Already implemented, password hash |
| updatedAt | Date      | yes      | Already implemented                |
| createdAt | Date      | yes      | Already implemented                |

 
-
 
