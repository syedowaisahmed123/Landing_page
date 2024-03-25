document.addEventListener("DOMContentLoaded", function() {
    // Find the "Call Now" button by its ID
    var callNowBtn = document.getElementById("callNowBtn");

    // Add click event listener to the button
    callNowBtn.addEventListener("click", function() {
        // Open a phone tab with the specified number
        window.open("tel:9620838575");
    });
});