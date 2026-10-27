# Real Estate API — Endpoint Plan

## Base URL

Local development: `http://localhost:3000`

API prefix: `/api/v1`

## 1. Health

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | `/health` | Public | Check whether the API is running |

## 2. Authentication

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| POST | `/auth/register` | Public | Register a customer |
| POST | `/auth/login` | Public | Log in |
| POST | `/auth/refresh` | Refresh token | Issue new access tokens |
| POST | `/auth/logout` | Authenticated | Log out and revoke the refresh session |

## 3. Users and agents

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | `/users/me` | Authenticated | View own profile |
| PATCH | `/users/me` | Authenticated | Update own profile |
| GET | `/agents` | Public | List agent profiles |
| GET | `/agents/:id` | Public | View an agent profile |
| POST | `/agents` | Admin | Create an agent profile |

## 4. Properties

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | `/properties` | Public | Search published properties |
| GET | `/properties/:id` | Public | View a property |
| POST | `/properties` | Agent/Admin | Create a property |
| PATCH | `/properties/:id` | Owner/Admin | Update a property |
| DELETE | `/properties/:id` | Owner/Admin | Archive a property |
| POST | `/properties/:id/images` | Owner/Admin | Add a property image |
| DELETE | `/properties/:id/images/:imageId` | Owner/Admin | Remove an image |

Property search query parameters will include:
- `page` and `limit`
- `cursor`
- `areaId`
- `minPrice` and `maxPrice`
- `bedrooms`
- `propertyType`
- `listingType`
- `sortBy` and `sortOrder`
- `search`

## 5. Areas

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | `/areas` | Public | List areas |
| GET | `/areas/:id` | Public | View an area |
| POST | `/areas` | Admin | Create an area |
| PATCH | `/areas/:id` | Admin | Update an area |
| DELETE | `/areas/:id` | Admin | Delete an unused area |

## 6. Leads

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| POST | `/leads` | Public | Submit a property enquiry |
| GET | `/leads` | Agent/Admin | List permitted leads |
| GET | `/leads/:id` | Assigned agent/Admin | View a lead |
| PATCH | `/leads/:id` | Assigned agent/Admin | Update lead status or assignment |
| GET | `/leads/:id/activities` | Assigned agent/Admin | View lead activity history |
| POST | `/leads/:id/activities` | Assigned agent/Admin | Add an activity note |

## 7. Favorites

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | `/favorites` | Customer | List own favorites |
| POST | `/favorites/:propertyId` | Customer | Add a favorite |
| DELETE | `/favorites/:propertyId` | Customer | Remove a favorite |

## 8. Admin

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | `/admin/stats` | Admin | View platform statistics |
| GET | `/admin/users` | Admin | List users |
| PATCH | `/admin/users/:id/role` | Admin | Change a user's role |

## API conventions

- All routes use the `/api/v1` prefix, except the health endpoint if configured separately.
- Requests and responses use JSON unless uploading files.
- Success responses use `{ "data": ..., "meta": ... }`.
- Error responses use `{ "error": { "code": "...", "message": "..." } }`.
- List endpoints include pagination metadata.
- Validate incoming data.
- Enforce authentication, roles, and resource ownership on protected routes.
- Use appropriate HTTP status codes.
- Never return password hashes or refresh tokens in ordinary API responses.

## Implementation order

1. Health and application configuration.
2. Database and Prisma.
3. Authentication and authorization.
4. Property listings.
5. Leads and activity history.
6. Favorites and areas.
7. Caching, background jobs, testing, and deployment.