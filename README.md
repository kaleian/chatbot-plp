# Group 108 chatbot-plp


# Northstar Support Deflection MVP

> A 1-week industry working simulation for Northstar Retail Co.

## 📌 Project Overview

Northstar Retail Co. is a mid-size e-commerce company whose support team is handling a large number of repetitive customer questions.

Our team has been tasked with building a **Support Deflection MVP** that demonstrates how a chatbot can reduce manual support ticket handling.

The MVP will focus on two support categories:

1. **Order Status**
2. **Returns & Refunds**

The goal is not to build a complete production system. The goal is to build a working MVP that demonstrates that repetitive customer questions can be answered automatically.

---

# 👥 Team

| Member | Primary Responsibility |
|---|---|
| Clarryson| Team Lead / Requirements / Integration |
| Ketim | Frontend / Chatbot Interface |
| Ian| Backend / Order Data / Order Lookup |
| Cosmas| Chatbot Logic / Conversation Flows |
| Gladys | Testing / Deployment / Handover |

> Primary responsibility does not prevent other members from contributing through reviews, testing, documentation, integration, debugging, or other agreed work.

---

# 🎯 MVP Scope

## Supported Category 1 — Order Status

The chatbot should handle questions such as:

- Where is my order?
- Has my order shipped?
- When will my order arrive?

The chatbot should be able to provide information such as:

- Order status
- Shipping status
- Carrier
- Estimated delivery date

---

## Supported Category 2 — Returns & Refunds

The chatbot should handle questions such as:

- How do I return this?
- Is my order eligible for return?
- When will I receive my refund?

The chatbot should provide appropriate guidance about:

- Return eligibility
- Return process
- Refund processing
- Expected refund timeline

---

## 🚫 Out of Scope

The following are not part of the initial MVP:

- Stock availability
- Complex human support cases
- Full production e-commerce integration
- Real customer payment processing
- Production customer data

These may be considered future improvements.

---

# 🏗️ Proposed MVP Flow

The basic customer experience should follow this pattern:

```text
Customer opens chatbot
        ↓
Customer asks a question
        ↓
Chatbot identifies the intent
        ↓
 ┌───────────────┬────────────────────┐
 │               │                    │
Order Status   Returns/Refunds    Unsupported
 │               │                    │
 ↓               ↓                    ↓
Request         Apply return       Explain that
order ID        rules               request is
 │               │                  unsupported
 ↓               ↓
Look up         Provide
order           guidance
 │
 ↓
Return status /
shipping /
delivery information





#### Collaborating instructions
1. Open assigned Issue
        ↓
2. Understand requirements
        ↓
3. Move Issue → IN PROGRESS
        ↓
4. Create a branch
        ↓
5. Work locally
        ↓
6. Test the work
        ↓
7. Commit with correct message
        ↓
8. Push branch to GitHub
        ↓
9. Create Pull Request
        ↓
10. Link Pull Request to Issue
        ↓
11. Move Issue → IN REVIEW
        ↓
12. Teammate reviews
        ↓
13. Fix requested changes if any
        ↓
14. Pull Request approved
        ↓
15. Merge
        ↓
16. Issue → DONE





#### Step by step guide to push your branch to github


git checkout main
git pull origin main

git checkout -b feat/NS-XX-short-description

# Work on the issue in VS Code

git status
git add .
git commit -m "feat: what changed - why it matters"
git push -u origin feat/NS-XX-short-description
