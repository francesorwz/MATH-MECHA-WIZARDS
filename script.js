// Interactive JavaScript functionality

function displayCurrentDateTime() {
    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };
    const formattedDate = date.toLocaleString('sv-SE', options);
    console.log(`Current Date and Time (UTC): ${formattedDate}`);
}

displayCurrentDateTime();