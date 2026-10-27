# Real Estate API — Project Specification

## 1. Purpose

Build a REST API for a real estate platform where customers can search properties, save favorites, submit enquiries, and track lead activity. Agents manage their own listings and leads. Administrators manage the platform.

## 2. User roles

- **Admin:** manage users, agents, areas, properties, and lead assignments.
- **Agent:** create and manage their own properties and assigned leads.
- **Customer:** search properties, save favorites, and submit enquiries.
- **Public visitor:** browse published properties and submit an enquiry.

## 3. Core resources

- Users
- Agents
- Properties
- Property images
- Areas
- Leads
- Lead activities
- Favorites

## 4. API conventions

- Base path: `/api/v1`
- JSON request and response bodies.
- Success: `{ "data": ..., "meta": ... }`
- Error: `{ "error": { "code": "...", "message": "..." } }`
- List responses include pagination metadata.
- Validate request bodies, query parameters, and path parameters.
- Use appropriate HTTP status codes.
- Protect private endpoints with authentication and role-based authorization.

## 5. Initial endpoint groups

- `/auth` — registration, login, refresh, logout
- `/users` — user management
- `/agents` — agent profiles
- `/properties` — listing CRUD, search, filters, sorting
- `/properties/:id/images` — property images
- `/areas` — area lookup
- `/leads` — public enquiries and lead management
- `/leads/:id/activities` — lead activity history
- `/favorites` — customer favorites
- `/health` — application health

## 6. Non-functional requirements

- PostgreSQL for persistent data.
- Prisma for database access and migrations.
- Redis for caching and background job infrastructure.
- Password hashing, JWT authentication, authorization, and rate limiting.
- Automated tests for important business rules.
- OpenAPI/Swagger documentation.
- Docker-based local development and CI checks.

## 7. Development approach

Build in phases. Commit working changes frequently. Record important bugs, fixes, design decisions, and measured performance results. Never invent performance numbers for the portfolio.