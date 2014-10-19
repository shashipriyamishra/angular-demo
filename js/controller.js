var phonecatApp = angular.module('phonecatApp', ['ngRoute']);



phonecatApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			}).
			
			//route for phone list
			  when('/phones', {
				templateUrl: 'index.html',
				controller: 'PhoneListCtrl'
			  }).
			  
			 //route for phone id 
			  when('/phones/:phoneId', {
				templateUrl: 'pages/phone-detail.html',
				controller: 'PhoneDetailCtrl'
			  }).
			 //otherwise 
			  otherwise({
				redirectTo: '/phones'
			  });
			  
	});



phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

phonecatApp.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);


phonecatApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});


phonecatApp.controller('aboutController', function($scope) {
	// create a message to display in our view
		$scope.message = 'Look! I am an about page.';
	});

	phonecatApp.controller('contactController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

//tab controller
phonecatApp.controller('TabsCtrl', ['$scope', function ($scope) {
    $scope.tabs = [{
            title: 'One',
            url: 'one.tpl.html'
        }, {
            title: 'Two',
            url: 'two.tpl.html'
        }, {
            title: 'Three',
            url: 'three.tpl.html'
    }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}]);