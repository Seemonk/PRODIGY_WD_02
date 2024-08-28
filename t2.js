let startTime, updatedTime, difference;
let timerInterval;
let running = false;
const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const laps = document.getElementById('laps');
function startStopwatch() {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateDisplay, 1000);
    running = true;
    startStopBtn.textContent = 'Stop';
    lapBtn.disabled = false;
    resetBtn.disabled = false;
}
function stopStopwatch() {
    clearInterval(timerInterval);
    running = false;
    startStopBtn.textContent = 'Start';
}
function resetStopwatch() {
    clearInterval(timerInterval);
    running = false;
    display.textContent = '00:00:00';
    laps.innerHTML = '';
    startStopBtn.textContent = 'Start';
    lapBtn.disabled = true;
    resetBtn.disabled = true;
}
function recordLap() {
    const lapTime = document.createElement('div');
    lapTime.textContent = display.textContent;
    laps.appendChild(lapTime);
}
function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
function pad(number) {
    return number < 10 ? '0' + number : number;
}
startStopBtn.addEventListener('click', function() {
    running ? stopStopwatch() : startStopwatch();
});
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', recordLap);