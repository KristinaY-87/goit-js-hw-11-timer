import refs from './refs.js';

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    };
   
    timer() {
        
        setInterval(() => {
            const currentDate = Date.now();
            const time = this.targetDate - currentDate;

            const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
            const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
            const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        updateTimerFace({days, hours, mins, secs})
        }, 1000);
    };
    
    pad(value) {
    return String(value).padStart(2, '0');
    }
    
};

function updateTimerFace({ days, hours, mins, secs }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
};

const newTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 01,2021'),
});

newTimer.timer();



