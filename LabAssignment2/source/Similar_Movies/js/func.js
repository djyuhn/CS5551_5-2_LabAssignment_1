


// storing input from register-form
function register() {
    var userEmail = document.getElementById('email');

    var userPassword = document.getElementById('password');
    localStorage.setItem('userEmail', userEmail.value);
    localStorage.setItem('userPassword', userPassword.value);
    alert("Registered successfully");
    self.location="Login.html";

}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {
    // stored data from the register-form
    var storedEmail = localStorage.getItem('userEmail');
    var storedPassword = localStorage.getItem('userPassword');
    // entered data from the login-form
    var userEmail = document.getElementById('email');
    var userPassword = document.getElementById('password');
    // check if stored data from register-form is equal to data from login form
    if(userEmail.value !== storedEmail || userPassword.value !== storedPassword) {
        alert("Incorrect email or password! Please try again.");

    }else {
        self.location="Home.html";

    }
}
window.fbAsyncInit = function () {
    FB.init({
        appId: '116838965656264',
        cookie     : true,
        xfbml      : true,
        version: 'v2.10'
    });
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            document.getElementById('status').innerHTML = 'We are connected to FaceBook';
        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'We are not connected to FaceBook';
        } else{
            document.getElementById('status').innerHTML = 'We are not logged into FaceBook';
        }
    });
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function  login() {
    FB.login(function (response) {
        if (response.status === 'connected') {
            self.location="Home.html";
            document.getElementById('status').innerHTML = 'We are connected to FaceBook';
        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'We are not connected to FaceBook';
        } else{
            document.getElementById('status').innerHTML = 'We are not logged into FaceBook';
        }
    });
}
