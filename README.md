# Todo App with User Authentication

## Overview

This Todo App is a RESTful API developed using Express.js and MongoDB. It supports user authentication, allowing users to securely manage their todo lists. Each user can sign up, log in, and perform CRUD operations on their todo items. This project utilizes JWT for handling authentication and bcrypt for password hashing, ensuring data security and user privacy.

## Features

-   User Authentication (Signup/Login)
-   CRUD operations for todo items
-   JWT-based session management
-   Secure password handling with bcrypt
-   MongoDB for data persistence

## Prerequisites

Before you begin, ensure you have the following installed:

-   Node.js (v12 or later)
-   npm (comes with Node.js)
-   MongoDB (local or remote instance)

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/oulaydi/todoApp.git
cd todo-app
```

### 2. Install Dependencies

```sh
npm install
```
### 3. Start the Server
 
```sh
npm start
```