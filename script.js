// Navigate to Profile Page
function navigateToProfile() {
    window.location.href = "profile.html";
}

// Logout Function
function logoutUser() {
    let confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
        alert("You have been logged out.");
        window.location.href = "index.html";
    }
}

// Show Rewards Popup
function showRewards() {
    let popup = document.getElementById("rewardsPopup");
    popup.style.display = "flex";
    popup.classList.add("animate-popup");
}

// Close Rewards Popup
function closeRewards() {
    let popup = document.getElementById("rewardsPopup");
    popup.classList.remove("animate-popup");
    setTimeout(() => {
        popup.style.display = "none";
    }, 300); // Delay for animation effect
}
