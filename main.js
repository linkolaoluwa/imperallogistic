let displayNumber = document.querySelectorAll('.num')
let interval = 5000;

displayNumber.forEach((displayNumber) => {
    let startValue = 0;
    let endValue = parseInt(displayNumber.getAttribute
    ("data-val"));
    let duration = Math.floor (interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        displayNumber.textContent = startValue;

        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration)
});
