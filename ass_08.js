// Function to change the background color smoothly between two specified colors
function changeBackgroundColor() {
    var currentColor = document.body.style.backgroundColor;
    var newColor = (currentColor === "rgb(255, 0, 0)") ? "#00ff00" : "#ff0000";  
        document.body.style.backgroundColor = newColor;
}

// Change the background color every 5 seconds (5000 milliseconds)
//setInterval(changeBackgroundColor, 5000); // Change color every 5 seconds