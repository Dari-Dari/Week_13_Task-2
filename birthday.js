const bDayInput = document.getElementById('bDayInput');
const dayToBDayOutput = document.getElementById('dayToBDay');
const bDayBtn = document.getElementById('bDayBtn');
const errorText = document.getElementById('errorText');

bDayBtn.addEventListener('click', calculateDaysToBDay);

function calculateDaysToBDay() {
    if (bDayInput.value.trim() === '') {
        errorText.style.display = 'block';
    } else {
        errorText.style.display = 'none';
    }

    const bDayDate = new Date(bDayInput.value);
    const currentDay = new Date();

    const dayDiff = bDayDate.getTime() - currentDay.getTime();
    const daysToBDay = Math.ceil(dayDiff / (1000 * 60 * 60 * 24));

    let dayWord = 'дней';
    if (daysToBDay % 10 === 1 && daysToBDay % 100 !== 11) {
        dayWord = 'день';
    } else if (
        (daysToBDay % 10 === 2 || daysToBDay % 10 === 3 || daysToBDay % 10 === 4) &&
        (daysToBDay % 100 !== 12 && daysToBDay % 100 !== 13 && daysToBDay % 100 !== 14)
    ) {
        dayWord = 'дня';
    }

    if (daysToBDay) {
        dayToBDayOutput.textContent = `${daysToBDay} ${dayWord}`;
    } else {
        dayToBDayOutput.textContent = `Пока не введёшь дату, не покажу`;
    }

}