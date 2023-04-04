console.log('Strted');
let isEnded = false;
window.setTimeout(function() {
    isEnded = true;
    console.log('ended');
},1);
for(let i =0;i < 10000 && isEnded === false;i++){
    console.log(i);
}

console.log('*');