# Northstar Retail Co. Support Deflection Chatbot — Go-Live Readiness & Handover Note

**Document Version:** 1.0.0  
**Project:** Northstar Support Deflection MVP  
**Status:** ✅ Ready for MVP Pilot / Deployment  
**Repository:** [github.com/kaleian/chatbot-plp](https://github.com/kaleian/chatbot-plp)  

---

## 1. Executive Summary
The **Northstar Support Deflection Chatbot MVP** has been successfully developed, integrated, and validated end-to-end. The system delivers a unified web-based chat assistant connected to an Express.js backend that handles Tier-1 customer support inquiries—specifically **order status tracking** and **return/refund policy guidance**—reducing customer wait times and deflecting routine tickets from human agents.

---

## 2. System Architecture & Deployment Setup

### Architecture Overview
- **Frontend (`/frontend`):** Responsive HTML5/Vanilla CSS/JavaScript chat interface featuring light/dark mode, real-time typing indicators, and intent parsing.
- **Backend API (`/Files/backend`):** Express.js REST API serving both the API endpoints (`/api/orders`, `/api/orders/:orderId`, `/api/health`) and the static frontend UI.
- **Data Store (`/Files/backend/orders.json`):** Structured order dataset containing 10 representative test orders with order statuses, carriers (G4S Kenya, Sendy, Wells Fargo), and delivery dates.

```
       +-------------------------------------------------------------+
       |                  Unified Cloud Service                      |
       |                (Render / Railway / Node.js)                 |
       |                                                             |
       |  +--------------------+         +------------------------+  |
       |  |  Static Frontend   | <-----> |   Express.js API       |  |
       |  |  (index.html, CSS) |  fetch  |   (server.js)          |  |
       |  +--------------------+         +-----------+------------+  |
       |                                             |               |
       |                                             v               |
       |                                   +-------------------+     |
       |                                   |    orders.json    |     |
       |                                   +-------------------+     |
       +-------------------------------------------------------------+
```

### 1-Click Deployment Instructions (Render / Railway)
1. **Repository:** Connect the GitHub repository `kaleian/chatbot-plp` to Render or Railway.
2. **Environment:** Web Service (Node.js).
3. **Build Command:** `npm install && cd Files/backend && npm install`
4. **Start Command:** `node Files/backend/server.js`
5. **Port:** Defaults to `process.env.PORT` or `3000`.

---

## 3. Verified MVP Capabilities (What Works)

| Feature | Description | Status |
|---|---|---|
| **Order Status Tracking** | Users query order IDs (e.g., `NSR-1003`) to retrieve live order status, shipping progress, carrier, and estimated delivery dates. | ✅ Operational |
| **Returns & Refunds Policy** | Automated responses detailing the 30-day return window and 3-5 day refund processing timeline. | ✅ Operational |
| **Live API Integration** | Real-time `fetch` communication between frontend and Express API with animated typing feedback. | ✅ Operational |
| **Error Handling & Fallbacks** | Friendly error messages for unrecognized order numbers and out-of-scope queries. | ✅ Operational |
| **UX & Accessibility** | Dark/Night mode toggle, mobile-responsive view, keyboard navigation (`Enter` key to send). | ✅ Operational |
| **Health Check Endpoint** | Dedicated `/api/health` endpoint for uptime and deployment monitoring. | ✅ Operational |

---

## 4. Known Issues & Limitations

1. **Mock Order Database:** Order records are loaded in-memory from `orders.json`. Changes to orders require updating the JSON file or redeployment until database integration is complete.
2. **Rule-Based Intent Recognition:** Current keyword matching relies on predefined triggers (`track`, `order`, `return`, `refund`). Synonyms outside this vocabulary trigger the fallback assistant message.
3. **Session Persistence:** Chat history resets upon browser refresh.

---

## 5. Handover & Team Requirements

To continue operating, updating, or expanding this MVP, the Northstar engineering and support teams require:

### Local Development Setup
```bash
# 1. Clone repository
git clone git@github.com:kaleian/chatbot-plp.git
cd chatbot-plp

# 2. Install dependencies & start server
npm install
npm start

# 3. Access Application
# Frontend: http://localhost:3000
# Health Check: http://localhost:3000/api/health
# API Endpoint: http://localhost:3000/api/orders/NSR-1001
```

### Key Maintenance Tasks
- **Adding/Editing Orders:** Modify `Files/backend/orders.json` following the schema (`orderId`, `orderStatus`, `shippingStatus`, `carrier`, `estimatedDeliveryDate`).
- **Modifying Intent Logic:** Update `frontend/app.js` under `getBotResponse()` to add new keywords or responses.
- **Styling Changes:** Customize branding, fonts, and colors in `frontend/style.css`.

---

## 6. Recommended Phase 2 Enhancements

1. **Database Integration:** Connect to PostgreSQL or MongoDB for dynamic order management and admin CRUD capabilities.
2. **NLP / AI Upgrade:** Integrate Google Gemini or OpenAI LLM API for fuzzy question answering and semantic intent resolution.
3. **Human Agent Escalation:** Implement a live chat webhook (Zendesk / Freshchat / Intercom) when deflection fails.
4. **Analytics Dashboard:** Track deflection rate, top user questions, and unresolved queries.
