const container = document.querySelector(".container");
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

// Function to calculate and update total
const calculateTotal = () => {
    const selectedSeats = [...container.querySelectorAll('.seat.selected')];
    const selectedSeatIndexes = selectedSeats.map(seat => Array.from(seats).indexOf(seat));

    const selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorage(selectedSeatIndexes);
};

// Function to retrieve data from local storage
function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.includes(index)) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex) {
        select.selectedIndex = selectedMovieIndex;
    }
}

container.addEventListener('click', event => {
    if (event.target.classList.contains('seat') && !event.target.classList.contains('reserved')) {
        event.target.classList.toggle('selected');
        calculateTotal();
    }
});

select.addEventListener('change', () => {
    calculateTotal();
});

// Saving data to local storage
function saveToLocalStorage(indexes) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexes));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}

// Initial function calls
getFromLocalStorage();
calculateTotal();
