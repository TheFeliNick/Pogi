import { createButton,createAvatar,createChatItem } from "./components/base.js";

document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector(".app");
    const sendButton = createButton("Отправить", "btn-primary");
    body.appendChild(sendButton);

    const avatar = createAvatar("https://avatars.mds.yandex.net/i?id=4b53423f6003e6698a20bdc21a5c70ea_l-5322694-images-thumbs&n=13", "Профиль", 50);
    body.prepend(avatar); 


        const user1 = createChatItem({
            avatarSrc: "avatar1.png",
            name: "Алексей",
            message: "Привет! Как дела?"
        });

        const user2 = createChatItem({
            avatarSrc: "avatar2.png",
            name: "Мария",
            message: "Когда встретимся?"
        });

        body.appendChild(user1)
        body.appendChild(user2)

});