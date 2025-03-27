# Express API with Prisma and PostgreSQL

This is a RESTful API built with Express.js, TypeScript, and Prisma ORM, using PostgreSQL as the database. The API provides endpoints for managing client information.

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

## Project Structure

```
├── src/
│   ├── index.ts      # Main application file
│   └── prisma.ts     # Prisma client configuration
├── prisma/
│   └── schema.prisma # Database schema
├── package.json      # Project dependencies
└── tsconfig.json     # TypeScript configuration
```

## Setup

1. Clone the repository:

```bash
git clone https://github.com/Santiagomunozma/Api-express/tree/master#
cd mi_api
```

2. Install dependencies:

```bash
npm install
```

3. Set up your PostgreSQL database and update the connection URL in `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = "postgresql://postgres:120870@localhost:5432/Mi_equipo?schema=public"
}
```

4. Initialize the database:

```bash
npm run migrate
```

## Running the Application

Development mode:

```bash
npm run dev
```

The server will start on port 1208.

## API Endpoints

### GET /saludo

A simple greeting endpoint.

### GET /usuarios

Retrieves all clients from the database.

### POST /clientes

Creates a new client.

Request body:

```json
{
  "nombre": "string",
  "edad": number,
  "celular": "string"
}
```

### PUT /clientes/:id

Updates an existing client.

Request body:

```json
{
  "nombre": "string",
  "edad": number,
  "celular": "string"
}
```

### DELETE /clientes/:id

Deletes a client by ID.

## Database Schema

The application uses a simple client model with the following fields:

- id: Auto-incrementing primary key
- nombre: Client name
- edad: Client age
- celular: Client phone number

## Technologies Used

- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Node.js

## Development

To create new database migrations:

```bash
npm run migrate
```

## License

ISC
