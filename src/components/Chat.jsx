import React from 'react';
const serverUrl = "ws://localhost:1331";

export function Chat(props) {
    const chatId = props.chatId;
    let ws = new WebSocket(serverUrl);
    ws.onopen = function() {
        ws.send(JSON.stringify({
            event: "SUBSCRIBE",
            data: chatId,
            user: {
                name:"itay",
                id: "userUniqueID"
            } //TODO get user in props
        }));
     };

     ws.onmessage = function(message) {
        alert(JSON.stringify(message.data));        
        message = JSON.parse(message);
     }

     const sendMessage = () => {
       ws.send(JSON.stringify({
           event: "WRITE",
           data: {
               chatId,
               text: "message example text"
           },
           user: {
            name:"itay",
            id: "userUniqueID"
           }
       }))  
     };
    return <button onClick={sendMessage}>{chatId}</button>
}