const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const API_BASE = 'http://localhost:3000';

// Track conversation state
let awaitingOrderId = false;

function addMessage(text, sender) {
    if (!text.trim()) return;

    if (sender === 'user') {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user-message');
        messageDiv.innerText = text;
        chatWindow.appendChild(messageDiv);
    } else {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('message-wrapper', 'bot');

        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('bot-avatar-small');
        avatarDiv.innerText = 'N';

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'bot-message');
        messageDiv.innerText = text;

        wrapperDiv.appendChild(avatarDiv);
        wrapperDiv.appendChild(messageDiv);
        chatWindow.appendChild(wrapperDiv);
    }

    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function showTypingIndicator() {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('message-wrapper', 'bot');
    wrapperDiv.id = 'typing-indicator';

    const avatarDiv = document.createElement('div');
    avatarDiv.classList.add('bot-avatar-small');
    avatarDiv.innerText = 'N';

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'bot-message');
    messageDiv.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';

    wrapperDiv.appendChild(avatarDiv);
    wrapperDiv.appendChild(messageDiv);
    chatWindow.appendChild(wrapperDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
}

// Fetch order from the backend API
async function lookupOrder(orderId) {
    try {
        const response = await fetch(`${API_BASE}/api/orders/${orderId.trim()}`);
        const data = await response.json();

        if (data.success) {
            const o = data.order;
            return `Here's your order info for ${o.orderId}:\n` +
                   `📦 Status: ${o.orderStatus}\n` +
                   `🚚 Shipping: ${o.shippingStatus}\n` +
                   `🏢 Carrier: ${o.carrier}\n` +
                   `📅 Est. Delivery: ${o.estimatedDeliveryDate}`;
        } else {
            return `I couldn't find an order with ID "${orderId}". Please double-check your Order ID (e.g., NSR-1001) and try again.`;
        }
    } catch (err) {
        return `I'm having trouble connecting to our order system right now. Please try again in a moment.`;
    }
}

// Detect if the message looks like an order ID (e.g. NSR-1001)
function extractOrderId(text) {
    const match = text.match(/\bNSR-\d+\b/i);
    return match ? match[0].toUpperCase() : null;
}

async function getBotResponse(userMessage) {
    const text = userMessage.toLowerCase().trim();

    // If user is in order-lookup flow, check for an order ID
    if (awaitingOrderId) {
        const orderId = extractOrderId(userMessage);
        if (orderId) {
            awaitingOrderId = false;
            return await lookupOrder(orderId);
        }
        // Maybe they typed a raw order ID without the prefix
        return `Please enter your Order ID in the format NSR-XXXX (e.g., NSR-1001).`;
    }

    // Always check for an order ID anywhere in the message
    const orderId = extractOrderId(userMessage);
    if (orderId) {
        return await lookupOrder(orderId);
    }

    // Intent: Greetings
    if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
        return "Hello! How can I assist you with your Northstar order today?";
    }

    // Intent: Returns & Refunds
    if (text.includes('return') || text.includes('refund') || text.includes('money back')) {
        return "I can help with returns. Items are eligible for a return within 30 days of delivery. Once we receive your item, refunds take 3-5 business days to process. Do you have your Order ID (e.g., NSR-1001)?";
    }

    // Intent: Order Status / Tracking
    if (text.includes('order') || text.includes('track') || text.includes('shipping') || text.includes('arrive') || text.includes('delivery') || text.includes('where')) {
        awaitingOrderId = true;
        return "I can look up your order status. Please type your Order ID (e.g., NSR-1001).";
    }

    // Fallback
    return "I'm a Northstar support assistant. I can help with order tracking and returns. Could you rephrase your question about one of those topics?";
}

async function handleSend() {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    userInput.value = '';
    sendBtn.disabled = true;

    showTypingIndicator();

    setTimeout(async () => {
        const botReply = await getBotResponse(text);
        removeTypingIndicator();
        addMessage(botReply, 'bot');
        sendBtn.disabled = false;
    }, 600);
}

sendBtn.addEventListener('click', handleSend);

userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSend();
    }
});

// Night Mode Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerText = '☀️';
    } else {
        themeToggle.innerText = '🌙';
    }
});