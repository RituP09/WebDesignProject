# WebDesignProject

**Student Name**: Ritu Gunvantkumar patel  
**Student Number**: 8959313  
**Date**: 21/7/2024

### Technology Stack

**Frontend**: ReactJS  
**Backend**: Node.js with Express  
**Database**: MongoDB(Atlas)

### Project Setup

1. **Project Initialization**: Repository created on GitHub and cloned to local machine.
2. **Frontend Setup**: Initialized ReactJS project.
3. **Backend Setup**: Initialized Node.js project with Express and connected to MongoDB (Atlas).
- User Name for Admin is admin
- Password for Admin is Admin#12

### Database Schema Design

**User Schema**

- `username`: String
- `password`: String
- `email`: String
- `role`: String

**Category Schema**

- `category_name`: String
- `description`: String

**Products Schema**

- `product_name`: String
- `price`: Number
- `category_id`: ObjectId
- `stock_qty`: Number
- `description`: String
- `image_url`: String

**Order Details Schema**

- `order_id`: ObjectId
- `product_id`: ObjectId
- `qty`: Number
- `price`: Number

**Shopping Cart Schema**

- `user_id`: ObjectId
- `product_id`: ObjectId
- `qty`: Number

**Orders Schema**

- `user_id`: ObjectId
- `total_amount`: Number
- `order_date`: Date
- `status`: String

### Notes

- The project is set up using GitHub for version control.


