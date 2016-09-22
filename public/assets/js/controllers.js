(function () {
    angular.module('profile.contollers', [])
        .controller('ProfileController', function () {
            this.profile = profile;
        })
        .controller('NetworkingController', function () {
            this.networking = networking;
        })
        .controller('PersonalInformationController', function () {
            this.personalInformation = personalInformation;
        });
})();