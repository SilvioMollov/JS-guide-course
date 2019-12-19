const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');



// function printMessage () {
//     const value = messageInput.value;
//     console.log(value || 'clicked  me !');

// }

//this works only when we click the add listener BTN, which directs the function to print msg
function addListener() {
    clickableBtn.addEventListener('click', function() {
        const value = messageInput.value;
        console.log(value || 'clicked  me !');
    });
    console.dir(addListener);
}

addListenerBtn.addEventListener('click',addListener);