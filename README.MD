# Dynamic Profile Endpoint (Typescript)

A RESTful API built with TypeScript, Express, and Node.js that returns profile information and a random cat fact from the Cat Facts API.

## Setup

1. Clone the repository:

```bash
git clone <repo-url>
cd profile-endpoint-ts
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file based on .env.example

4. Build and run:

```bash
npm run build
npm start
```

or run in development mode:

```bash
npm run dev
```

## API Endpoint

- GET /me: Returns profile info and a random cat fact.

Response:

```json
{
  "status": "success",
  "user": {
    "email": "your.email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express/TypeScript"
  },
  "timestamp": "2025-10-16T20:55:00.123Z",
  "fact": "Cats can jump up to six times their length."
}
```

## Dependencies

- express
- axios
- dotenv
- typescript
- @types/express
- @types/node
- ts-node
- nodemon
