const btn = document.querySelector('button');

btn.addEventListener('mouseover',function() {
    console.log('LOL');
    let height = Math.floor(Math.random()*window.innerHeight);
    let width = Math.floor(Math.random()*window.innerWidth);
    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`;    
})

btn.addEventListener('click',function() {
    btn.innerText = " congrates!";
    document.body.style.backgroundColor ='green';
})