function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleDarkMode(event) {
    if (event) event.preventDefault();
    const body = document.body;
    body.classList.toggle("dark-mode");

    const isDarkMode = body.classList.contains("dark-mode");
    
    //change the darkmode word
    const darkModeLinkDesktop = document.querySelector("#desktop-nav a[href='#theme']");
    const darkModeLinkHamburger = document.querySelector("#hamburger-nav a[href='#theme']");
    
    if (darkModeLinkDesktop) {
        darkModeLinkDesktop.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    }
    if (darkModeLinkHamburger) {
        darkModeLinkHamburger.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    }

    // Change the icons
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        const currentSrc = icon.getAttribute('src');
        if (isDarkMode) {
            // Change to white version
            if (currentSrc.includes('github.png')) {
                icon.setAttribute('src', './assets/github_white.png');
            } else if (currentSrc.includes('linkedin.png')) {
                icon.setAttribute('src', './assets/linkedin_white.png');
            } else if (currentSrc.includes('facebook.png')) {
                icon.setAttribute('src', './assets/facebook_white.png');
            } else if (currentSrc.includes('experience.png')) {
                icon.setAttribute('src', './assets/experience_white.png');
            } else if (currentSrc.includes('education.png')) {
                icon.setAttribute('src', './assets/education_white.png');
            } else if (currentSrc.includes('arrow.png')) {
                icon.setAttribute('src', './assets/arrow_white.png');
            } else if (currentSrc.includes('checkmark.png')) {
                icon.setAttribute('src', './assets/checkmark_white.png');
            } else if (currentSrc.includes('email.png')) {
                icon.setAttribute('src', './assets/email_white.png');
            } else if (currentSrc.includes('phone.png')) {
                icon.setAttribute('src', './assets/phone_white.png');
            } 
        } else {
            // Change to dark version
            if (currentSrc.includes('github_white.png')) {
                icon.setAttribute('src', './assets/github.png');
            } else if (currentSrc.includes('linkedin_white.png')) {
                icon.setAttribute('src', './assets/linkedin.png');
            } else if (currentSrc.includes('facebook_white.png')) {
                icon.setAttribute('src', './assets/facebook.png');
            } else if (currentSrc.includes('experience_white.png')) {
                icon.setAttribute('src', './assets/experience.png');
            } else if (currentSrc.includes('education_white.png')) {
                icon.setAttribute('src', './assets/education.png');
            } else if (currentSrc.includes('arrow_white.png')) {
                icon.setAttribute('src', './assets/arrow.png');
            } else if (currentSrc.includes('checkamrk_white.png')) {
                icon.setAttribute('src', './assets/checkmark.png');
            } else if (currentSrc.includes('email_white.png')) {
                icon.setAttribute('src', './assets/email.png');
            } else if (currentSrc.includes('phone_white.png')) {
                icon.setAttribute('src', './assets/phone.png');
            } 
        }
    });
}

// Change the profile picture
const profilePic = document.getElementById("profile-pic");
if (profilePic) {
    const currentSrc = profilePic.getAttribute('src');
    if (isDarkMode) {
        profilePic.setAttribute('src', './assets/profile-pic-2.png');
    } else {
        profilePic.setAttribute('src', './assets/profile-pic.png');
    }
}



document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggleDesktop = document.getElementById("desktop-dark-mode-toggle");
    const darkModeToggleHamburger = document.getElementById("hamburger-dark-mode-toggle");

    darkModeToggleDesktop.addEventListener("click", function(event) {
        event.preventDefault();
        toggleDarkMode();
    });

    darkModeToggleHamburger.addEventListener("click", function(event) {
        event.preventDefault();
        toggleDarkMode();
    });
});


