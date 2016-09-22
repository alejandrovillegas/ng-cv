(function () {
    angular.module('profile.filters', [])
        .directive("profileNetworking", function () {
            return {
                restrict: 'E',
                templateUrl: "assets/directives/profile-networking.html"
            };
        })
        .directive("profileGravatar", function () {
            return {
                restrict: 'E',
                templateUrl: "assets/directives/profile-gravatar.html"
            };
        })
        .directive("profileEducation", function () {
            return {
                restrict: 'E',
                templateUrl: "assets/directives/profile-education.html"
            };
        })
        .directive("profileExperience", function () {
            return {
                restrict: 'E',
                templateUrl: "assets/directives/profile-experience.html"
            };
        });
})();
