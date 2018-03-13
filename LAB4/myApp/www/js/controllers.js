angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope) {
})


.controller('mycntrl', function($scope, $http) {

    $scope.findMovie = function () {
        var mtitle = document.getElementById("mtitle").value;
        var url="http://api.themoviedb.org/3/search/movie?api_key=773758fa2aee67f2a64921ba6a31d28c&query="+mtitle
//console.log($scope.mtitle);
        $http.get(url)
            .success(function (response) {
                alert("hello");
                $scope.posterimg = response.results[0].poster_path;
                $scope.img = "https://image.tmdb.org/t/p/original"+($scope.posterimg);
                $scope.Title=response.results[0].title;
                $scope.Popularity=response.results[0].popularity;
                $scope.Releasedon=response.results[0].release_date;
                $scope.Liked=response.results[0].vote_count;
                $scope.Storyline=response.results[0].overview;

            });
    };

    $scope.classify=function(){
        var mtext = document.getElementById("mtext").value;
        
        var url="https://api.uclassify.com/v1/uClassify/Sentiment/classify/?readKey=RiI5dO1glGLc&text="+mtext
                 
         $http.get(url)
             .success(function(response){
                  alert("hello");
                  $scope.Text = mtext;
                  $scope.Negative = response.negative;
                  $scope.Positive = response.positive;
             })
            .error(function(response){
             alert("There was some error processing your request. Please try after some time.");
         });

        
    }

});
