const wsServerUrl = "ws://localhost:1331";
const restServerUrl = "localhost:1332";

export default function ChatService(user) {
    this.user = user;

    this.openConnection = (function() {
        this.ws = new WebSocket(wsServerUrl);
        this.ws.onopen = function(message) {
            alert("got message " + JSON.stringify(message.data));
            //TODO alert chat components
        };
    }).bind(this);

    this.subscribeToChat = (function(chatId) {
        const message = {
            event: "SUBSCRIBE",
            data: chatId,
            user: this.user
        };

        this.ws.send(JSON.stringify(message));
    }).bind(this);

    this.sendChatMessage = (function(chatId, text) {
        const message = {
            event: "WRITE",
            data: {
                chatId,
                text
            },
            user: this.user
        };

        this.ws.send(JSON.stringify(message));
    }).bind(this);

    this.isConnectionOpen = (function() {
        return this.ws && this.ws.readyState === WebSocket.OPEN;
    }).bind(this);
}