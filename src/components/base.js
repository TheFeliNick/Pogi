export function createButton(text, className = "") {
    const button = document.createElement("button");
    button.className = `btn ${className}`;
    button.textContent = text;
    return button;
}

export function createAvatar(src = "profile-placeholder.png", alt = "Avatar", size = 40) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.width = size;
    img.height = size;
    img.className = "avatar";
    return img;
}

export function createChatItem({ avatarSrc, name, message }) {
    const chatItem = document.createElement("div");
    chatItem.className = "chat-item";

    const avatar = createAvatar(avatarSrc, name, 50);

    const info = document.createElement("div");
    info.className = "info";

    const userName = document.createElement("div");
    userName.className = "name";
    userName.textContent = name;

    const lastMessage = document.createElement("div");
    lastMessage.className = "last-message";
    lastMessage.textContent = message;

    info.appendChild(userName);
    info.appendChild(lastMessage);

    chatItem.appendChild(avatar);
    chatItem.appendChild(info);

    return chatItem;
}