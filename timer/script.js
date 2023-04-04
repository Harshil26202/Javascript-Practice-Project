
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause'); 
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r')*2 * Math.PI;
circle.setAttribute('stroke-dasharray',perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton,{
    onStart(totalDuration) {
        console.log('started');
        duration = totalDuration;
    },
    onTick(remainingTime) {
        circle.setAttribute('stroke-dashoffset',
            perimeter * remainingTime/duration - perimeter
        );
        
    },
    onComplete() {
        console.log('Completed');
    }
});
