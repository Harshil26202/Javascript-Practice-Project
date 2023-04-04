class Timer{
    constructor(durationInput, startButton, pauseButton,callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click',this.start);
        this.pauseButton.addEventListener('click',this.pause);
    }

    start = () => {
        if(this.onStart){
            this.onStart(this.remainingTime);
        }
        this.tick();
        this.interval = setInterval(this.tick,20);
               // console.log('Time to start timer!');
    };
    pause = () => {
        clearInterval(this.interval);
    };
    tick = () => {
        if( this.remainingTime <=0){
            if(this.onComplete){
                this.onComplete();
            }
            this.pause();
        }
        else{
            this.remainingTime = this.remainingTime -0.02;
            if(this.onTick){
                this.onTick(this.remainingTime);
            }
        }
    };
    get remainingTime() {
        return parseFloat(this.durationInput.value);
    }
    set remainingTime(time) {
        this.durationInput.value = time.toFixed(2);
    }
}
