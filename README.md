# Timestamp Microservice

## Overview
A simple lightweight microservice built with **Node.js** and **Express.js**, developed for the **Back End Development and APIs** certification of **freeCodeCamp**. It exposes a simple REST API that converts a date string or UNIX timestamp into a standardized JSON object containing both the UNIX timestamp (ms) and the equivalent UTC date string.

## Tech Stack
- **Language:** JavaScript
- **Runtime:** Node.js
- **Framework:** Express.js
- **Middleware:** CORS
- **Package Manager:** npm
- **Version Control:** Git
- **Editor:** VS Code

## System Architecture
- **API Design:** RESTful API returning JSON responses
- **Routing:** Parameter-based routing (`/api/:date?`) handled via Express
- **Date Parsing:** Uses JavaScript's native `Date` object combined with regex validation (`/^\d+$/`) to distinguish UNIX timestamps from date strings
- **Error Handling:** Invalid inputs are caught via `isNaN` checks on the parsed date and returned as structured error JSON

## Folder Structure
```
timestamp-microservice/
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

## API Endpoints

### 1. Get Current Timestamp
**Endpoint:** `GET /api`

No parameters. Returns the current UNIX timestamp and UTC date.

**Response:**
```json
{
  "unix": 1785407159512,
  "utc": "Thu, 30 Jul 2026 10:25:59 GMT"
}
```

### 2. Parse Date String
**Endpoint:** `GET /api/:date`

**Example Request:** `/api/2015-12-25`

**Response:**
```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

### 3. Parse UNIX Timestamp
**Endpoint:** `GET /api/:date`

**Example Request:** `/api/1451001600000`

**Response:**
```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

## Error Handling
Invalid date inputs return a structured error object instead of crashing the server.

**Example Request:** `/api/invalid-date-string`

**Response:**
```json
{
  "error": "Invalid Date"
}
```

## How to Run Locally

1. **Clone the repository**
```bash
   git clone https://github.com/bhuvangolhar/time.stamp-microservice.git
   cd time.stamp-microservice
```

2. **Install dependencies**
```bash
   npm install
```

3. **Start the server**
```bash
   node index.js
```

4. **Access the service**
   Open your browser or a tool like Thunder Client and go to:
```
   http://localhost:3000/api/2015-12-25
```