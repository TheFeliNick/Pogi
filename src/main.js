import { createChatItem } from "./components/base";

// Функция для создания аватара пользователя
function createUserAvatar(src, alt = "User", size = 50) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.width = size;
    img.height = size;
    img.className = "avatar";
    img.style.borderRadius = "50%"; // Скругление аватара
    return img;
}

// Функция для рендеринга заголовка чата
function renderChatHeader({ name, status, avatarSrc }) {
    const chatHeader = document.querySelector(".chat-header");
    chatHeader.innerHTML = ""; // Очищаем предыдущий заголовок

    const chatUser = document.createElement("div");
    chatUser.className = "chat-user";

    const avatar = createUserAvatar(avatarSrc, name, 50);

    const userInfo = document.createElement("div");
    const userName = document.createElement("div");
    userName.className = "user-name";
    userName.textContent = name;

    const userStatus = document.createElement("div");
    userStatus.className = "user-status";
    userStatus.textContent = status || "Online";

    userInfo.appendChild(userName);
    userInfo.appendChild(userStatus);
    chatUser.appendChild(avatar);
    chatUser.appendChild(userInfo);
    chatHeader.appendChild(chatUser);
}

// Функция для рендеринга сообщений
function renderMessages(messages) {
    const chatMessages = document.querySelector(".chat-messages");
    chatMessages.innerHTML = ""; // Очищаем старые сообщения

    messages.forEach(msg => {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${msg.sender === "Me" ? "sent" : "received"}`;
        messageDiv.textContent = msg.text;
        chatMessages.appendChild(messageDiv);
    });
}

const chatList = document.querySelector(".chat-list");

// Данные пользователей и их сообщений
const users = [
    { 
        id: 1,
        avatarSrc: "https://i.pinimg.com/originals/31/55/24/3155249dfc032467e834690011d42ce0.jpg", 
        name: "Aaron Watts", 
        status: "Interactive Art Director @ Degordian", 
        lastMessage: "Yes, 8:30 @ Kims",
        messages: [
            { sender: "Aaron Watts", text: "I was thinking in setting up our meeting. Loong overdue :)" },
            { sender: "Me", text: "Sure, however suits you 😊 I'm available." },
            { sender: "Aaron Watts", text: "I'm updating the calendar. Thought I did that already." },
            { sender: "Me", text: "No sweat dude" },
            { sender: "Aaron Watts", text: "Ok... so I have switched us to every first Wednesday in the month." },
            { sender: "Me", text: "Nice, can you make it on the 22nd?" },
            { sender: "Aaron Watts", text: "Yes, 8:30 @ Kims as usual?" },
            { sender: "Aaron Watts", text: "I was thinking in setting up our meeting. Loong overdue :)" },
            { sender: "Me", text: "Sure, however suits you 😊 I'm available." },
            { sender: "Aaron Watts", text: "I'm updating the calendar. Thought I did that already." },
            { sender: "Me", text: "No sweat dude" },
            { sender: "Aaron Watts", text: "Ok... so I have switched us to every first Wednesday in the month." },
            { sender: "Me", text: "Nice, can you make it on the 22nd?" },
            { sender: "Aaron Watts", text: "Yes, 8:30 @ Kims as usual?" },
            { sender: "Aaron Watts", text: "I was thinking in setting up our meeting. Loong overdue :)" },
            { sender: "Me", text: "Sure, however suits you 😊 I'm available." },
            { sender: "Aaron Watts", text: "I'm updating the calendar. Thought I did that already." },
            { sender: "Me", text: "No sweat dude" },
            { sender: "Aaron Watts", text: "Ok... so I have switched us to every first Wednesday in the month." },
            { sender: "Me", text: "Nice, can you make it on the 22nd?" },
            { sender: "Aaron Watts", text: "Yes, 8:30 @ Kims as usual?" },
            { sender: "Aaron Watts", text: "I was thinking in setting up our meeting. Loong overdue :)" },
            { sender: "Me", text: "Sure, however suits you 😊 I'm available." },
            { sender: "Aaron Watts", text: "I'm updating the calendar. Thought I did that already." },
            { sender: "Me", text: "No sweat dude" },
            { sender: "Aaron Watts", text: "Ok... so I have switched us to every first Wednesday in the month." },
            { sender: "Me", text: "Nice, can you make it on the 22nd?" },
            { sender: "Aaron Watts", text: "Yes, 8:30 @ Kims as usual?" }
            
        ]
    },
    { 
        id: 2,
        avatarSrc: "https://i.pinimg.com/originals/c9/21/1d/c9211d39910ebbf9fe5e0315e02ff001.png", 
        name: "Aiden McKinney", 
        status: "Software Engineer @ Degordian", 
        lastMessage: "You: https://degordian.team",
        messages: [
            { sender: "Me", text: "Hey, how’s the project going?" },
            { sender: "Aiden McKinney", text: "Almost done, just finalizing the UI." },
            { sender: "Me", text: "Nice! Can't wait to see it." }
        ]
    },
    { 
        id: 3,
        avatarSrc: "https://i.pinimg.com/736x/5d/fc/2b/5dfc2b9d3dbd6eeff4fc4c83e2e3e11a.jpg", 
        name: "Marie Nguyen", 
        status: "Designer @ Degordian", 
        lastMessage: "You: 😉",
        messages: [
            { sender: "Marie Nguyen", text: "Hey! Want to grab lunch later?" },
            { sender: "Me", text: "Sure! Where do you want to go?" },
            { sender: "Marie Nguyen", text: "Maybe sushi? 🍣" },
            { sender: "Me", text: "Sounds great!" }
        ]
    }
];

// Функция обработки клика по чату
function openChat(user) {
    renderChatHeader(user); // Обновляем заголовок чата
    renderMessages(user.messages); // Обновляем сообщения
}

// Добавление пользователей в список чатов
users.forEach(user => {
    const chatItem = createChatItem(user);
    chatItem.addEventListener("click", () => openChat(user)); // Открываем чат при клике
    chatList.appendChild(chatItem);
});

// Открываем первый чат при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    openChat(users[0]);
});
