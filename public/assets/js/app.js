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

   app.directive("profileNetworking", function() {
    return {
      restrict: 'E',
      templateUrl: "assets/directives/profile-networking.html"
    };
  });

   app.directive("profileGravatar", function() {
    return {
      restrict: 'E',
      templateUrl: "assets/directives/profile-gravatar.html"
    };
  });

  app.directive("profileEducation", function() {
    return {
      restrict: 'E',
      templateUrl: "assets/directives/profile-education.html"
    };
  });

  app.directive("profileExperience", function() {
    return {
      restrict: 'E',
      templateUrl: "assets/directives/profile-experience.html"
    };
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
    education: [
      { degre: "Information Technology Engineer", institute: "Politecnico JIC", year: "2007 - 2014" },
      { degre: "Software Developer", institute: "Make It real", year: "Actualmente" }
    ],
    langs: [
      { lang: 'Ingles', level: 'Profesional' },
      { lang: 'Español', level: 'nativo' }
    ],
    interests: ['Bailar', 'cocinar'],
    whoIAm: [
      "Soy desarrollador de software con especialidad en desarrollo web(JavaScript, HTML5, CSS3, JAVA, JAVAEE, Spring, Hibernate, MySql) con experiencia en desarrollo de sistemas descentralizados(AWS EC2, Microservicios) especialmente en la parte comercial y delogística.",
      "Soy una persona que se caracteriza por el sentido de pertenencia, lacapacidad de trabajo en equipo, la búsqueda de actualizaciónpermanente, el trabajo interdisciplinario y el conocimiento de nuevasculturas y personas.",
      "Ingeniero Informático del politécnico colombiano Jaime IsazaCadavid con un gran gusto al software libre, he participado en numerosos proyectos DevOps y adaptación e integraciones en AWS."
    ],
    experiences: [
      { job: 'Software Developer', jobTime: '2014 - Present', jobCompany: 'Komet Sales', jobDescription: 'JAVA Web Developer. Desarrollo de software para sistemas de gran escala (importación y exportación de flores.) (www.kometsales.com) Énfasis en JAVA, JAVA EE, JavaScript, BackBone.js, HTML5, CSS3, Twitter Bootstrap, Stylus, Hibernate, MySql, Spring, JPA y otros. Especialista en lógica de negocio y Test Driven Develop. Generación y mantenimiento de micro-servicios en plataformas Amazon AWS, EC2. Metodologia de desarrollo Agil: Scrum, Kanban' },
      { job: 'Freelance Developer', jobTime: '2015 - Present', jobCompany: 'Origami Agencia', jobDescription: 'Desarrollos de software a la medida en numerosos proyectos frontend.' },
      { job: 'DevOps Developer', jobTime: '2012 - 2014', jobCompany: 'S4DS', jobDescription: 'Análisis, Diseño, programación y Pruebas se Software S4ds, además de participar en numerosos proyectos de infraestructura (AWS) y arquitectura de SW.' }
    ],
    skills : [
      { skill: "Java", hability: "85"},
      { skill: "AWS & DevOps", hability: "80"},
      { skill: "JS", hability: "70"},
      { skill: "Angular", hability: "30"}
    ]
  };

})();
