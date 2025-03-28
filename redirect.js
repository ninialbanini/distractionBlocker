const site = window.location.hostname; 

switch (site) {
    default:
        document.getElementById("message").innerHTML = "One day you'll be enjoying sunsets like this from all over the world, but for now, maybe take a deep breath and get back to work? <br> If you want to return back to your previous page click the back button, otherwise choose an option from below!";
        break;
}

document.getElementById("goBackButton").addEventListener("click", function () {
    window.close();
    
});

document.getElementById("backToGoogle").addEventListener("click", function () {
    window.location.href = 'https://www.google.com';
});