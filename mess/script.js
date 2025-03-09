function displayDateTime() {
    const now = new Date();

    // Define month names
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Get components of the date
    const month = months[now.getMonth()];
    const day = String(now.getDate()).padStart(2, "0"); // Pad day with leading zero
    const year = now.getFullYear();
    

    // Get components of the time (12-hour format)
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Format the date and time
    const dateTimeString = `<span class="date">${month} ${day}, ${year}</span>${hours}:${minutes} ${ampm}`;

    // Display the formatted date and time
    document.getElementById("currentDateTime").innerHTML = dateTimeString;
}

// Call the function when the page loads
displayDateTime();

// Optional: update the time every minute to keep it current
setInterval(displayDateTime, 60000);