(function () {
    "use strict";

    angular
        .module("app")
        .controller('LoginController', LoginController)
        .controller('gglLoginController', gglLoginController);

    LoginController.$inject = ["$location", "AuthenticationService", "FlashService"];
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path("/home");
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        }
    }

    gglLoginController.$inject = ["$location", "AuthenticationService", "FlashService", "UserService"];
    function gglLoginController($location, AuthenticationService, FlashService, UserService) {
        var vm = this;

        vm.gglLogin = gglLogin;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        vm.register = register;

        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.gglUser)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }

        function gglLogin() {
            vm.gglLoading = true;

            AuthenticationService.Login(vm.gglUser, vm.gglPass, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.gglUser, vm.gglPass);
                    $location.path("/home");
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        }
    }
})();

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    window.location = "../CS5551-Tutorial-III/index.html#!/home";
}