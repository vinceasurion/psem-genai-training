# GitHub Copilot instruction

This backend is designed as a **modular, scalable, and maintainable REST API** using **Node.js + Express.js**. It follows best practices aligned with:

- Maintainability
- Scalability
- Security
- High Availability
- 12-Factor App methodology

## Project Structure

server/
├── index.js                   # Entry point, sets up app & routes
├── config/
│   ├── db.js                  # DB connection logic (if needed)
│   └── env.js                 # Environment config loader
├── routes/
│   ├── index.js               # Mounts all route modules
│   ├── claims.routes.js       # Phone insurance claims routes
│   └── users.routes.js        # Example for future expansion
├── controllers/
│   ├── claims.controller.js   # Claim request handlers
│   └── users.controller.js    # (Optional future module)
├── models/
│   ├── claim.model.js         # Schema or class for claim object
│   └── user.model.js          # (Optional future model)
├── services/
│   └── claims.service.js      # Business logic separate from controller
├── middlewares/
│   ├── auth.middleware.js     # (Future) JWT Auth handling
│   ├── error.middleware.js    # Central error handler
│   └── cors.middleware.js     # CORS config
├── utils/
│   ├── logger.js              # (Optional) Logging util
│   └── validator.js           # Shared validation helper
├── data/
│   └── claims.json            # (Optional) Mock storage
└── .env                       # Environment variables

Each module should be:

- Isolated
- Self-contained (model + routes + controller + service)
- Plugged via `routes/index.js`

## 🌐 API Modules Copilot Should Support

- `/api/claims` → Handles CRUD for insurance claims
- `/api/users` → (Optional) Account or customer info
- `/api/devices` → (Optional) Device model info
- `/api/repairs` → (Optional) Repair history or status

## REST Guidelines

When generating or creating endpoint, follow this REST Guidelines.

- GET /api/resource            # Read all resource
- GET /api/resource/:id        # Read single resource
- PUT /api/resource/:id        # Update single resource
- DELETE /api/resource/:id     # Delete single resource

## Core Principles

Always follow these architectural principles when generating code:

### 1. Maintainability

- Write clean, readable code with descriptive variable and function names
- Use consistent formatting and follow established code style guides
- Add meaningful comments for complex logic, not obvious code
- Separate concerns into distinct modules/functions
- Keep functions small and focused on a single responsibility
- Avoid deep nesting and complex conditional logic

### 2. Scalability & Performance

- Design for horizontal scaling when possible
- Use efficient algorithms and data structures
- Implement proper caching strategies
- Avoid N+1 queries and other performance anti-patterns
- Consider memory usage and optimize for large datasets
- Use asynchronous operations where appropriate

### 3. Reliability & Error Handling

- Always include proper error handling with try-catch blocks
- Validate inputs and handle edge cases
- Implement graceful degradation patterns
- Add logging for debugging and monitoring
- Use circuit breaker patterns for external service calls
- Include proper timeout handling

### 4. Security & Config

- Never hardcode sensitive information (passwords, API keys, etc.)
- Validate and sanitize all user inputs
- Use parameterized queries to prevent SQL injection
- Implement proper authentication and authorization
- Follow security best practices for the specific technology stack
- Consider data encryption for sensitive information
- Load config from .env using dotenv
- Use middleware for:
  - CORS (cors)
  - JSON parsing (express.json)
  - Auth (JWT or session) in middlewares/auth.middleware.js
- Protect /api routes behind auth middleware (in future)
- Add logging using winston via utils/logger.js

### 5. Testability

- Write code that is easy to test with clear inputs/outputs
- Use dependency injection for better testability
- Avoid static dependencies and global state
- Create testable units with minimal external dependencies
- Include example test cases when generating functions
- Follow testing pyramid principles

### 6. Flexibility & Extensibility

- Use interfaces and abstractions to reduce coupling
- Apply SOLID principles (Single Responsibility, Open/Closed, etc.)
- Implement dependency injection patterns
- Use configuration files instead of hardcoded values
- Design for extension without modification
- Use design patterns appropriately (Factory, Strategy, Observer, etc.)

### 7. Observability

- Include structured logging with appropriate log levels
- Add metrics and monitoring hooks
- Implement health check endpoints
- Include correlation IDs for request tracing
- Add performance monitoring for critical paths
- Include debugging information without exposing sensitive data

### 8. Simplicity

- Choose the simplest solution that meets requirements
- Avoid over-engineering and premature optimization
- Use well-established patterns and libraries
- Minimize dependencies and external complexity
- Write self-documenting code that explains intent
- Refactor complex code into simpler, more understandable pieces

## Code Generation Rules

When generating code, always:

1. Include proper error handling and input validation
2. Add relevant comments explaining the “why” not the “what”
3. Use meaningful variable and function names
4. Structure code with proper separation of concerns
5. Include basic tests or test examples when appropriate
6. Consider performance implications of the generated code
7. Follow the specific language’s best practices and conventions
8. Include necessary imports and dependencies
9. Add TODO comments for areas that need further consideration
10. Suggest refactoring opportunities when code becomes complex

## Technology-Specific Guidelines

- Database code: Use parameterized queries, implement proper connection pooling, handle transactions correctly
- API development: Include proper status codes, request validation, rate limiting considerations
- Frontend code: Consider accessibility, performance, and user experience
- Infrastructure code: Include proper resource management and cleanup
- Configuration: Use environment variables and configuration files appropriately

## Code Review Checklist

Before suggesting code, verify it meets these criteria:

- Is the code readable and maintainable?
- Are there proper error handling mechanisms?
- Is the code secure and free from common vulnerabilities?
- Is the code testable and includes test examples?
- Does the code follow performance best practices?
- Is the code flexible and extensible?
- Are there appropriate logging and monitoring hooks?
- Is the solution as simple as possible while meeting requirements?

## Example Patterns to Follow

```js
// Good: Proper error handling, validation, and structure
async function processUserData(userData) {
  try {

    // Validate input
    if (!userData || !userData.email) {
      throw new Error('Invalid user data: email is required');
    }

    // Log the operation
    logger.info('Processing user data', { userId: userData.id });

    // Process with proper error handling
    const result = await userService.processUser(userData);

    // Return structured response
    return {
      success: true,
      data: result,
    };

  } catch (error) {
    // Log error with context
    logger.error('Failed to process user data', {
      error: error.message,
      userId: userData?.id
    });

    // Return error response
    return {
      success: false,
      error: error.message,
    };

  }
}

```

## Mounting routes

```js
// routes/index.js
const express = require("express");
const router = express.Router();

router.use("/claims", require("./claims.routes"));
router.use("/users", require("./users.routes")); // scalable

module.exports = router;

// index.js
const app = express();
app.use("/api", require("./routes"));
```
