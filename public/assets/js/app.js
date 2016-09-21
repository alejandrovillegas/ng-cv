(function () {
  var app = angular.module('hojaDeVida', []);

  app.controller('ProfileController', function () {
    this.profile = profile;
  });

  app.controller('NetworkingController', function () {
    this.networking = networking;
  });

  app.controller('PersonalInformationController', function () {
    this.personalInformation = personalInformation;
  });

  networking = {
    mail: "alejo163@hotmail.com",
    cel: "301 491 3882",
    webpage: "http://alejovillegas.com",
    github: "alejandrovillegasc",
    githubWebpage: "https://github.com/alejandrovillegas",
    twitter: "@neopilatos",
    twitterWebpage: "https://twitter.com/neopilatos"
  };


  profile = {
    id: "001",
    image: "profile.png",
    name: "Alejandro Villegas",
    profesion: "Full Stack Developer"
  };

  personalInformation = {
    education :[
      { degre : "Information Technology Engineer", institute : "Politecnico JIC" , year : "2007 - 2014"  },
      { degre : "Software Developer", institute : "Make It real" , year : "Actualmente"  }
    ],
    langs :[
      { lang: 'Ingles', level: 'Profesional' },
      { lang: 'Español', level: 'nativo' }
    ],
    interests : ['Bailar','cocinar'],
  };

})();
