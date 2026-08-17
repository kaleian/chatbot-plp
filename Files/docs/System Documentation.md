# NORTHSTAR RETAIL CO. — SUPPORT DEFLECTION MVP
## SYSTEM DOCUMENTATION

### 1. PROJECT OVERVIEW
The Northstar Support Deflection MVP is a chatbot designed to reduce repetitive customer-support tickets by providing immediate assistance for common customer questions.

The MVP supports at least two ticket categories:
- Order Status
- Returns & Refunds.

The goal is to demonstrate that chatbot-based support deflection can reduce manual ticket handling and provide customers with faster responses.

### 2. PROJECT OBJECTIVES
- Reduce repetitive customer-support tickets.
- Provide immediate answers to common customer questions.
- Allow customers to check order information.
- Provide guidance on returns and refunds.
- Demonstrate a working Support Deflection MVP.
- Provide a foundation that Northstar can extend after handover.

### 3. SYSTEM ARCHITECTURE

Customer
   ↓
Chatbot Interface
   ↓
Chatbot Logic / Conversation Flows
   ↓
Backend
   ↓
Order Lookup / Required Data
   ↓
Response
   ↓
Chatbot Interface
   ↓
Customer

### 4. SYSTEM COMPONENTS

#### Chatbot Interface
The frontend provides the customer-facing chat interface.

Responsibilities:
- Display the chatbot.
- Accept customer messages.
- Display chatbot responses.
- Show loading states.
- Display appropriate errors.

#### Chatbot Logic
The chatbot logic processes customer messages and determines the appropriate conversation flow.

Responsibilities:
- Receive customer messages.
- Identify the customer's request.
- Select the appropriate support flow.
- Request additional information when required.
- Generate appropriate responses.
- Handle unsupported questions.

#### Backend
The backend provides the services required by the chatbot.

Responsibilities:
- Receive requests.
- Process requests.
- Retrieve required data.
- Return responses.
- Handle errors.

#### Order Lookup
The order lookup component provides information required for order-status requests.

Possible information includes:
- Order number
- Order status
- Shipping status
- Delivery status

### 5. SUPPORTED SUPPORT CATEGORIES

#### ORDER STATUS
Example questions:
- Where is my order?
- Has my order shipped?
- Can I check my order status?

Flow:

Customer Question
→ Identify Order Status Request
→ Request Order Number
→ Look Up Order
→ Return Order Status
→ Display Response

#### RETURNS & REFUNDS
Example questions:
- How do I return this item?
- How can I request a refund?
- When will I receive my refund?

The chatbot identifies the request and provides the appropriate return or refund guidance.

### 6. END-TO-END REQUEST FLOW

1. Customer opens the chatbot.
2. Customer submits a question.
3. Frontend sends the message.
4. Chatbot logic identifies the request.
5. Required backend functionality is called.
6. Required information is retrieved or processed.
7. A response is returned.
8. The chatbot displays the response.
9. The customer receives assistance.

### 7. ERROR HANDLING

The system should handle errors without exposing technical information to customers.

#### Invalid Order
If an order number cannot be found, the chatbot should inform the customer and allow them to try again.

#### Unsupported Question
If the chatbot cannot handle a question, it should provide a helpful fallback response.

Example:

"I'm sorry, I can't help with that request yet. Please contact Northstar Support for further assistance."

#### Backend Failure
If the backend is unavailable, the chatbot should display an appropriate error message instead of crashing or exposing technical errors.

### 8. TEAM RESPONSIBILITIES

| Member | Responsibility |
|---|---|
| Clarryson | Team Lead / Requirements / Integration |
| Ketim | Frontend / Chatbot Interface |
| Ian | Backend / Order Data / Order Lookup |
| Cosmas | Chatbot Logic / Conversation Flows |
| Gladys | Testing / Deployment / Handover |
|Hopesone Emirundu|Project Coordinator|

### 9. DEVELOPMENT WORKFLOW

Each member works on an assigned GitHub Issue using an individual branch.

Issue
→ Branch
→ Development
→ Commit
→ Push
→ Pull Request
→ Review
→ Merge
→ Issue Closed

Completed work must be reviewed before being merged into `main`.

### 10. BRANCH NAMING CONVENTION

Format:

`<type>/<short-task-name>`

