// console.log('HI');

const userInput = document.querySelector('form');
userInput.addEventListener('submit',event => {
    event.preventDefault();

    const input = document.querySelector('input');
    // console.log(input.value);

    const encryptedMessage = btoa(input.value);
    console.log(encryptedMessage);
    document.querySelector('#encryptedInput')
        .value = `${window.location}#${encryptedMessage}`;
});