const movex = (btn, jump) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const windowSize = document.body.clientWidth;
            const btnLeft = btn.getBoundingClientRect().left;
            const btnRight = btn.getBoundingClientRect().right;
            if(btnRight + jump > windowSize){
                reject();
            }
            else{
                btn.style.transform = `translateX(${btnLeft + jump}px)`;
                resolve();
            }
        }, 1000);
    });
};

const btn = document.querySelector('button');

// movex(btn, 100).   
//     then(() => movex(btn,100));
//     .catch( () => {
//     console.log('go away!');
// });


movex(btn, 100)
    .then(() => movex(btn,100))
    .then(() => movex(btn,100))
    .then(() => movex(btn,100))
    .then(() => movex(btn,100))
    .then(() => movex(btn,100))
    .then(() => movex(btn,100))
    .then(() => movex(btn,100))
    .then(() => movex(btn,100))
    .then(() => movex(btn,100))
    .then(() => movex(btn,100))
    .catch(() => console.log('FINISH'));