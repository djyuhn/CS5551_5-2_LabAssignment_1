/**
 * Created by user on 24/02/2016.
 */
var myapp = angular.module( 'app', ['googleOauth','FacebookProvider'] );

myapp.controller( 'HomeController', function ($scope, $http,$rootScope,$log, $window, Token, Facebook,$http,$location) {
    $scope.accessToken = Token.get()
    //  https://api.edamam.com/diet?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free
    $scope.recipelist = new Array();
    $scope.venueList = new Array();
    $scope.mostRecentReview;
    $scope.findRecipe = function () {
        //var end = document.getElementById('endlocation').value;
        alert( "hello" + $scope.recipe );
        $http.get( 'https://api.edamam.com/search?q=' + $scope.recipe + '&app_id=90345b31&app_key=7884f37e59a7ff7d16ceb275bec553a9&from=0&to=3' ).success( function (data1) {
            console.log( data1 );
            for (var i = 0; i < data1.hits.length; i++) {
                $scope.recipelist[i]= {

                    "name": data1.hits[i].recipe.label,
                    "url": data1.hits[i].recipe.url,
                    "icon": data1.hits[i].recipe.image
                };
            }

        } )

    };

    $scope.getVenues = function () {
        var place = document.getElementById("place").value;
        var food = document.getElementById("recipe").value;
        if (place !== null && place !== "" && food !== null && food !== "") {
          //  document.getElementById('div_ReviewList').style.display = 'none';
            //This is the API that gives the list of venues based on the place and search query.
            var handler = $http.get("https://api.foursquare.com/v2/venues/search" +
                "?client_id=3PPNMTIKJJNDVYPFOBGSHHV2PR5A2P05PYHXDN2MKSKTTBSX" +
                "&client_secret=0QPHT0F5RS043F4TB4KKPQSHKSAXKE5ZNOYGB5KL2MBDYAG4" +
                "&v=20160215&limit=5" +
                "&near=" + place +
                "&query=" + food);
            handler.success(function (data) {

                if (data != null && data.response != null && data.response.venues !== undefined && data.response.venues !== null) {
                    for (var i = 0; i < data.response.venues.length; i++) {
                        $scope.venueList[i] = {
                            "name": data.response.venues[i].name,
                            "id": data.response.venues[i].id,
                            "location": data.response.venues[i].location
                        };
                    }
                }

            })
            handler.error(function (data) {
                alert("There was some error processing your request. Please try after some time.");
            });
        }
    };
} );


