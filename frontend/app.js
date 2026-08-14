const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

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

// NEW: Simple Logic Engine for the MVP
function getBotResponse(userMessage) {
    const text = userMessage.toLowerCase();
    
    // Intent 1: Greetings
    if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
        return "Hello! How can I assist you with your Northstar order today?";
    }

    // Intent 2: Returns & Refunds
    if (text.includes('return') || text.includes('refund') || text.includes('money back')) {
        return "I can help with returns. Items are eligible for a return within 30 days of delivery. Once we receive your item, refunds take 3-5 business days to process. Do you have your Order ID?";
    }
    
    // Intent 3: Order Status
    if (text.includes('order') || text.includes('track') || text.includes('shipping') || text.includes('arrive')) {
        return "I can look up your shipping status. Please type your 5-digit Order ID (e.g., 12345).";
    }
    
    // Fallback for Unsupported Queries (Out of Scope for MVP)
    return "I am a beta support bot. I am currently trained to help with Order Statuses and Returns. Could you rephrase your question regarding one of those topics?";
}

// Handle sending messages when the button is clicked
sendBtn.addEventListener('click', () => {
    const text = userInput.value;
    if (!text.trim()) return; 

    // 1. Add User Message
    addMessage(text, 'user');
    userInput.value = ''; 
    
    // 2. Determine and Add Bot Response
    setTimeout(() => {
        const botReply = getBotResponse(text);
        addMessage(botReply, 'bot');
    }, 600); // 600ms delay to simulate typing
});

// Handle sending messages when the Enter key is pressed
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});
// Night Mode Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    // Toggle the class on the body
    body.classList.toggle('dark-mode');
    
    // Swap the icon based on the current theme
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerText = '☀️';
    } else {
        themeToggle.innerText = '🌙';
    }
});