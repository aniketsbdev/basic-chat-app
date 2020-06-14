const messageArray = [];
function getMessage(content, messageType) {
    console.log(content, messageType);
    var wrapper = document.getElementById("chat-area");
    let myHTML = '';

    if (messageType == 'text-message') {
        let text = document.getElementById(content);
        text.value != ''
            ? messageArray.push({ messageType, text: text.value }) : false;
        text.value = '';
    } else if (messageType == 'image') {
        messageArray.push({ messageType, text: content });
    }
    for (const message of messageArray) {
        message.messageType == 'text-message'
            ? myHTML += `<div class="single-message"><p>${message.text}</p></div>`
            : myHTML += `<div class="single-message"><img class="image-message" src="${message.text}" width="200" /></div>`
        // if () {
        //     ;
        // } else if (message.messageType == 'image') {
        //     ;
        // }
    }
    wrapper.innerHTML = myHTML;
    wrapper.scrollTop = wrapper.scrollHeight;
    return false;
}

function getFile(event) {
    var imageSource = URL.createObjectURL(event.target.files[0]);
    getMessage(imageSource, 'image');
}

console.log(messageArray);