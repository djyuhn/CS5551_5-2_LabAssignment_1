'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])


    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.mostRecentReview;
        $scope.Search = function () {
            var keyword = document.getElementById("keyword").value;
            if (keyword != null) {
                var handler = $http.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBRXn4UDfXu2OT7OnshOvc1NRoBhO7fzLY&part=snippet&maxResults=5"+
                    "&q="+ keyword);

                handler.success(function (data) {

                    if (data != null) {
                        for (var i = 0; i < 5; i++) {

                            $scope.venueList[i] = {
                                "videoId": data.items[i].id.videoId,
                                "title": data.items[i].snippet.title,
                                "description": data.items[i].snippet.description
                            };
                        }
                    }
                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }
        $scope.Translate = function(){

            $scope.translation = "Here's your keyword in Chinese:";
            var keyword = document.getElementById("keyword").value;
            if(keyword!=null)
            {

                var handler = $http.get("https://translation.googleapis.com/language/translate/v2?key=AIzaSyCRKF5-uZIaa-Mkr92RPsBQmxc25SH1F90&q="+
                    keyword+"&target=zh-CN");
                handler.success(function(data) {

                    $scope.translation += data.data.translations[0].translatedText;

                })
                handler.error(function(date) {
                   alert ("There was some error processing your request. Please try after some time.");
                });
            }

        }

    });
