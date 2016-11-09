
export function routerConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('registration', {
      url: '/',
            templateUrl: 'views/registration/registration.view.html',
            controller: 'registrationController',
            controllerAs: 'vm',
      }
    )
      .state('companies', {
          template:
          '<div ui-view="news"></div>' +
          '<div ui-view="listCompanies"></div>' +
          '<div ui-view="totalCompanies"></div>' +
          '<div ui-view="locationCompanies"></div>' +
          '<div ui-view="locationCompanies"></div>'
      })
      .state('companies.all', {
              url: '/',
          views: {
              'news': {
                  templateUrl: 'views/news/news.view.html',
                  controller: 'newsController',
                  controllerAs: 'vm',
              },
              'totalCompanies': {
                  templateUrl: 'views/totalCompanies/totalCompanies.view.html',
                  controller: 'totalCompaniesController',
                  controllerAs: 'vm',
              },
              'listCompanies': {
                  templateUrl: 'views/listCompanies/listCompanies.view.html',
                  controller: 'listCompaniesController',
                  controllerAs: 'vm',
              },
              'locationCompanies': {
                  templateUrl: 'views/locationCompanies/locationCompanies.view.html',
                  controller: 'locationCompaniesController',
                  controllerAs: 'vm',
              }
          }

          }
      );

    $urlRouterProvider.otherwise('/');
}