Examples:
- `feature/chatbot-interface`
- `feature/order-lookup`
- `feature/chatbot-logic`
- `feature/chatbot-integration`
- `fix/order-status-error`
- `test/chatbot-flows`
- `docs/system-documentation`

### 11. COMMIT NAMING CONVENTION

Format:

`<type>: <what changed> - <why it matters>`

Examples:
- `feat: add chatbot interface - allows customers to submit support questions`
- `feat: add order lookup API - allows customers to check order status`
- `feat: add support flows - handles order and refund questions`
- `fix: handle invalid order numbers - prevents failed order lookups`
- `test: verify chatbot flows - confirms supported questions work correctly`
- `docs: add system documentation - explains system operation and maintenance'
- 'docs: add chatbot logic - provides guidance for return & refunds and chatbot conversation with customers'

The following commit messages should not be used:
- `wip`
- `updates`
- `changes`
- `final`
- `stuff`

### 12. PULL REQUEST REQUIREMENTS

Every completed task should be submitted through a Pull Request.

The Pull Request should:
- Clearly describe the changes.
- Reference the related GitHub Issue.
- Be reviewed by another team member.
- Pass the required testing.
- Be merged into `main` after approval.

Where appropriate, use:

`Closes #<issue-number>`

### 13. TESTING REQUIREMENTS

Before the MVP is considered complete, verify that:

- The chatbot interface loads correctly.
- Customers can submit messages.
- Chatbot logic identifies supported requests.
- Order lookup works correctly.
- Order-status responses are displayed correctly.
- Returns/refunds flow works correctly.
- Invalid input is handled correctly.
- Unsupported questions receive a fallback response.
- Backend errors are handled appropriately.
- The complete chatbot works end-to-end.

### 14. END-TO-END TEST CASES

#### Test 1 — Order Status

Input:
"Where is my order?"

Expected:
The chatbot identifies the order-status request, requests the required order information, performs the lookup, and displays the appropriate order status.

#### Test 2 — Returns & Refunds

Input:
"How do I return this item?"

Expected:
The chatbot identifies the returns/refunds request and provides the appropriate guidance.

#### Test 3 — Unsupported Request

Input:
"Can you recommend a movie?"

Expected:
The chatbot provides a suitable fallback response instead of an incorrect support answer.

### 15. DEPLOYMENT

Before deployment:

1. Confirm the application works locally.
2. Run available tests.
3. Verify required environment variables.
4. Verify backend connectivity.
5. Verify chatbot flows.
6. Test the production build.
7. Deploy the application.
8. Perform a final end-to-end test.

Secrets and credentials must never be committed to GitHub.

### 16. MAINTENANCE AND HANDOVER

The handover to Northstar should include:

- Repository access.
- Setup instructions.
- Required environment variables.
- Deployment information.
- Supported chatbot flows.
- Known limitations.
- Testing instructions.
- Future improvement recommendations.

### 17. KNOWN LIMITATIONS

This is an MVP and is not intended to be a complete production customer-support platform.

Potential limitations include:
- Limited supported support categories.
- Limited order data.
- Limited conversation flows.
- Limited human-agent escalation.
- Limited analytics.
- Limited authentication depending on the implementation.
- Responses may require further refinement before production use.

The team should update this section with the actual limitations discovered during testing.

### 18. FUTURE IMPROVEMENTS

Potential improvements include:
- Add stock-availability support.
- Add more customer-support categories.
- Add human-agent escalation.
- Add conversation history.
- Add customer authentication.
- Add analytics and support-deflection metrics.
- Add multilingual support.
- Improve chatbot response accuracy.
- Integrate with Northstar's production order-management system.

### 19. SUCCESS CRITERIA

The Support Deflection MVP is considered successful when:

- At least two support categories are supported.
- Customers can interact with the chatbot.
- Supported questions receive appropriate responses.
- Required backend functionality works.
- The major chatbot components work together.
- The complete flow has been tested end-to-end.
- The system can be demonstrated successfully to Northstar Retail Co.

### 20. PROJECT STATUS

Project: Northstar Retail Co. Support Deflection MVP

Purpose: Reduce repetitive customer-support tickets through chatbot-based support deflection.

Status: MVP

Team: Northstar Sprint Team.
