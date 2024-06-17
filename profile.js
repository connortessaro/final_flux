var username = document.querySelector('.profile-username');
var bio = document.querySelector('.profile-bio');
var btnEdit = document.querySelector('.btn-edit');
var btnSave = document.querySelector('.btn-save');

// Function to get query parameters from the URL
function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Load the profile based on the username from the URL
window.addEventListener('load', function() {
    var usernameParam = getQueryParam('username');
    if (usernameParam) {
        // Show the profile for the username in the URL
        username.textContent = usernameParam;

        // Show the bio if it exists in localStorage
        var userBio = localStorage.getItem(`profile-bio`);
        if (userBio) {
            bio.textContent = userBio;
        } 
        else {
            console.log(defaultThreads)
            bio.textContent = "bio does not exist"
        }
    } else {
        // Load the saved profile details from localStorage
        var savedUsername = localStorage.getItem('profile-username');
        var savedBio = localStorage.getItem('profile-bio');
        
        if (savedUsername) {
            username.textContent = savedUsername;
        }
        if (savedBio) {
            bio.textContent = savedBio;
        }
    }
});

btnSave.addEventListener('click', function() {
    username.setAttribute('contenteditable', 'false');
    bio.setAttribute('contenteditable', 'false');
    btnSave.style.display = 'none';
    btnEdit.style.display = 'inline';

    // Save the updated username and bio to localStorage
    var currentUsername = username.textContent;
    localStorage.setItem('profile-username', currentUsername);
    localStorage.setItem('bio-' + currentUsername, bio.textContent);
});
